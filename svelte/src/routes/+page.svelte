<script>
  import {DateField, DateFieldOutlined, Tabs, TextField, Switch, Slider, Select, Button, RadioAnim1, ConnectedButtons, TogglePrimitive, SplitButton,
     CircularProgressEstimate, Chip, LoadingIndicator, CircularProgress, Card, ListItem, WavyLinearProgressEstimate,
      WavyLinearProgress, Menu, LinearProgressEstimate, MenuItem, FAB, BottomSheet, LinearProgress, Dialog,
       NewSnackbar, Checkbox} from "m3-svelte";
  import iconPlus from "@ktibow/iconset-material-symbols/add"
    import { snackbar } from "m3-svelte";
  let itemA = true;
  let itemB = false;
  let open = false;
  let on = false;
  let stuff = "one";
  let value = "";
  let n = 0;
  let text= "";
  let tab = "a";
  
</script>
<Tabs
  items={[
    { name: "A", value: "a" },
    { name: "B", value: "b" },
  ]}
  bind:tab
/>
<label>
  <Switch bind:checked={on} />
</label>
<DateField label="Date" bind:value />
<DateFieldOutlined label="Date" bind:value />
<TextField label="Field" bind:value={text} />
<Slider bind:value={n} />
<!-- <RadioAnim1><input type="radio" name="stuff" value="one" bind:group={stuff} /></RadioAnim1>
<RadioAnim1><input type="radio" name="stuff" value="two" bind:group={stuff} /></RadioAnim1>
<RadioAnim1><input type="radio" name="stuff" value="three" bind:group={stuff} /></RadioAnim1> -->
<Button variant="filled">Hello</Button>
<Select
  label="Select"
  options={[
    { text: "A", value: "a" },
    { text: "B", value: "b" },
  ]}
  bind:value
/>
<ConnectedButtons>
  <TogglePrimitive bind:toggle={itemA}>A</TogglePrimitive>
  <TogglePrimitive bind:toggle= {itemB}>B</TogglePrimitive>
</ConnectedButtons>
<SplitButton variant="filled" onclick={() => alert("!")}>
  Hello
  {#snippet menu()}
    and more
  {/snippet}
</SplitButton>
<Card variant="filled">Hello</Card>
<Card variant="filled" onclick={() => alert("!")}>Hello</Card>
<div>
  <ListItem headline="Hello" />
  <ListItem headline="Hello" />
</div>
<FAB color="primary" icon={iconPlus} onclick={() => alert("!")} />
<Menu>
  <MenuItem icon={iconPlus}>Undo</MenuItem>
  <MenuItem icon={iconPlus}>Redo</MenuItem>
  <MenuItem icon={iconPlus}>Cut</MenuItem>
</Menu>
{#if open}
  <BottomSheet close={() => (open = false)}>Hello</BottomSheet>
{/if}
<Dialog headline="Hello" bind:open>
  I'm alive
  {#snippet buttons()}
    <Button variant="tonal">OK</Button>
  {/snippet}
</Dialog>
<Button variant="tonal" onclick={() => snackbar("Hello", undefined, true)}>Show</Button>
<NewSnackbar />
<label>
  <Checkbox>
    <input type="checkbox" bind:checked={on} />
  </Checkbox>
</label>
<LoadingIndicator />
<Chip variant="general" icon={iconPlus} onclick={() => alert("!")}>Hello</Chip>
<LinearProgress percent={60} />
<LinearProgressEstimate sToHalfway={2} />
<WavyLinearProgress percent={60} />
<WavyLinearProgressEstimate sToHalfway={2} />
<CircularProgress percent={60} />
<CircularProgressEstimate sToHalfway={2} />
<style>
:global(body) {
  padding: 20px;
  gap: 10px;
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 70vh; /* constrain height so items wrap into new columns */
  flex-wrap: wrap;
  align-content: flex-start;
}
</style>
