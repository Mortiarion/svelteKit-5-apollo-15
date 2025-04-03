<script lang="ts">
	import { fade, slide } from 'svelte/transition';

	const faq = [
		{
			question: 'Чи можна у Вас замовити кальян та яка вартість?',
			respond:
				'Так, можна. Звичайні табаки, які підходять для слабких та середніх, – 300 грн. Преміум лінійка, яка підходить для середніх та міцних, – 350 грн.'
		},
		{
			question: 'Чи можливо у Вас замовити їжу?',
			respond:
				'Так, це можливо. У нас ви можете замовити смачні солодкі та солоні закуски, а також організувати доставку безпосередньо до нашого закладу.'
		},
		{
			question: 'Ви працюєте при відключенні світла?',
			respond:
				'Так, працюємо. В нас завжди є електропостачання завдяки генератору та оптоволоконному інтернету.'
		},
		{
			question: 'Чи можливо провести у Вас святкові заходи?',
			respond:
				'Так, в нашому барі будується окрема кімната (скоро відкриття) для проведення заходів, та діє знижка іменинникам 20% + можливо принести свій алкоголь за домовленістю з адміністрацією.'
		},
		{
			question: 'Чи можливо прийти просто пограти в Playstation?',
			respond:
				'Ні, мінімальне замовлення для гри у Playstation – 1 кальян, що еквівалентно двом годинам гри.'
		}
	];

	let activeIndex = $state<number | null>(null);

	function toggleFaq(index: number) {
		activeIndex = activeIndex === index ? null : index;
	}
</script>

<section id="faq" class="container py-48">
	<h2 class="font-audiowide mb-10 text-center text-5xl font-bold underline">ЧАСТІ ПИТАННЯ</h2>

	<ul class="flex flex-col gap-6">
		{#each faq as { question, respond }, index}
			<li class="text-2xl">
				<button
					type="button"
					onclick={() => toggleFaq(index)}
					class="flex w-full cursor-pointer justify-between"
				>
					{question}
					<span class:rotate={activeIndex === index} class="text-2xl transition-transform">
						&#8250;
					</span>
				</button>

				{#if activeIndex === index}
					<div transition:slide class="px-5 pt-2.5 text-base text-white">
						<p transition:fade>{respond}</p>
					</div>
				{/if}

				<hr class="color-2e2e2e mt-5" />
			</li>
		{/each}
	</ul>
</section>
