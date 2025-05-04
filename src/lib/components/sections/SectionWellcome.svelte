<script lang="ts">
	import { t } from '$lib/i18n';
	import CoctailIcon from '$lib/icons/CoctailIcon.svelte';
	import HookahIcon from '$lib/icons/HookahIcon.svelte';
	import JoistickIcon from '$lib/icons/JoistickIcon.svelte';
</script>

<section class="container pb-25">
	<h1
		class="main-title bg-gradient-to-l from-slate-400 via-sky-300 to-stone-100 bg-clip-text text-transparent"
	>
		{$t('section.welcome.title')}
	</h1>

	<p class="text-center text-xl">
		{$t('section.welcome.description')}
	</p>

	<p class="mb-16 text-center text-xl">
		{$t('section.welcome.paragraph')}
	</p>

	<div class="grid grid-cols-3 gap-12 text-xl max-md:grid-cols-1">
		<div class="flex flex-col items-center">
			<i class="h-[214px]">
				<HookahIcon />
			</i>

			<p class="text-center">
				{$t('section.welcome.icon.one')}
			</p>
		</div>

		<div class="flex flex-col items-center">
			<i class="h-[214px]">
				<JoistickIcon />
			</i>

			<p class="text-center">
				{$t('section.welcome.icon.two')}
			</p>
		</div>

		<div class="flex flex-col items-center">
			<i class="h-[214px]">
				<CoctailIcon />
			</i>

			<p class="text-center">
				{$t('section.welcome.icon.three')}
			</p>
		</div>
	</div>
</section>
