<script lang="ts">
	let hookahMenu = [
		{
			heading: 'ЗЕМЛЯ LITE',
			text: 'Використання для не міцних сортів табаку',
			paragraph: '300₴'
		},
		{
			heading: 'САТУРН PREMIUM',
			text: 'Використання міцних сортів табаку',
			paragraph: '350₴'
		},
		{
			heading: 'ЗАГАДКОВИЙ КОСМОС',
			text: 'Авторський мікс для подорожі у глибь космосу',
			paragraph: '390₴'
		},
		{
			heading: 'НЕВАГОМІСТЬ',
			text: 'Авторський мікс для подорожі по просторам галактик',
			paragraph: '390₴'
		},
		{
			heading: 'АПОЛЛОН 15',
			text: 'Авторський мікс для справжніх мандрівників',
			paragraph: '390₴'
		}
	];
</script>

<section class="relative container pb-25">
	<h4
		class="main-title bg-gradient-to-br from-blue-600 via-lime-400 to-neutral-950 bg-clip-text text-transparent"
	>
		Кальян
	</h4>

	<div
		class="bg-menu-hookah-icon grid grid-cols-2 grid-rows-3 gap-y-20 pt-24 max-lg:flex max-lg:flex-col max-sm:gap-10"
	>
		{#each hookahMenu as hookah, i}
			<div
				class="font-audiowide flex flex-col items-center gap-2.5 {i === hookahMenu.length - 1
					? 'col-span-2'
					: ''}"
			>
				<h4 class="text-center text-4xl max-md:text-3xl max-sm:text-2xl">{hookah.heading}</h4>

				<hr class="min-w-72 border-dashed" />

				<span class="text-center text-xl text-white max-sm:text-base">{hookah.text}</span>

				<p class="text-4xl max-md:text-3xl max-sm:text-2xl">{hookah.paragraph}</p>
			</div>
		{/each}
	</div>
</section>
