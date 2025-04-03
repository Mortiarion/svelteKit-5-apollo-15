<script lang="ts">
	import SocialLinkList from '../header/component/SocialLinkList.svelte';
</script>

<section id="contacts" class="container pb-25">
	<div class="flex justify-between gap-5 max-lg:flex-col max-lg:gap-10">
		<div class="flex flex-col items-center gap-2.5">
			<p class="font-audiowide border-b text-4xl max-sm:text-2xl">Графік роботи:</p>
			<span class="text-2xl max-sm:text-lg">ПН-НД 14:00 - 23:00</span>
		</div>

		<div class="flex flex-col items-center gap-2.5">
			<p class="font-audiowide border-b text-4xl max-sm:text-2xl">Місцезнаходження:</p>
			<span class="text-2xl max-sm:text-lg">Райдужний массив 15/2</span>
		</div>

		<div class="flex flex-col items-center gap-2.5">
			<p class="font-audiowide border-b text-4xl max-sm:text-2xl">Контакти:</p>
			<SocialLinkList className={'flex gap-5'} />
		</div>
	</div>
</section>
