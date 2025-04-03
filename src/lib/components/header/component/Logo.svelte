<script lang="ts">
	import LogoIcons from '$lib/icons/LogoIcons.svelte';

	let { className = '' } = $props();
</script>

<a href="/" class={className} title="На головну" aria-label="На головну">
	<LogoIcons />
</a>
