<script lang="ts">
	import Footer from '$lib/components/footer/Footer.svelte';
	import Header from '$lib/components/header/Header.svelte';
	import SectionBarMenu from '$lib/components/sections/SectionBarMenu.svelte';
	import SectionFaq from '$lib/components/sections/SectionFAQ.svelte';
	import SectionGallery from '$lib/components/sections/SectionGallery.svelte';
	import SectionHookah from '$lib/components/sections/SectionHookah.svelte';
	import SectionMapLocation from '$lib/components/sections/SectionMapLocation.svelte';
	import SectionSocialLinkList from '$lib/components/sections/SectionSocialLinkList.svelte';
	import SectionWellcome from '$lib/components/sections/SectionWellcome.svelte';
	import SectionWork from '$lib/components/sections/SectionWork.svelte';
</script>

<svelte:head>
	<title>Apollo-15</title>
</svelte:head>

<section class="font-lato bg-over flex min-h-dvh flex-col text-white">
	<video class="fixed -z-10 min-h-dvh min-w-dvw object-cover" autoplay loop muted playsinline>
		<source src="./paralax.mp4" type="video/mp4" />
	</video>

	<Header />

	<main class="flex-auto">
		<SectionSocialLinkList />

		<SectionWellcome />

		<SectionHookah />

		<SectionBarMenu />

		<SectionGallery />

		<SectionFaq />

		<SectionMapLocation />

		<SectionWork />
	</main>

	<Footer />
</section>
