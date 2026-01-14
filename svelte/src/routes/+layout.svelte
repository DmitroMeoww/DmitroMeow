<script>
	import '../app.css';
	import { blue_theme, green_theme, pink_theme } from "./state";
	let { children } = $props();

</script>
{@html `<style>${$blue_theme}</style>`}
{@render children()}