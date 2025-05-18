const PORT = 3000;

let SERVER_VERIFICATED = false;

let JwtSecret = "";
let Imgur_client_id = "";
let Weather_api_key = "";

const express = require("express");
const ratelimit = require("express-rate-limit");
const app = express();
const axios = require("axios");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const { use } = require("react");
const path = require("path");
const { connect } = require("http2");
const pgp = require("pg-promise")();

let database = null;
const sessions = new Map(); //Structure: {token: userId}

const Access_JWT = {
  httpOnly: true,
  secure: true,
  maxage: 60 * 30, // 30 minutes
  sameSite: "strict",
};
const Update_JWT = {
  httpOnly: true,
  secure: true,
  maxage: 60 * 60 * 24 * 3, // 3 days
  sameSite: "strict",
};

//database
async function getUserByUsername(username) {
  return new Promise((resolve, reject) => {
    database
      .one("SELECT * FROM users WHERE username = $1", [username])
      .then((user) => resolve(user))
      .catch((error) => reject(error));
  });
}
async function getUserById(id) {
  return new Promise((resolve, reject) => {
    database
      .one("SELECT * FROM users WHERE id = $1", [id])
      .then((user) => resolve(user))
      .catch((error) => reject(error));
  });
}
async function addUser(username, password) {
  const hashedPassword = await bcrypt.hash(password, 10);
  return new Promise((resolve, reject) => {
    database
      .one("INSERT INTO users(username, password) VALUES($1, $2)", [
        username,
        hashedPassword,
      ])
      .then((data) => resolve(data.id))
      .catch((error) => reject(error));
  });
}

//sessions
async function verifyJwt(token) {
  try {
    const decoded = jwt.verify(token, JwtSecret); // Add secret
    return decoded;
  } catch (err) {
    return null;
  }
}
async function createJwt(userId) {
  return new Promise((resolve, reject) => {
    const token = jwt.sign({ userId }, JwtSecret, {
      expiresIn: "30m",
    });
    const updatetoken = jwt.sign({ userId }, JwtSecret, {
      expiresIn: "3d",
    });
    sessions.set(updatetoken, userId);
    resolve({ token, updatetoken });
  });
}
async function cookieUser(token, updatetoken, res) {
  return new Promise((resolve, reject) => {
    const userId = sessions.get(token);
    if (userId) {
      res.cookie("access_token", token, Access_JWT);
      res.cookie("update_token", updatetoken, Update_JWT);
      resolve(userId);
    } else {
      reject("Invalid token");
    }
  });
}
async function checkUser(req, res) {
  return new Promise((resolve, reject) => {
    const token = req.cookies["access_token"];
    const updatetoken = req.cookies["update_token"];
    if (token) {
      verifyJwt(token)
        .then((decoded) => {
          resolve(decoded.userId);
        })
        .catch((err) => {
          reject("Invalid or expired token");
        });
    } else if (updatetoken) {
      verifyJwt(updatetoken)
        .then((decoded) => {
          //now checking if token isnt used
          if (sessions.get(updatetoken) == decoded.userId) {
            createJwt(decoded.userId)
              .then((result) => {
                const token = result.token;
                const updatetoken = result.updatetoken;
                cookieUser(token, updatetoken, res)
                  .then((userId) => {
                    resolve(userId);
                  })
                  .catch((err) => {
                    reject("Invalid or expired token");
                  });
              })
              .catch((err) => {
                reject("Invalid or expired token");
              });
          }
        })
        .catch((err) => {
          reject("Update token used/expired/invalid");
        });
    } else {
      reject("No tokens provided");
    }
  });
}

//middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const getLimiter = ratelimit({
  windowMs: 10 * 1000, // 1 minute
  max: 10, // limit each IP to 10 requests per windowMs
  message: "Too many requests, please try again later",
});

app.get("/", (req, res) => {
  res.redirect("/home");
});

app.get("/home", getLimiter, (req, res) => {
  checkUser(req, res)
    .then((userId) => {
      res.sendFile(path.join(__dirname, "public", "home.html"));
    })
    .catch((rejection) => {
      res.redirect("/join");
    });
});

