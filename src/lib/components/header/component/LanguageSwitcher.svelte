<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	import { locale, locales, t } from '$lib/i18n';
	import type { ELocales } from '$lib/translations/languages';

	let isOpen = $state(false);
	let languageMenu: HTMLElement;

	const saveLocale = (newLocale: string) => {
		localStorage.setItem('selectedLocale', newLocale);
		locale.set(newLocale as ELocales);
	};

	onMount(() => {
		const savedLocale = localStorage.getItem('selectedLocale');
		if (savedLocale && locales.includes(savedLocale as ELocales)) {
			locale.set(savedLocale as ELocales);
		}

		const handleClickOutside = (event: MouseEvent) => {
			if (languageMenu && !languageMenu.contains(event.target as Node)) {
				isOpen = false;
			}
		};

		document.addEventListener('click', handleClickOutside);

		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	});

	function togglelanguageMenu() {
		isOpen = !isOpen;
	}

	const setLocale = (newLocale: string) => {
		saveLocale(newLocale);
		isOpen = false;
	};
</script>

<div class="font-audiowide relative">
	<button
		bind:this={languageMenu}
		onclick={togglelanguageMenu}
		class="cursor-pointer text-2xl w-14 underline transition-all max-md:absolute max-md:right-10 max-md:bottom-1 {isOpen
			? 'invisible opacity-0'
			: 'visible opacity-100'}"
		aria-label={$t('lang.switch')}
		title={$t('lang.switch')}
	>
		{$locale}
	</button>

	{#if isOpen}
		<ul
			transition:fly={{ y: -10 }}
			class="absolute top-0 right-0 flex flex-col gap-2.5 max-md:top-23 max-md:right-10"
		>
			{#each locales as language}
				<li>
					<button
						type="button"
						class="cursor-pointer text-2xl underline"
						onclick={() => setLocale(language)}
						aria-label={$t(`lang.${language}`)}
						title={$t(`lang.${language}`)}
					>
						{language}
					</button>
				</li>
			{/each}
		</ul>
	{/if}
</div>
