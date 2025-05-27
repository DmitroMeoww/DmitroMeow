import express, { Request, Response, NextFunction } from "express";
import rateLimit from "express-rate-limit";
import axios from "axios";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import path from "path";
import pgPromise from "pg-promise";
// Add these imports at the top of your server.ts
import { fileURLToPath } from "url";
import { dirname } from "path";

// @ts-ignore
import { handler as svelteHandler } from "./svelte/build/handler.js"; // Adjust path as needed

const PORT: number = 3000;

let JwtSecret: string = "";
let Imgur_client_id: string = "";
let Weather_api_key: string = "";

const app = express();
const pgp = pgPromise();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let database: any = null;
const sessions: Map<string, number> = new Map(); // {token: userId}

const Access_JWT = {
  httpOnly: true,
  secure: true,
  maxAge: 60 * 30 * 1000, // 30 minutes in ms
  sameSite: "strict" as const,
};
const Update_JWT = {
  httpOnly: true,
  secure: true,
  maxAge: 60 * 60 * 24 * 3 * 1000, // 3 days in ms
  sameSite: "strict" as const,
};

// database
async function getUserByUsername(username: string): Promise<any> {
  return database.oneOrNone("SELECT * FROM users WHERE username = $1", [
    username,
  ]);
}
async function getUserById(id: number): Promise<any> {
  return database.oneOrNone("SELECT * FROM users WHERE id = $1", [id]);
}
async function addUser(username: string, password: string): Promise<number> {
  const hashedPassword = await bcrypt.hash(password, 10);
  const data = await database.one(
    "INSERT INTO users(username, password) VALUES($1, $2) RETURNING id",
    [username, hashedPassword]
  );
  return data.id;
}

// sessions
async function verifyJwt(token: string): Promise<any> {
  try {
    const decoded = jwt.verify(token, JwtSecret);
    return decoded;
  } catch (err) {
    return null;
  }
}
async function createJwt(
  userId: number
): Promise<{ token: string; updatetoken: string }> {
  const token = jwt.sign({ userId }, JwtSecret, {
    expiresIn: "30m",
  });
  const updatetoken = jwt.sign({ userId }, JwtSecret, {
    expiresIn: "3d",
  });
  sessions.set(updatetoken, userId);
  return { token, updatetoken };
}
async function cookieUser(
  token: string,
  updatetoken: string,
  res: Response
): Promise<void> {
  res.cookie("access_token", token, Access_JWT);
  res.cookie("update_token", updatetoken, Update_JWT);
}
async function checkUser(req: Request, res: Response): Promise<number> {
  const token = req.cookies["access_token"];
  const updatetoken = req.cookies["update_token"];
  if (token) {
    const decoded = await verifyJwt(token);
    if (decoded && decoded.userId) return decoded.userId;
    throw new Error("Invalid or expired token");
  } else if (updatetoken) {
    const decoded = await verifyJwt(updatetoken);
    if (decoded && sessions.get(updatetoken) === decoded.userId) {
      const { token: newToken, updatetoken: newUpdateToken } = await createJwt(
        decoded.userId
      );
      await cookieUser(newToken, newUpdateToken, res);
      return decoded.userId;
    }
    throw new Error("Update token used/expired/invalid");
  } else {
    throw new Error("No tokens provided");
  }
}

// middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Example: only check for certain paths, or all except /login, /signup, etc.
    if (req.path.startsWith("/api")) {
      return next(); // Skip authentication for API routes
    }
    await checkUser(req, res); // throws if not authenticated
    if (req.path === "/join") {
      res.redirect("/home");
    } else {
      return next();
    }
  } catch (err) {
    // Not authenticated, redirect or send error
    res.redirect("/join");
  }
});

// post requests
const loginLimiter = rateLimit({
  windowMs: 30 * 1000,
  max: 5,
  message: "Too many requests, please try again later",
});
app.post("/login", loginLimiter, async (req: Request, res: Response) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400).send("Username and password required");
    return;
  }
  try {
    const user = await getUserByUsername(username);
    if (user) {
      const result = await bcrypt.compare(password, user.password);
      if (result) {
        const { token, updatetoken } = await createJwt(user.id);
        await cookieUser(token, updatetoken, res);
        res.redirect("/home");
        return;
      } else {
        res.status(401).send("Invalid password");
        return;
      }
    } else {
      res.status(404).send("User not found");
      return;
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Error logging in");
    return;
  }
});

const signupLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 5,
  message: "Too many requests, please try again later",
});
app.post("/signup", signupLimiter, async (req: Request, res: Response) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400).send("Username and password required");
    return;
  }
  if (username.length < 3 || username.length > 20) {
    res.status(400).send("Username must be 3-20 characters");
    return;
  }
  if (password.length < 8) {
    res.status(400).send("Password must be at least 8 characters");
    return;
  }
  try {
    const user = await getUserByUsername(username);
    if (user) {
      res.status(409).send("User already exists");
      return;
    } else {
      const userId = await addUser(username, password);
      const { token, updatetoken } = await createJwt(userId);
      await cookieUser(token, updatetoken, res);
      res.redirect("/home");
      return;
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Error signing up");
    return;
  }
});

// Example for DB connection (replace with your actual logic)
const data =
  "1c0fb5008c573315e7b1e1af5ab41d0ce9b8d4469e41c4d59c3041bd99671208c415fcb0359418dd6bc481863d3d5d030a75364318afbec54cdba082df3f9577;519c7eae1a4a75b;5f6f29da20324c2499e192710251004;postgresql://neondb_owner:npg_YTIMu8Ek2Ucm@ep-summer-sound-a2xoc786-pooler.eu-central-1.aws.neon.tech/neondb?sslmode=require".split(
    ";"
  );
JwtSecret = data[0];
Imgur_client_id = data[1];
Weather_api_key = data[2];
const cn = {
  connectionString: data[3],
  max: 30,
};
database = pgp(cn);
database
  .connect()
  .then((obj: any) => {
    app.use(svelteHandler);
    obj.done();
    console.log("DB connected");
  })
  .catch((error: any) => {
    console.error("DB connection error:", error);
  });

app.listen(PORT, () => {
  console.log("Server started successfully!");
  // axios.post("https://hook.eu2.make.com/qjlhykh1cfkr8ygtr7cikfjbqq6jd28p");
});
