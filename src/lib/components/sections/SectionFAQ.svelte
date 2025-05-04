<script lang="ts">
	import { t } from '$lib/i18n';
	import { fade, slide } from 'svelte/transition';

	interface IFaq {
		question: string;
		respond: string;
	}

	const faq: IFaq[] = $derived([
		{ question: $t('section.faq.list.one.question'), respond: $t('section.faq.list.one.respond') },
		{ question: $t('section.faq.list.two.question'), respond: $t('section.faq.list.two.respond') },
		{
			question: $t('section.faq.list.three.question'),
			respond: $t('section.faq.list.three.respond')
		},
		{
			question: $t('section.faq.list.four.question'),
			respond: $t('section.faq.list.four.respond')
		},
		{ question: $t('section.faq.list.five.question'), respond: $t('section.faq.list.five.respond') }
	]);

	let activeIndex = $state<number | null>(null);

	function toggleFaq(index: number) {
		activeIndex = activeIndex === index ? null : index;
	}
</script>

<section id="faq" class="container pb-25">
	<h4
		class="main-title bg-gradient-to-b from-cyan-900 via-indigo-500 to-amber-100 bg-clip-text text-transparent"
	>
		ЧАСТІ ПИТАННЯ
	</h4>

	<ul class="flex flex-col gap-6">
		{#each faq as { question, respond }, index}
			<li class="text-2xl max-sm:text-lg">
				<button
					type="button"
					onclick={() => toggleFaq(index)}
					class="flex w-full cursor-pointer justify-between text-left max-sm:gap-2"
				>
					{question}
					<span class:rotate={activeIndex === index} class="text-2xl transition-transform">
						&#8250;
					</span>
				</button>

				{#if activeIndex === index}
					<div transition:slide class="px-5 pt-2.5 text-base text-white max-sm:text-sm">
						<p transition:fade>{respond}</p>
					</div>
				{/if}

				<hr class="color-2e2e2e mt-5" />
			</li>
		{/each}
	</ul>
</section>
