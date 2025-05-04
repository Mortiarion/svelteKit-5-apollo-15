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

	<meta
		name="description"
		content="Ласкаво просимо до Apollo 15 — затишний Lounge Bar із космічною атмосферою, димними кальянами, авторськими коктейлями та настільними іграми. Відвідайте нас!"
	/>
	<meta
		name="keywords"
		content="Apollo 15, Lounge Bar, кальяни, коктейлі, настільні ігри, космічна атмосфера, Одесса"
	/>
	<meta name="author" content="MoodPanda" />
	<meta name="robots" content="index, follow" />
</svelte:head>

<section class="font-lato flex min-h-dvh flex-col text-white">
	<div class="fixed inset-0 -z-1">
		<video
			class="min-h-dvh min-w-dvw object-cover"
			autoplay
			loop
			muted
			playsinline
			preload="metadata"
		>
			<source src="/paralax.mp4" type="video/mp4" />
			<source src="/paralax.webm" type="video/webm" />
		</video>

		<div class="bg-over absolute inset-0"></div>
	</div>

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
