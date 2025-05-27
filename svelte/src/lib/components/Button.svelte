<!-- Button.svelte -->
<script lang="ts">
  export let appearance: 'default' | 'primary' | 'subtle' | 'warning' | 'danger' | 'link' = 'default';
  console.log(appearance);
  export let disabled: boolean = false;
  export let selected: boolean = false;
  export let loading: boolean = false;
  export let href: string | null = null;
  export let fullWidth: boolean = false;
  export let compact: boolean = false;
  export let iconBefore: any = null;
  export let iconAfter: any = null;
</script>

{#if href}
  <a
    class={`btn ${appearance} ${selected ? 'selected' : ''} ${compact ? 'compact' : ''} ${fullWidth ? 'full-width' : ''}`}
    href={href}
    aria-disabled={disabled}
  >
    {#if iconBefore}<span class="icon before">{iconBefore}</span>{/if}
    <slot />
    {#if iconAfter}<span class="icon after">{iconAfter}</span>{/if}
  </a>
{:else}
  <button
    class={`btn ${appearance} ${selected ? 'selected' : ''} ${compact ? 'compact' : ''} ${fullWidth ? 'full-width' : ''}`}
    disabled={disabled || loading}
  >
    {#if loading}
      <span class="spinner"></span>
    {:else}
      {#if iconBefore}<span class="icon before">{iconBefore}</span>{/if}
      <slot />
      {#if iconAfter}<span class="icon after">{iconAfter}</span>{/if}
    {/if}
  </button>
{/if}

<style>
  .btn {
    padding: 0.5em 1em;
    border-radius: 3px;
    border: none;
    cursor: pointer;
    font-family: inherit;
    font-size: 1em;
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    gap: 0.5em;
  }

  .default {
    background-color: #ebecf0;
    color: #172b4d;
  }

  .primary {
    background-color: #0052cc;
    color: white;
  }

  .subtle {
    background: none;
    color: #0052cc;
  }

  .warning {
    background-color: #ffab00!important;
    color: white;
  }

  .danger {
    background-color: #de350b;
    color: white;
  }

  .link {
    background: none;
    color: #0052cc;
    text-decoration: none;
  }

  .link[aria-disabled='true'] {
    color: #a5adba;
    pointer-events: none;
  }

  .selected {
    border: 2px solid #4c9aff;
  }

  .compact {
    padding: 0.25em 0.5em;
  }

  .full-width {
    width: 100%;
  }

  .icon.before {
    margin-right: 0.25em;
  }

  .icon.after {
    margin-left: 0.25em;
  }

  .spinner {
    border: 2px solid #f3f3f3;
    border-top: 2px solid #0052cc;
    border-radius: 50%;
    width: 14px;
    height: 14px;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
</style>
