<script>
	import '../app.css';
	import { blue_theme, green_theme, pink_theme } from "./state";
	let { children } = $props();

</script>
<style global>
	:global(body) {
		font-family: google-sans, sans-serif;
	}
</style>
{@html `<style>${$blue_theme}</style>`}
{@render children()}