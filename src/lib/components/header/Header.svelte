<script lang="ts">
	import { t } from '$lib/i18n';
	import { fade } from 'svelte/transition';
	import Navigation from './component/Navigation.svelte';
</script>

<header in:fade>
	<div class="relative container">
		<Navigation />
	</div>
</header>
