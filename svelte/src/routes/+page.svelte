<script lang="ts">
import {FAB, NavCMLX, NavCMLXItem} from "m3-svelte"
import iconCart from "@ktibow/iconset-material-symbols/shopping-cart-rounded";
import iconGrid from "@ktibow/iconset-material-symbols/grid-view";
import iconContacts from "@ktibow/iconset-material-symbols/contacts";
import iconInfo from "@ktibow/iconset-material-symbols/info";
import iconArticle from "@ktibow/iconset-material-symbols/article";
import iconBuild from "@ktibow/iconset-material-symbols/build";
import iconBaseline from "@ktibow/iconset-material-symbols/build-circle";
import { page } from "$app/stores";
</script>

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
    icon={iconGrid}
    text="Каталог"
    selected={$page.url.pathname === "/"}
    href="/welcome"
  />
  <NavCMLXItem
    variant="large"
    icon={iconArticle}
    text="Статті"
    selected={$page.url.pathname === "/"}
    href="/welcome"
  />
        <NavCMLXItem
    variant="large"
    icon={iconBuild}
    text="Сервіс"
    selected={$page.url.pathname === "/"}
    href="/welcome"
  />
      <NavCMLXItem
    variant="large"
    icon={iconInfo}
    text="Про нас"
    selected={$page.url.pathname === "/"}
    href="/welcome"
  />
  <NavCMLXItem
    variant="large"
    icon={iconContacts}
    text="Контакти"
    selected={$page.url.pathname === "/"}
    href="/welcome"
  />
</NavCMLX>
</div>

<style lang="css">
    #NavRail {
        width: 96px;
        height: 100vh;
        background-color: #000;
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
    #Logo {
        color: var(--m3c-primary);
    }
</style>