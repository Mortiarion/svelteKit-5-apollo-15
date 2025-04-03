<script lang='ts'>
	import Footer from '$lib/components/footer/Footer.svelte';
	import Header from '$lib/components/header/Header.svelte';
	import SectionBarMenu from '$lib/components/sections/SectionBarMenu.svelte';
	import SectionFaq from '$lib/components/sections/SectionFAQ.svelte';
	import SectionGallery from '$lib/components/sections/SectionGallery.svelte';
	import SectionHookah from '$lib/components/sections/SectionHookah.svelte';
	import SectionMapLocation from '$lib/components/sections/SectionMapLocation.svelte';
	import SectionSocialLinkList from '$lib/components/sections/SectionSocialLinkList.svelte';
	import SectionWellcome from '$lib/components/sections/SectionWellcome.svelte';
	
	
	
</script>

<svelte:head>
    <title>Apollo-15</title>
</svelte:head>

<section class="flex min-h-dvh flex-col text-white font-lato bg-over">
	<!-- svelte-ignore a11y_media_has_caption -->
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
	</main>

	<Footer />
</section>
