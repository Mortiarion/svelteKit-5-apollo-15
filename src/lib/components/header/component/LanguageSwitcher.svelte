<!-- languageswitcher.ts -->
<script lang="ts">
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import { locale, locales } from '$lib/i18n';
	import type { ELocales } from '$lib/translations/languages';

	let isOpenlanguageMenu = $state(false);
	let languageMenu: HTMLElement;
	
	onMount(() => {
		const closeList = (event: MouseEvent) => {
			if (languageMenu && !languageMenu.contains(event.target as Node)) {
				isOpenlanguageMenu = false;
			}
		};
		document.addEventListener('click', closeList);

		return () => {
			document.removeEventListener('click', closeList);
		};
	});

	function togglelanguageMenu() {
		isOpenlanguageMenu = !isOpenlanguageMenu;
	}

	function setLocale(newLocale: string) {
		locale.set(newLocale as ELocales);
		isOpenlanguageMenu = false;
	}

</script>

<div class="language-menu font-audiowide relative" bind:this={languageMenu}>
	<button
		onclick={togglelanguageMenu}
		style="visibility: {isOpenlanguageMenu ? 'hidden' : 'visible'}"
		class="language-menu-button px-4 py-1.5 text-2xl underline"
	>
		{$locale}
	</button>

	{#if isOpenlanguageMenu}
		<ul class="language-dropdown text-main-button border px-4 py-1">
			{#each locales as language}
				<li>
					<button
						type="button"
						class="text-main-button text-2xl underline"
						onclick={() => setLocale(language)}>{language}</button
					>
				</li>
			{/each}
		</ul>
	{/if}
</div>

<style lang="postcss">
	.language-dropdown {
		position: absolute;
		display: flex;
		right: 0px;
		top: 0;
		flex-direction: column;
		gap: 10px;
		border-radius: 16px;
		background-color: transparent;
		z-index: 22;
	}
</style>
