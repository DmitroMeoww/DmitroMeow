<script lang="ts">
    import {Card, Button, Icon, Chip} from "m3-svelte";
    import iconCart from "@ktibow/iconset-material-symbols/shopping-cart-outline";
    import iconCartFilled from "@ktibow/iconset-material-symbols/shopping-cart";
</script>
<div id="MainCard">
<Card variant="filled">
    <h1>заголовок</h1>
    <p>Опис товару</p>
    <div>
    <Button variant="outlined" iconType="full"><Icon icon={iconCart}></Icon></Button>
    <Button color="primary">₴500,000</Button>
    </div>
    <img src="/placeholder.png" alt="Зображення товару" />
    <Chip variant="general" elevated={true} selected={false} onclick={() => alert("!")}>Sony</Chip>
</Card>
</div>

<style>

    #MainCard {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
    }
    
</style>