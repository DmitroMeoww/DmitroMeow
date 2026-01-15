<script lang="ts">
    import {Card, Button, Icon, Chip} from "m3-svelte";
    import iconCart from "@ktibow/iconset-material-symbols/shopping-cart-outline";
    import iconCartFilled from "@ktibow/iconset-material-symbols/shopping-cart";
</script>
<div id="MainCard">
    <Card variant="filled">
        <h1 id="CardName">Відеокамера Sony PXW-Z90</h1>
        <p id="CardDescription">Новий кишеньковий 4К камкордер від Sony з підтримкою HDR...</p>
        <div id="CardActions">
            <Button variant="outlined" iconType="full"><Icon icon={iconCart}></Icon></Button>
            <Button color="primary">₴500,000</Button>
        </div>
        <img id="CardImage" src="/VidCameraSonyPXW-Z90.jpg" alt="Зображення товару" />
        <div id="CardChip">
            <Chip variant="general" elevated={true} selected={false} onclick={() => alert("!")}>Sony</Chip>
        </div>
    </Card>
</div>

<style>

    
    #MainCard {
        /* display: flex; */
        /* justify-content: center; */
        /* align-items: center; */
        width: 300px;
        height: 230px;
        top:50%;
        left: 50%;
        transform: translate(-50%, -50%);
        position: absolute;
    }
    
</style>