<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	import { t } from '$lib/i18n';

	let isBurger = $state(false);
	let isDesktop: boolean = $state(false);
	let burgerButton: HTMLElement;

	const navItems = [
		// { href: '/', key: 'home', title: 'Головна сторінка' },
		// { href: '/#about-us', key: 'about', title: 'Про нас' },
		{ href: '/#menu', key: 'menu', title: $t('nav.menu') },
		{ href: '/#gallery', key: 'gallery', title: $t('nav.gallery') },
		{ href: '/#faq', key: 'faq', title: $t('nav.faq') }
		// { href: '/#contacts', key: 'contact', title: 'Контакти' }
	];

	function toggleDropdownBurger() {
		isBurger = !isBurger;
	}

	function smoothScrollToSection(event: Event, href: string) {
		event.preventDefault();
		
		const sectionId = href.replace('/#', '');
		const section = document.getElementById(sectionId);

		if (section) {
			section.scrollIntoView({ behavior: 'smooth', block: 'start' });
		};
	};

	onMount(() => {
		const checkViewport = () => {
			isDesktop = window.innerWidth >= 768;
			isBurger = isDesktop;
		};

		checkViewport();

		const handleOutsideClick = (event: MouseEvent) => {
			if (!isDesktop && burgerButton && !burgerButton.contains(event.target as Node)) {
				isBurger = false;
			}
		};

		window.addEventListener('resize', checkViewport);
		document.addEventListener('click', handleOutsideClick);

		return () => {
			window.removeEventListener('resize', checkViewport);
			document.removeEventListener('click', handleOutsideClick);
		};
	});
</script>

<button
	class="absolute right-5 bottom-7 z-10 flex min-w-7 flex-col gap-1 md:hidden"
	bind:this={burgerButton}
	onclick={toggleDropdownBurger}
	aria-label={isBurger ? $t('nav.close') : $t('nav.toggle')}
	title={isBurger ? $t('nav.close') : $t('nav.toggle')}
>
	{#each Array(3) as _, i}
		<span
			class="h-1 w-full translate-y-2 rounded-full bg-current transition-all duration-300 ease-in-out"
			class:transform={isBurger}
			class:translate-y-2={isBurger && i === 0}
			class:rotate-45={isBurger && i === 0}
			class:opacity-0={isBurger && i === 1}
			class:-translate-y-2={isBurger && i === 2}
			class:-rotate-45={isBurger && i === 2}
		></span>
	{/each}
</button>

{#if isBurger}
	<ul
		transition:fly={{ y: -10 }}
		class="absolute top-52 text-xl font-semibold md:static md:flex md:gap-3"
	>
		{#each navItems as { href, key, title }}
			<li class="hover:underline focus-visible:underline active:underline">
				<a {href} {title} aria-label={title} onclick={(event) => smoothScrollToSection(event, href)}>
					{$t(`nav.${key}`)}
				</a>
			</li>
		{/each}
	</ul>
{/if}
