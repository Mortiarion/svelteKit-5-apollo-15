<script lang='ts'>
	import Footer from '$lib/components/footer/Footer.svelte';
	import Header from '$lib/components/header/Header.svelte';
</script>

<svelte:head>
    <title>Apollo-15</title>
</svelte:head>

<section class="flex min-h-dvh flex-col text-white font-lato">
	<!-- svelte-ignore a11y_media_has_caption -->
	<video class="fixed -z-10 min-h-dvh min-w-dvw object-cover" autoplay loop>
		<source src="/paralax.mp4" type="video/mp4" />
	</video>

	<Header />

	<main class="flex-auto">
		<h1>main</h1>
	</main>

	<Footer />
</section>
