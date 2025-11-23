<script>
  import {Button, TextFieldOutlined} from "m3-svelte";
  import { containerTransform, sharedAxisTransition } from "m3-svelte";
  let status = "Sign up";
  let otherstatus = "Already have an account?";
  let otherstatusaction = "Login";

  let usernameInput;
  let passwordInput;
  function recoverFunct() {
    alert("Password recovery is not implemented yet.");
  }
  function submit(event) {
    alert("soon...");
  //   fetch("/" + status.toLowerCase(), {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({
  //       username: usernameInput,
  //       password: passwordInput
  //     })
  //   }).then(response => {
  //   }).catch(error => {
  //     // Handle network errors
  //     console.error("Network Error:", error);
  //   });
  }

  let debounce = false;
  function switchAction() {
    if (status === "Sign up") {
      status = "Login";
      otherstatus = "Don't have an account?";
      otherstatusaction = "Sign up";
    } else {
      status = "Sign up";
      otherstatus = "Already have an account?";
      otherstatusaction = "Login";
    }
  }

  function googleAuth() {
    window.location.href = "/auth/google";
  }
</script>

<form class="container">
    <h1>{status}</h1>
    <TextFieldOutlined --m3-util-background="rgb(var(--m3-scheme-surface-container))" autocomplete="username" label="Username" type="text" bind:value={usernameInput} />
    <TextFieldOutlined --m3-util-background="rgb(var(--m3-scheme-surface-container))" autocomplete="current-password" label="Password" type="password" bind:value={passwordInput} />
    <div class="submit"><Button size="m" style="height: 100%;width: 100%;" square="true" onclick={submit}>
      Submit
    </Button></div>
    <Button variant="tonal" onclick={googleAuth}> 
      <img src="https://brandlogos.net/wp-content/uploads/2025/05/google_icon_2025-logo_brandlogos.net_qm5ka-512x523.png" alt="Google logo" width="20" height="20" />
      <p class="siwg" style="font-size: 1rem">Sign in with Google</p>
    </Button> 
    <div class="other">
      <div class="rcv">
        <Button size="xs" variant="text" style="padding: 13px;" onclick={recoverFunct}>Forgot password?</Button>
      </div>
      <div class="switchaction">
        <Button size="xs" variant="text" style="padding: 13px;" onclick={switchAction}>{otherstatus}<span class="otheract">{otherstatusaction}</span></Button>
      </div>
    </div>
</form>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
  @import "tailwindcss";
  :global(body) {
    font-family: roboto, 'Poppins', sans-serif;
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
  .otheract {
    color: rgb(var(--m3-scheme-on-surface));
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
  p {
    color: var(--color-gray-300);
    text-align: center;
    font-size: 0.9rem;
  }

</style>