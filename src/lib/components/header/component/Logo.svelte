<script lang="ts">
	import { t } from '$lib/i18n';
	import LogoIcons from '$lib/icons/LogoIcons.svelte';

	let { className = '' } = $props();
</script>

<a href="/" class={className} title={$t('home')} aria-label={$t('home')}>
	<LogoIcons />
</a>
