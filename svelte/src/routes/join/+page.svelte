<script>
  import {Button, TextFieldOutlined} from "m3-svelte";
  let status = "Signup";
  let otherstatus = "Already have an account?";
  let otherstatusaction = "Login";
  let h1text = status;

  let usernameInput;
  let passwordInput;

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
    if (status === "Signup") {
      status = "Login";
      otherstatus = "Don't have an account?";
      otherstatusaction = "Signup";
    } else {
      status = "Signup";
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
    <TextFieldOutlined required label="Username" bind:value={usernameInput} />
    <TextFieldOutlined required label="Password" bind:value={passwordInput} />
    <div class="submit"><Button size="s" on:click={submit}>
      {status}
    </Button></div>
    <div class="switchaction">
      <Button size="xs" on:click={switchAction}>{otherstatus} {otherstatusaction}</Button>
    </div>
    <p class="or">or</p>
    Use on:click for OAuth
    <button type="button" class="google" on:click={googleAuth}>
      <img src="https://brandlogos.net/wp-content/uploads/2025/05/google_icon_2025-logo_brandlogos.net_qm5ka-512x523.png" alt="Google logo" width="20" height="20" />
      <p class="siwg">Sign in with Google</p>
    </button>
</div>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
  @import "tailwindcss";
  :global(body) {
    font-family: 'Poppins', sans-serif;
    background-color: rgb(var(--m3-scheme-surface-container-low));
  }
  .container {
    background-color: rgb(var(--m3-scheme-surface));
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
    color: rgb(var(--m3-scheme-on-background));
    text-align: center;
    font-size: 2rem;
    margin-bottom: 5px;
    font-weight: 600;
  }
   .submit {
    display: flex;
    justify-content: center;
  }
  .switchaction {
    background-color: transparent;
    color: var(--color-gray-300);
    border: none;
    font-size: 0.9rem;
    text-align: center;
    margin-top: 10px;
    cursor: pointer;
  }
  p {
    color: var(--color-gray-300);
    text-align: center;
    font-size: 0.9rem;
  }
  .or {
    color: var(--color-gray-400);
  }
  .google {
    background-color: var(--color-gray-800);
    display: flex;
    gap: 10px;
    width: 100%;
    height: 40px;
    border-radius: 4px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.3s ease;
  }
</style>