<script>
  // No need to import tailwindcss here
  let status = "Signup";
  let otherstatus = "Already have an account?";
  let otherstatusaction = "Login";
  
  function submit(event) {
    // handle form submission here
    // e.g., send data to server or update state
  }
</script>

<form class="container" on:submit|preventDefault={submit}>
    <h1>{status}</h1>
    <fieldset>
      <legend>Username</legend>
      <input type="text"/>
    </fieldset>
        <fieldset>
      <legend>Password</legend>
      <input type="password"/>
    </fieldset>
    <button class="submit">
      {status}
    </button>
        <button class="switchaction">{otherstatus} <span class="action">{otherstatusaction}</span></button>
    <p class="or">or</p>
    <button class="google">
      <img src="https://brandlogos.net/wp-content/uploads/2025/05/google_icon_2025-logo_brandlogos.net_qm5ka-512x523.png" alt="Google logo" width="20" height="20" />
      <p class="siwg">Sign in with Google</p>
    </button>

</form>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
  @import "tailwindcss";
  :global(body) {
    font-family: 'Poppins', sans-serif;
    background-color: theme(--color-gray-950);
  }
  .container {
    background-color: theme(--color-gray-900);
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
    box-shadow: 0 0 20px theme(--color-gray-900);
    gap: 10px;
  }
  h1 {
    color: theme(--color-gray-50);
    text-align: center;
    font-size: 2rem;
    margin-bottom: 5px;
    font-weight: 600;
  }
  legend {
    color: theme(--color-gray-300);
  }
  input {
    background-color: theme(--color-gray-800);
    border-radius: 8px;
    width: 100%;
    padding: 10px 5px;
    border: none;
    border-radius: 4px;
    color: theme(--color-gray-50);
    font-size: 1rem;
        transition: box-shadow 0.1s ease;
  }
  input:focus {
    outline: none;
    box-shadow: 0 0 5px theme(--color-gray-600);
  }
  .submit {
    background-color: theme(--color-gray-500);
    color: theme(--color-gray-50);
    border: none;
    padding: 10px 5px;
    border-radius: 4px;
    font-weight: 400;
    margin-top: 10px;
    cursor: pointer;
    transition: 0.3s ease;
  }
  .submit:hover {
    background-color: theme(--color-gray-600);
    box-shadow: 0 0 5px theme(--color-gray-600);
  }
  .submit:active {
    background-color: theme(--color-gray-700);
        box-shadow: 0 0 5px theme(--color-gray-700);
  }
  .switchaction {
    background-color: transparent;
    color: theme(--color-gray-300);
    border: none;
    cursor: pointer;
    font-size: 0.9rem;
    text-align: center;
    margin-top: 10px;
    cursor:default;
  }
  .action {
    color: theme(--color-gray-50);
    font-weight: 600;
    cursor: pointer;
  }
  p{
    color: theme(--color-gray-300);
    text-align: center;
    font-size: 0.9rem;
  }
  .or {
    color: theme(--color-gray-400);
  }
  .google {
    background-color: theme(--color-gray-800);
    display : flex;
    gap: 10px;
    width: 100%;
    height: 40px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.3s ease;
  }
  </style>