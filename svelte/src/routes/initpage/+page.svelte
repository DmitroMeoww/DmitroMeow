<script>
  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const username = form.dmeowname.value;
    const password = form.dmeowpass.value;

    await fetch('/init', {
      method: 'POST',
      headers: {
        'X-Username': username,
        'X-Password': password
      },
      body: null,
    });
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
   <input name="dmeowname" type="text" placeholder="Username" required>
  <input name="dmeowpass" type="password" placeholder="Password" required>
  <button type="submit">Send</button>
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
    gap: 12px;
    max-width: 300px;
    margin: 40px auto;
    padding: 24px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background: #fafafa;
  }
  input {
    padding: 8px;
    border: 1px solid #bbb;
    border-radius: 4px;
    font-size: 1rem;
  }
  button {
    padding: 8px;
    border: none;
    border-radius: 4px;
    background: #1976d2;
    color: #fff;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.2s;
  }
  button:hover {
    background: #1565c0;
  }
</style>