app.get("/account", getLimiter, (req, res) => {
  checkUser(req, res)
    .then((userId) => {
      res.redirect("/account");
    })
    .catch((rejection) => {
      res.sendFile(path.join(__dirname, "public", "join.html"));
    });
});

app.get("/join", getLimiter, (req, res) => {
  checkUser(req, res)
    .then((userId) => {
      res.redirect("/home");
    })
    .catch((rejection) => {
      res.sendFile(path.join(__dirname, "public", "join.html"));
    });
});

//post requests
const loginLimiter = ratelimit({
  windowMs: 30 * 1000, // 30 seconds
  max: 5, // limit each IP to 5 requests per windowMs
  message: "Too many requests, please try again later",
});
app.post("/login", loginLimiter, (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).send("Username and password required");
  }
  getUserByUsername(username)
    .then((user) => {
      if (user) {
        bcrypt
          .compare(password, user.password)
          .then((result) => {
            if (result) {
              createJwt(user.id)
                .then((result) => {
                  const token = result.token;
                  const updatetoken = result.updatetoken;
                  cookieUser(token, updatetoken, res)
                    .then((userId) => {
                      res.redirect("/home");
                    })
                    .catch((err) => {
                      res.status(500).send("Error creating cookies");
                    });
                })
                .catch((err) => {
                  res.status(500).send("Error creating JWT");
                });
            } else {
              res.status(401).send("Invalid password");
            }
          })
          .catch((err) => {
            res.status(500).send("Error comparing passwords");
          });
      } else {
        res.status(404).send("User not found");
      }
    })
    .catch((err) => {
      res.status(500).send("Error getting user");
    });
});
const signupLimiter = ratelimit({
  windowMs: 60 * 1000, // 1 minute
  max: 5, // limit each IP to 5 requests per windowMs
  message: "Too many requests, please try again later",
});
app.post("/signup", signupLimiter, (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).send("Username and password required");
  }
  if (username.length < 3 || username.length > 20) {
    return res.status(400).send("Username must be 3-20 characters");
  }
  if (password.length < 8) {
    return res.status(400).send("Password must be at least 8 characters");
  }
  getUserByUsername(username)
    .then((user) => {
      if (user) {
        res.status(409).send("User already exists");
      } else {
        addUser(username, password)
          .then((userId) => {
            createJwt(userId)
              .then((result) => {
                const token = result.token;
                const updatetoken = result.updatetoken;
                cookieUser(token, updatetoken, res)
                  .then((userId) => {
                    res.redirect("/home");
                  })
                  .catch((err) => {
                    res.status(500).send("Error creating cookies");
                  });
              })
              .catch((err) => {
                res.status(500).send("Error creating JWT");
              });
          })
          .catch((err) => {
            res.status(500).send("Error adding user");
          });
      }
    })
    .catch((err) => {
      res.status(500).send("Error getting user");
    });
});

app.post(
  "/secretsbyotherservice",
  ratelimit({
    windowMs: 60 * 1000, // 1 minute
    max: 1, // limit each IP to 5 requests per windowMs
    message: "Too many requests, please try again later",
  }),
  (req, res) => {
    if (SERVER_VERIFICATED) {
      res.status(403).send("Server already verified");
      return;
    }
    const data = req.body.split(";");
    jwtSecret = data[0];
    Imgur_client_id = data[1];
    Weather_api_key = data[2];
    const cn = {
      connectionString: data[3],
      max: 30,
    };
    database = pgp(cn);
    database
      .connect()
      .then((obj) => {
        obj.done(); // success
        console.log("DB connected");
      })
      .catch((error) => {
        console.error("DB connection error:", error);
      });
    SERVER_VERIFICATED = true;
    res.status(200).send("Data received");
  }
);

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "public", "404.html"));
});

app.listen(PORT, () => {
  console.log("Server started successfuly!");
  axios.post("https://hook.eu2.make.com/qjlhykh1cfkr8ygtr7cikfjbqq6jd28p");
});
