<script>
	import '../app.css';
	import { grey_theme, blue_theme, green_theme, pink_theme } from "./state";
	let { children } = $props();

</script>
{@html `<style>${$green_theme}</style>`}
{@render children()}
