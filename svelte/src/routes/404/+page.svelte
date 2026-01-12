<script>
  import {Button} from "m3-svelte";
</script>
<div>
    <h1><span>404</span> - Page not found</h1>
    <Button href="/home" size="m" square="true" style="grid-row-start: 3;" variant="filled">Return Home</Button>
</div>
<style>
  :global(body) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    height: 100vh;
    font-family: system-ui, sans-serif;
    background-color: rgb(var(--m3-scheme-background));
    color: rgb(var(--m3-scheme-on-background));
    font-family: "Roboto", "Noto", sans-serif;
  }
  div {
    /* background-color: black; */
    grid-column-start: 2;
    grid-row-start: 2;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(4, 1fr);
    padding: 20px;
    gap: 20px;
  }
  span {
    font-weight: bold;
    text-decoration: underline;
    text-underline-offset: 4px;
  }
  h1 {
    grid-row-start: 2;
    text-align: center;
    font-size: xx-large;
  }
</style>