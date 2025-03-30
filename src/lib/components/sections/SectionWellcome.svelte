<script lang="ts">
	import CoctailIcon from '$lib/icons/CoctailIcon.svelte';
	import HookahIcon from '$lib/icons/HookahIcon.svelte';
	import JoistickIcon from '$lib/icons/JoistickIcon.svelte';
</script>

<section class="container">
	<h1 class="mb-10 text-center text-5xl md:text-4xl">Ласкаво просимо до "Apollo 15"</h1>

	<p class="text-center text-xl">
		Наш Lounge Bar це затишний куточок, де час сповільнюється, а фантазія розлітається у світ
		загадкового космосу. Стильний інтер'єр, м'яке світло та димні кальяни створюють неймовірну та
		неповторну атмосферу, даруючи незабутні враження та приємні емоції. Барна карта приємно вас
		здивує як класичними так і авторськими міксами. А шанувальникам чаю ми пропонуємо оцінити
		вишукані сорти чаю з усього світу.
	</p>

	<p class="mb-16 text-center text-xl">
		Також до вашої уваги настільні ігри та ігри на PlayStation.
	</p>

	<div class="grid grid-cols-3 gap-12 text-xl max-md:grid-cols-1">
		<div class="flex flex-col items-center">
			<i class="h-[214px]">
				<HookahIcon />
			</i>

			<p class="text-center">
				Димні та неймовірні кальяни поринуть вас в атмосферу невагомості, та перенесуть у таємничий
				космос!
			</p>
		</div>

		<div class="flex flex-col items-center">
			<i class="h-[214px]">
				<JoistickIcon />
			</i>

			<p class="text-center">
				Перенесе вас у загадковий світ віртуальної реальності, з самими свіжими іграми для вас та
				ваших друзів!
			</p>
		</div>

		<div class="flex flex-col items-center">
			<i class="h-[214px]">
				<CoctailIcon />
			</i>

			<p class="text-center">
				Коктейльна карта відірве вас від реальності та подарує вишуканний світ незабутніх емоцій!
			</p>
		</div>
	</div>
</section>
