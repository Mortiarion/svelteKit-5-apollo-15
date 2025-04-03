<script lang="ts">
	import Logo from '../header/component/Logo.svelte';

	let list = [
		{
			text_one: '1. Збір інформації',
			text_two:
				'Ми не збираємо жодних особистих даних від користувачів нашого сайту. Ви можете відвідувати та використовувати наш сайт без необхідності надання будь-якої інформації про себе.'
		},
		{
			text_one: '2. Використання інформації',
			text_two:
				'Оскільки ми не збираємо особисті дані, ми не використовуємо жодної інформації для комерційних чи інших цілей. Наш сайт не аналізує поведінку користувачів і не здійснює відстеження.'
		},
		{
			text_one: '3. Файли cookie',
			text_two:
				'Наш сайт може використовувати файли cookie для покращення вашого користувацького досвіду. Ці файли cookie не зберігають особисті дані і можуть бути вимкнені у налаштуваннях вашого браузера.'
		},
		{
			text_one: '4. Обмін даними',
			text_two:
				'Оскільки ми не збираємо особисті дані, ми не передаємо жодну інформацію третім особам.'
		},
		{
			text_one: '5. Безпека',
			text_two:
				'Ми застосовуємо всі можливі заходи для забезпечення безпеки на нашому сайті. Однак, оскільки ми не збираємо дані користувачів, вам не потрібно турбуватися про безпеку особистої інформації.'
		},
		{
			text_one: '6. Зміни до політики конфіденційності',
			text_two:
				'Ми можемо час від часу оновлювати цю політику конфіденційності. Усі зміни будуть відображені на цій сторінці.'
		},
		{
			text_one: '7. Контактна інформація',
			text_two:
				'Якщо у вас виникли питання щодо цієї політики конфіденційності, ви можете зв’язатися з нами через контактну інформацію, розміщену на нашому сайті.'
		}
	];

	let isOpenPolicy = $state(false);

	function togglePolicy() {
		isOpenPolicy = !isOpenPolicy;
		document.body.style.overflow = 'hidden';
	}

	function closePolicy() {
		isOpenPolicy = false;
		document.body.style.overflow = 'visible';
	}
</script>

<footer class="container py-10">
	<div class="flex justify-between items-end max-md:flex-col max-md:items-center max-md:gap-1 ">
		<button type="button" class="cursor-pointer max-md:hidden" onclick={togglePolicy}
			>Політика конфіденційності</button
		>

		{#if isOpenPolicy}
			<div
				class="bg-modal fixed inset-0 flex min-h-screen flex-col items-center justify-center overflow-hidden px-10"
			>
				<div class="font-lato h-[500px] overflow-scroll lg:mt-20 lg:h-[600px] xl:px-20">
					<button type="button" class="text-right text-3xl" onclick={closePolicy}>&times</button>
					<h1 class="mb-5 text-center text-xl lg:mb-10 lg:text-5xl">Політика конфіденційності</h1>
					<p class="mb-10 text-sm lg:mb-14 lg:text-2xl">
						Ця політика конфіденційності визначає, як наш сайт – «Apollo 15» обробляє особисту
						інформацію відвідувачів. Ми поважаємо вашу приватність та зобов'язуємося забезпечувати
						захист вашої інформації.
					</p>
					<div class="flex flex-col gap-5 lg:gap-14">
						{#each list as l}
							<div class="flex flex-col gap-2.5 text-sm lg:text-2xl">
								<p class="font-bold">{l.text_one}</p>
								<span>{l.text_two}</span>
							</div>
						{/each}
					</div>
				</div>
			</div>
		{/if}
		<Logo className={'max-w-[146px]'} />

		<button type="button" class="cursor-pointer hidden max-md:block" onclick={togglePolicy}
			>Політика конфіденційності</button
		>
		<span>© 2025 UA. Всі права захищені</span>
	</div>
</footer>
