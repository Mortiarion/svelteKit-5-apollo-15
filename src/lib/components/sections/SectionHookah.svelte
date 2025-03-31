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

<section class="relative container py-48">
	<h2 class="font-audiowide text-center text-5xl">Кальян</h2>

	<div class="bg-menu-hookah-icon grid grid-cols-2 grid-rows-3 gap-y-20 pt-24 max-lg:flex max-lg:flex-col">
		{#each hookahMenu as hookah, i}
			<div
				class="font-audiowide flex flex-col items-center gap-2.5 {i === hookahMenu.length - 1
					? 'col-span-2'
					: ''}"
			>
				<h4 class="text-center text-4xl">{hookah.heading}</h4>

				<hr class="min-w-72 border-dashed" />

				<span class="text-center text-xl text-white">{hookah.text}</span>

				<p class="text-4xl">{hookah.paragraph}</p>
			</div>
		{/each}
	</div>
</section>
