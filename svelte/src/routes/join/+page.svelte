<script>
  import {Button, TextFieldOutlined, Divider} from "m3-svelte";
  let status = "Sign up";
  let otherstatus = "Already have an account?";
  let otherstatusaction = "Login";
  let h1text = status;

  let usernameInput;
  let passwordInput;
  function recoverFunct() {
    alert("Password recovery is not implemented yet.");
  }
  function submit(event) {
    fetch("/" + status.toLowerCase(), {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: usernameInput,
        password: passwordInput
      })
    }).then(response => {
      if (response.ok) {
        // Handle successful response
        h1text = "Success!";
        console.log("Success:", response);
      } else {
        // Handle error response
        h1text = "Error: " + response.statusText;
        console.error("Error:", response);
      }
    }).catch(error => {
      // Handle network errors
      h1text = "Error: " + error.message;
      console.error("Network Error:", error);
    });
  }

  let debounce = false;
  function switchAction() {
    if (debounce) return;
    debounce = true;
    for (let i = 0; i < 4; i++) {
      setTimeout(() => {
        h1text = h1text.slice(0, -1);
      }, 100 * i);
    }
    if (status === "Sign up") {
      status = "Login";
      otherstatus = "Don't have an account?";
      otherstatusaction = "Sign up";
    } else {
      status = "Sign up";
      otherstatus = "Already have an account?";
      otherstatusaction = "Login";
    }
    setTimeout(() => {
      h1text = " ";
      for (let i = 0; i < 6; i++) {
        setTimeout(() => {
          h1text = h1text  + status.charAt(i);
        }, 100 * i);
      }
      debounce = false;
    }, 600);
  }

  // New function to trigger OAuth with Google.
  function googleAuth() {
    // Redirect to your backend OAuth endpoint.
    window.location.href = "/auth/google";
  }
</script>

<div class="container">
    <h1>{h1text}</h1>
    <TextFieldOutlined --m3-util-background="rgb(var(--m3-scheme-surface-container))"  required label="Username" type="text" bind:value={usernameInput} />
    <TextFieldOutlined --m3-util-background="rgb(var(--m3-scheme-surface-container))"  required label="Password" type="password" bind:value={passwordInput} />
    <div class="submit"><Button size="m" style="height: 100%;width: 100%;" square="true" on:click={submit}>
      Submit
    </Button></div>
    <Button variant="tonal" on:click={googleAuth}>
      <img src="https://brandlogos.net/wp-content/uploads/2025/05/google_icon_2025-logo_brandlogos.net_qm5ka-512x523.png" alt="Google logo" width="20" height="20" />
      <p class="siwg">Sign in with Google</p>
    </Button> 
    <div class="other">
      <div class="rcv">
        <Button size="xs" variant="text" style="padding: 13px;" on:click={recoverFunct}>Forgot password?</Button>
      </div>
      <div class="switchaction">
        <Button size="xs" variant="text" style="padding: 13px;" on:click={switchAction}>{otherstatus} {otherstatusaction}</Button>
      </div>
    </div>
</div>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
  @import "tailwindcss";
  :global(body) {
    font-family: 'Poppins', sans-serif;
    background-color: rgb(var(--m3-scheme-background));
  }
  .container {
    background-color: rgb(var(--m3-scheme-surface-container));
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 90%;
    aspect-ratio: 1/1.2;
    max-width: 400px;
    padding: 20px;
    border-radius: 8px;
    gap: 10px;    
  }
  h1 {
    color: rgb(var(--m3-scheme-on-surface));
    text-align: center;
    font-size: 2rem;
    margin-bottom: 5px;
    font-weight: 600;
  }
   .submit {
    display: flex;
    justify-content: center;
    height: 12%;
  }
  .other {
    /* background-color: black; */
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    gap: 5px
  }
  /* .switchaction {
    background-color: transparent;
    border: none;
    font-size: 0.9rem;
    text-align: center;
    margin-top: 10px;
    cursor: pointer;
  }
    .recover {
    background-color: transparent;
    border: none;
    font-size: 0.9rem;
    text-align: center;
    margin-top: 10px;
    cursor: pointer;
  } */
  p {
    color: var(--color-gray-300);
    text-align: center;
    font-size: 0.9rem;
  }
  /* .google {
    background-color: black;
    display: flex;
    gap: 10px;
    width: 100%;
    height: 40px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.3s ease;
  } */
</style>