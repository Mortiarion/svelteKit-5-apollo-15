<script lang="ts">
	import { t } from '$lib/i18n';

	let hookahMenu = $derived([
		{
			heading: 'ЗЕМЛЯ LITE',
			text: $t('section.hookah.menu.list.one.text'),
			paragraph: '330₴'
		},
		{
			heading: 'САТУРН PREMIUM',
			text: $t('section.hookah.menu.list.two.text'),
			paragraph: '380₴'
		},
		{
			heading: 'ЗАГАДКОВИЙ КОСМОС',
			text: $t('section.hookah.menu.list.three.text'),
			paragraph: '420₴'
		},
		{
			heading: 'НЕВАГОМІСТЬ',
			text: $t('section.hookah.menu.list.four.text'),
			paragraph: '420₴'
		},
		{
			heading: 'АПОЛЛОН 15',
			text: $t('section.hookah.menu.list.five.text'),
			paragraph: '420₴'
		}
	]);
</script>

<section class="relative container pb-25">
	<h4
		class="main-title bg-gradient-to-tl from-slate-800 via-violet-500 to-zinc-400 bg-clip-text text-transparent"
	>
		{$t('section.hookah.menu.title')}
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
				<h5 class="text-center text-4xl max-md:text-3xl max-sm:text-2xl">{hookah.heading}</h5>

				<hr class="min-w-72 border-dashed" />

				<span class="text-center text-xl max-sm:text-base">{hookah.text}</span>

				<p class="text-4xl max-md:text-3xl max-sm:text-2xl">{hookah.paragraph}</p>
			</div>
		{/each}
	</div>
</section>
