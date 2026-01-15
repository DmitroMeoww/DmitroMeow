<script lang="ts">
import {FAB, NavCMLX, NavCMLXItem} from "m3-svelte"
import iconCart from "@ktibow/iconset-material-symbols/shopping-cart-rounded";
import iconGrid from "@ktibow/iconset-material-symbols/grid-view";
import iconHandshake from "@ktibow/iconset-material-symbols/handshake";
import iconInfo from "@ktibow/iconset-material-symbols/info";
import iconArticle from "@ktibow/iconset-material-symbols/article";
import iconBuild from "@ktibow/iconset-material-symbols/build";
import iconContacts from "@ktibow/iconset-material-symbols/contacts";
import iconBaseline from "@ktibow/iconset-material-symbols/build-circle";

import { page } from "$app/stores";
import { onMount, onDestroy } from 'svelte';
let mode = 1;
const queries = [
  "(max-width: 549px)",
  "(min-width: 550px) and (orientation: portrait)",
  "(min-width: 550px) and (orientation: landscape)"
];
const update = () => mode = queries.findIndex(q => window.matchMedia(q).matches) + 1;
onMount(() => {
  queries.forEach(q => window.matchMedia(q).addEventListener('change', update));
  update();
});
</script>

{#if mode === 3}
<div id="NavRail">
  <div id="MenuFab">
      <div class="MenuFabItem">
          <img id="Logo" src="/logo_mobile.png" alt="Logo" />
      </div>
      <div class="MenuFabItem">
          <FAB color="primary" icon={iconCart} onclick={() => alert("!")} />
      </div>
  </div>
  <NavCMLX variant="large">
            <NavCMLXItem
      variant="large"
      icon={iconInfo}
      text="Про нас"
      selected={$page.url.pathname === "/"}
      href="/"
    />
    <NavCMLXItem
      variant="large"
      icon={iconGrid}
      text="Каталог"
      selected={$page.url.pathname === "/catalog"}
      href="/catalog"
    />
        <NavCMLXItem
      variant="large"
      icon={iconHandshake}
      text="Послуги"
      selected={$page.url.pathname === "/offers"}
      href="/offers"
    />
    <NavCMLXItem
      variant="large"
      icon={iconArticle}
      text="Статті"
      selected={$page.url.pathname === "/articles"}
      href="/articles"
    />
          <NavCMLXItem
      variant="large"
      icon={iconBuild}
      text="Сервіс"
      selected={$page.url.pathname === "/service"}
      href="/service"
    />
        <NavCMLXItem
      variant="large"
      icon={iconContacts}
      text="Контакти"
      selected={$page.url.pathname === "/contacts"}
      href="/contacts"
    />
  </NavCMLX>
</div>
{:else if mode === 2}
<div class="navBar">
  <div class="mobile">
  <FAB color="primary" size="large" icon={iconCart} onclick={() => alert("!")} />
  </div>
  <NavCMLX variant="medium">
              <NavCMLXItem
      variant="medium"
      icon={iconInfo}
      text="Про нас"
      selected={$page.url.pathname === "/" || $page.url.pathname === "/contacts"}
      href="/"
    />
    <NavCMLXItem
      variant="medium"
      icon={iconGrid}
      text="Каталог"
      selected={$page.url.pathname === "/catalog"}
      href="/offers"
    />
        <NavCMLXItem
      variant="medium"
      icon={iconHandshake}
      text="Послуги"
      selected={$page.url.pathname === "/offers"}
      href="/offers"
    />
    <NavCMLXItem
      variant="medium"
      icon={iconArticle}
      text="Статті"
      selected={$page.url.pathname === "/articles"}
      href="/articles"
    />
          <NavCMLXItem
      variant="medium"
      icon={iconBuild}
      text="Сервіс"
      selected={$page.url.pathname === "/service"}
      href="/service"
    />
  </NavCMLX>
</div>
{:else}
<div class="navBar">
  <div class="mobile">
  <FAB color="primary" icon={iconCart} onclick={() => alert("!")} />
  </div>
  <NavCMLX variant="compact">
            <NavCMLXItem
      variant="compact"
      icon={iconInfo}
      text="Про нас"
      selected={$page.url.pathname === "/" || $page.url.pathname === "/contacts"}
      href="/"
    />
    <NavCMLXItem
      variant="compact"
      icon={iconGrid}
      text="Каталог"
      selected={$page.url.pathname === "/catalog"}
      href="/catalog"
    />
        <NavCMLXItem
      variant="compact"
      icon={iconHandshake}
      text="Послуги"
      selected={$page.url.pathname === "/offers"}
      href="/offers"
    />
    <NavCMLXItem
      variant="compact"
      icon={iconArticle}
      text="Статті"
      selected={$page.url.pathname === "/articles"}
      href="/articles"
    />
          <NavCMLXItem
      variant="compact"
      icon={iconBuild}
      text="Сервіс"
      selected={$page.url.pathname === "/service"}
      href="/service"
    />
  </NavCMLX>
</div>
{/if}
<style lang="css">
    #NavRail {
        width: 96px;
        height: 100vh;
        background-color: var(--m3c-surface-container);
        position: absolute;
        top: 0;
        left: 0;
        padding-top: 40px;
        padding-bottom: 56px;
        gap: 40px;
        display: flex;
        flex-direction: column;
    }
    #MenuFab {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 16px;
    }
    .navBar {
      width: 100vw;
      height: 66px;
      position: fixed;
      bottom: 0;
      left: 0;
    }
    .mobile {
      position: fixed;
      bottom: 82px;
      right: 16px;
    }
</style>