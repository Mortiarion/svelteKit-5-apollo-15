<script lang="ts">
	import LanguageSwitcher from './LanguageSwitcher.svelte';
	import Logo from './Logo.svelte';
	import NavigationListAndBurger from './NavigationListAndBurger.svelte';
</script>

<div class="flex justify-between md:items-center">
	<Logo className={'max-w-[98px]'} />

	<NavigationListAndBurger />

	<LanguageSwitcher />
</div>
