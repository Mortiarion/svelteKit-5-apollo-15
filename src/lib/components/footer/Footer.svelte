<script lang="ts">
	import Logo from '../header/component/Logo.svelte';
	import Modal from './privacy-policy/Modal.svelte';

	let listPrivacyPolicy = [
		{
			title: '1. Збір інформації',
			description:
				'Ми не збираємо жодних особистих даних від користувачів нашого сайту. Ви можете відвідувати та використовувати наш сайт без необхідності надання будь-якої інформації про себе.'
		},
		{
			title: '2. Використання інформації',
			description:
				'Оскільки ми не збираємо особисті дані, ми не використовуємо жодної інформації для комерційних чи інших цілей. Наш сайт не аналізує поведінку користувачів і не здійснює відстеження.'
		},
		{
			title: '3. Файли cookie',
			description:
				'Наш сайт може використовувати файли cookie для покращення вашого користувацького досвіду. Ці файли cookie не зберігають особисті дані і можуть бути вимкнені у налаштуваннях вашого браузера.'
		},
		{
			title: '4. Обмін даними',
			description:
				'Оскільки ми не збираємо особисті дані, ми не передаємо жодну інформацію третім особам.'
		},
		{
			title: '5. Безпека',
			description:
				'Ми застосовуємо всі можливі заходи для забезпечення безпеки на нашому сайті. Однак, оскільки ми не збираємо дані користувачів, вам не потрібно турбуватися про безпеку особистої інформації.'
		},
		{
			title: '6. Зміни до політики конфіденційності',
			description:
				'Ми можемо час від часу оновлювати цю політику конфіденційності. Усі зміни будуть відображені на цій сторінці.'
		},
		{
			title: '7. Контактна інформація',
			description:
				'Якщо у вас виникли питання щодо цієї політики конфіденційності, ви можете зв’язатися з нами через контактну інформацію, розміщену на нашому сайті.'
		}
	];

	let showModal = $state(true);
</script>

<footer class="container overflow-visible py-10">
	<div class="flex items-end justify-between max-md:flex-col max-md:items-center max-md:gap-1">
		<button type="button" class="cursor-pointer max-md:hidden" onclick={() => (showModal = true)}
			>Політика конфіденційності</button
		>

		<Modal bind:showModal>
			{#snippet header()}
				<h1 class="text-center text-5xl">Політика конфіденційності</h1>
			{/snippet}

			<p class="text-2xl">
				Ця політика конфіденційності визначає, як наш сайт – «Apollo 15» обробляє особисту
				інформацію відвідувачів. Ми поважаємо вашу приватність та зобов'язуємося забезпечувати
				захист вашої інформації.
			</p>

			<ul class="flex flex-col gap-10">
				{#each listPrivacyPolicy as { title, description }}
					<li>
						<p class="text-3xl">
							{title}
						</p>

						<span class="text-2xl">
							{description}
						</span>
					</li>
				{/each}
			</ul>
		</Modal>

		<Logo className={'max-w-[146px]'} />

		<button
			type="button"
			class="hidden cursor-pointer max-md:block"
			onclick={() => (showModal = true)}>Політика конфіденційності</button
		>
		<span>© 2025 UA. Всі права захищені</span>
	</div>
</footer>
