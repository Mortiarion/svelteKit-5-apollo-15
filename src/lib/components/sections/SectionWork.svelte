<script lang="ts">
	import { t } from '$lib/i18n';

	// import SocialLinkList from '../header/component/SocialLinkList.svelte';
</script>

<section id="contacts" class="container pb-25">
	<div class="flex justify-between gap-5 max-lg:flex-col max-lg:gap-10">
		<div class="flex flex-col items-center gap-2.5">
			<p class="font-audiowide border-b text-4xl max-sm:text-2xl">
				{$t('section.work.title')}
			</p>
			<span class="text-2xl max-sm:text-lg">
				{$t('section.work.time')}
			</span>
		</div>

		<div class="flex flex-col items-center gap-2.5">
			<p class="font-audiowide border-b text-4xl max-sm:text-2xl">
				{$t('section.work.location')}
			</p>

			<a
				href="https://maps.app.goo.gl/KXcyKubGWhHUa4E97"
				target="_blank"
				rel="external"
				class="text-2xl max-sm:text-lg"
			>
				{$t('section.work.address')}
			</a>
		</div>

		<!-- <div class="flex flex-col items-center gap-2.5">
			<p class="font-audiowide border-b text-4xl max-sm:text-2xl">Контакти:</p>
			<SocialLinkList  />
		</div> -->
	</div>
</section>
