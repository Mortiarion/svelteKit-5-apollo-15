<script lang="ts">
	import { onMount } from 'svelte';
	import { locale, locales } from '$lib/i18n';
	import type { ELocales } from '$lib/translations/languages';
	import { fly } from 'svelte/transition';

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

<div class="font-audiowide relative">
	<button
		bind:this={languageMenu}
		onclick={togglelanguageMenu}
		class="cursor-pointer text-2xl underline max-md:absolute max-md:right-10 max-md:bottom-1"
		class:visibility-hidden={isOpenlanguageMenu}
		class:visibility-visible={!isOpenlanguageMenu}
	>
		{$locale}
	</button>

	{#if isOpenlanguageMenu}
		<ul transition:fly={{ y: -10 }} class="absolute top-0 right-0 flex flex-col gap-2.5 max-md:top-16.5 max-md:right-10">
			{#each locales as language}
				<li>
					<button
						type="button"
						class="cursor-pointer text-2xl underline"
						onclick={() => setLocale(language)}>{language}</button
					>
				</li>
			{/each}
		</ul>
	{/if}
</div>

<style lang="postcss">
	div {
		> button {
			transition:
				opacity 0.3s ease-in-out,
				visibility 0.3s ease-in-out;

			&.visibility-visible {
				visibility: visible;
				opacity: 1;
			}

			&.visibility-hidden {
				visibility: hidden;
				opacity: 0;
			}
		}
	}
</style>
