<script>
  import {Button, TextFieldOutlined} from "m3-svelte";

  let usernameInput;
  let passwordInput;
  async function submit(event) {
    await fetch('/init', {
      method: 'POST',
      headers: {
        'X-Username': usernameInput,
        'X-Password': passwordInput
      },
      body: null,
    });
  }
</script>

<form class="container">
    <h1>Start up your server!</h1>
    <TextFieldOutlined --m3-util-background="rgb(var(--m3-scheme-surface-container))"  required label="Username" type="text" bind:value={usernameInput} />
    <TextFieldOutlined --m3-util-background="rgb(var(--m3-scheme-surface-container))"  required label="Password" type="password" bind:value={passwordInput} />
    <div class="submit"><Button size="m" style="height: 100%;width: 100%;" square="true" on:click={submit}>
      Submit
    </Button></div>
</form>

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
    aspect-ratio: 1/0.8;
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
    height: 20%;
  }

</style>