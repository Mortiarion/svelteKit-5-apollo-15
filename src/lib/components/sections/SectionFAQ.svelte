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
        activeIndex = activeIndex === index ? -1 : index;
	}
</script>

<section id="faq" class="container flex flex-col gap-8 py-48">
	<h2 class=" font-audiowide text-center text-2xl font-bold lg:text-5xl">ЧАСТІ ПИТАННЯ</h2>

	<ul class="question-list">
		{#each faq as { question, respond }, index}
			<li class="question-item">
				<div class="question-text text-xl">
					<button
						type="button"
						onclick={() => toggleFaq(index)}
						class="flex justify-between text-left cursor-pointer"
					>
						{question}
						<span class="icon">&#8250;</span>
					</button>

					{#if activeIndex === index}
						<div transition:slide class="answer text-base text-white lg:text-xl">
							<p transition:fade>{respond}</p>
						</div>
					{/if}
				</div>
			</li>
		{/each}
	</ul>
</section>

<style lang="postcss">
	.question-list {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	.question-item {
		display: flex;
		flex-direction: column;
		/* cursor: pointer; */
		border-bottom: 1px solid #2e2e2e;
		padding-bottom: 20px;
	}

	.question-text {
		display: flex;
		justify-content: space-between;
		flex-direction: column;
	}

	.icon {
		font-size: 1.5rem;
		transition: transform 0.3s;
	}

	.rotate {
		transform: rotate(90deg);
	}

	.answer {
		padding: 15px 10px 0;
		/* overflow: hidden; */
		/* max-height: 0;/ */
		/* transition: max-height 0.5s ease; */

		/* &.open {
			max-height: 200px;
		} */
	}
</style>
