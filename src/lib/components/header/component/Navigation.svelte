<script lang="ts">
	import LanguageSwitcher from './LanguageSwitcher.svelte';
	import Logo from './Logo.svelte';
	import NavigationListAndBurger from './NavigationListAndBurger.svelte';
</script>

<div class="flex justify-between md:items-center">
	<Logo />

	<NavigationListAndBurger />

	<LanguageSwitcher />
</div>
