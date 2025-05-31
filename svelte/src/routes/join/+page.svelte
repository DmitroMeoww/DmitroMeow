<script>
  // No need to import tailwindcss here
  let status = "Login";
</script>

<div class="container">
    <h1>{status}</h1>
</div>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
  @import 'tailwindcss';
  :global(body) {
    font-family: 'Poppins', sans-serif;
    background-color: theme(--color-gray-950); /* or any valid color, or remove this line to use Tailwind classes */
  }
</style>