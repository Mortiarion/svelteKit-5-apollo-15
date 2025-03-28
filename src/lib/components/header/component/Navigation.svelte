<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, slide } from 'svelte/transition';

	import LanguageSwitcher from './LanguageSwitcher.svelte';
	import Logo from './Logo.svelte';

	let isBurger = $state(false);

	function toggleDropdownBurger() {
		isBurger = !isBurger;
	}

    onMount(() => {
        if(window.innerWidth >= 768) {
            isBurger = true;
        }
    })
</script>

<div class="py-5 md:flex md:justify-between md:items-center">
    <div>
        <Logo />
    </div>
    
    
    <button
        class="absolute top-5 right-5 flex min-w-6 flex-col gap-1 md:hidden"
        onclick={toggleDropdownBurger}
        aria-label={isBurger ? 'Close Menu' : 'Toggle Menu'}
        title={isBurger ? 'Close Menu' : 'Toggle Menu'}
    >
        <hr class="w-full rounded-xl border-t-2" class:open={isBurger} />
        <hr class="w-full rounded-xl border-t-2" class:open={isBurger} />
        <hr class="w-full rounded-xl border-t-2" class:open={isBurger} />
    </button>
    
    {#if isBurger}
        <div transition:slide>
            <div transition:fade>
                <ul class="absolute md:static md:flex md:gap-3">
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
            </div>
        </div>
    {/if}

    <LanguageSwitcher />

</div>

<style lang="postcss">
	button {
		> hr {
			transition:
				transform 0.3s ease-in-out,
				opacity 0.3s ease-in-out;

			&.open:nth-child(1) {
				transform: translateY(6px) rotate(45deg);
			}

			&.open:nth-child(2) {
				opacity: 0;
			}

			&.open:nth-child(3) {
				transform: translateY(-6px) rotate(-45deg);
			}
		}
	}
</style>
