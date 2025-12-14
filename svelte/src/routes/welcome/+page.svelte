<script lang="ts">
import { containerTransform, sharedAxisTransition } from "m3-svelte";
let mode: "X" | "Y" | "Z" | "container" = $state("X");
let affected = $state(false);
const [send, receive] = containerTransform({ duration: 1000 });
</script>


    {#if affected}
      <div
        class="pane"
        transition:sharedAxisTransition={{
          direction: "X",
          rightSeam: false,
        }}
      >
        <button class="btn" onclick={() => (affected = false)}> Beta </button>
      </div>
    {:else}
      <div
        class="pane"
        transition:sharedAxisTransition={{
          direction: "X",
          rightSeam: true,
        }}
      >
        <button class="btn" onclick={() => (affected = true)}> Alpha </button>
      </div>
    {/if}


<style>
  .pane {
    display: grid;
    background-color: var(--m3c-background);
    overflow: hidden;
  }
  .btn {
    /* @apply --m3-label-large; */
    display: flex;
    align-items: center;
    place-self: center;

    background-color: var(--m3c-primary);
    color: var(--m3c-on-primary);
    border: none;
    height: 2.5rem;
    border-radius: 1.25rem;
    padding: 0 1rem;
    cursor: pointer;
  }
  /* .expanded {
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    border-radius: 0.5rem;
    background-image: linear-gradient(
      to bottom right,
      var(--m3c-primary-container-subtle),
      var(--m3c-tertiary-container-subtle)
    );
    > p {
      margin: 0;
    }
    > button {
      background-color: unset;
      border: none;
      padding: 0;
      margin: 0;
      font: unset;
      font-weight: bold;
      text-align: start;
      cursor: pointer;
    } 
  }*/
</style>