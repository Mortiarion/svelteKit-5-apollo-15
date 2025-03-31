<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	let isBurger = $state(false);
	let isAlwaysOpen = $state(false);
	let burgerButton: HTMLElement;

	function toggleDropdownBurger() {
		isBurger = !isBurger;
	}

	onMount(() => {
		if (window.innerWidth >= 768) {
			isBurger = true;
			isAlwaysOpen = true;
		}

		const closeBurger = (event: MouseEvent) => {
			if (!isAlwaysOpen && burgerButton && !burgerButton.contains(event.target as Node)) {
				isBurger = false;
			}
		};

		document.addEventListener('click', closeBurger);

		return () => {
			document.removeEventListener('click', closeBurger);
		};
	});
</script>

<button
	class="absolute right-5 bottom-7 z-10 flex min-w-7 flex-col gap-1 md:hidden"
	bind:this={burgerButton}
	onclick={toggleDropdownBurger}
	aria-label={isBurger ? 'Close Menu' : 'Toggle Menu'}
	title={isBurger ? 'Close Menu' : 'Toggle Menu'}
>
	<hr class="w-full rounded-xl border-t-4" class:open={isBurger} />
	<hr class="w-full rounded-xl border-t-4" class:open={isBurger} />
	<hr class="w-full rounded-xl border-t-4" class:open={isBurger} />
</button>

{#if isBurger}
	<ul transition:fly={{ y: -10 }} class="absolute top-32 md:static md:flex md:gap-3 text-xl font-semibold">
		<li class="relative hover:underline focus-visible:underline active:underline">
			<a
				href="/"
				aria-current="page"
				title="Головна сторінка"
				aria-label="Головна сторінка"
				class="group"
				>Головна
				<span
					class="absolute left-30 -translate-x-1/2 scale-0 rounded bg-gray-50 px-2 py-1 text-xs text-zinc-950 transition-all group-hover:scale-100 group-focus:scale-100"
				>
					Головна сторінка
				</span>
			</a>
		</li>
		<li class="relative hover:underline focus-visible:underline active:underline">
			<a href="/#about-us" aria-current="page" title="page" aria-label="page" class="group"
				>Про нас
				<span
					class="absolute left-30 -translate-x-1/2 scale-0 rounded bg-gray-50 px-2 py-1 text-xs text-zinc-950 transition-all group-hover:scale-100 group-focus:scale-100"
				>
					Перейти до секції
				</span>
			</a>
		</li>
		<li class="relative hover:underline focus-visible:underline active:underline">
			<a href="/#menu" aria-current="page" title="page" aria-label="page" class="group"
				>Меню
				<span
					class="absolute left-30 -translate-x-1/2 scale-0 rounded bg-gray-50 px-2 py-1 text-xs text-zinc-950 transition-all group-hover:scale-100 group-focus:scale-100"
				>
					Перейти до секції
				</span>
			</a>
		</li>
		<li class="relative hover:underline focus-visible:underline active:underline">
			<a href="/#galery" aria-current="page" title="page" aria-label="page" class="group"
				>Галерея
				<span
					class="absolute left-30 -translate-x-1/2 scale-0 rounded bg-gray-50 px-2 py-1 text-xs text-zinc-950 transition-all group-hover:scale-100 group-focus:scale-100"
				>
					Перейти до секції
				</span>
			</a>
		</li>
		<li class="relative hover:underline focus-visible:underline active:underline">
			<a href="/#faq" aria-current="page" title="page" aria-label="page" class="group"
				>FАQ
				<span
					class="absolute left-30 -translate-x-1/2 scale-0 rounded bg-gray-50 px-2 py-1 text-xs text-zinc-950 transition-all group-hover:scale-100 group-focus:scale-100"
				>
					Перейти до секції
				</span>
			</a>
		</li>
		<li class="relative hover:underline focus-visible:underline active:underline">
			<a href="/#contacts" aria-current="page" title="page" aria-label="page" class="group"
				>Контакти
				<span
					class="absolute left-30 -translate-x-1/2 scale-0 rounded bg-gray-50 px-2 py-1 text-xs text-zinc-950 transition-all group-hover:scale-100 group-focus:scale-100"
				>
					Перейти до секції
				</span>
			</a>
		</li>
	</ul>
{/if}

<style lang="postcss">
	button {
		> hr {
			transition:
				transform 0.3s ease-in-out,
				opacity 0.3s ease-in-out;

			&.open:nth-child(1) {
				transform: translateY(8px) rotate(45deg);
			}

			&.open:nth-child(2) {
				opacity: 0;
			}

			&.open:nth-child(3) {
				transform: translateY(-8px) rotate(-45deg);
			}
		}
	}
</style>
