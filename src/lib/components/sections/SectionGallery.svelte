<script lang="ts">
	import { t } from '$lib/i18n';
	import ModalGallery from '../ModalGallery.svelte';

	let isShownModalGallery: boolean = $state<boolean>(false);
	let currentImageIndex: number = $state<number>(0);

	type TSlideImg = {
		src: string;
		alt: string;
		className?: string;
	};

	const slideImages: Readonly<TSlideImg[][]> = [
		[
			{ src: 'galery_one', alt: 'Gallery 1' },
			{ src: 'galery_two', alt: 'Gallery 2' },
			{ src: 'galery_three', alt: 'Gallery 3', className: 'col-span-2' }
		],
		[
			{ src: 'galery_five', alt: 'Gallery 4', className: 'row-span-2' },
			{ src: 'galery_four', alt: 'Gallery 5' },
			{ src: 'galery_six', alt: 'Gallery 6', className: 'col-start-2' }
		],
		[
			{ src: 'galery_one', alt: 'Gallery 7' },
			{ src: 'galery_two', alt: 'Gallery 8' },
			{ src: 'galery_three', alt: 'Gallery 9', className: 'col-span-2' }
		]
	];

	const allImages = slideImages.flat();

	let sliderContainer: HTMLDivElement;
	let isDragging: boolean = $state<boolean>(false);
	let startClientX: number;
	let initialScrollLeft: number;
	let lastClientX: number;
	let dragThreshold: number = 5;

	function handleWheel(event: WheelEvent) {
		if (sliderContainer && !isShownModalGallery) {
			event.preventDefault();

			sliderContainer.scrollLeft += event.deltaY;
		};
	};

	function handleMouseDown(event: MouseEvent) {
        if (event.button !== 0 || !sliderContainer) return;

        event.preventDefault();

        isDragging = true;
        startClientX = event.clientX;
        lastClientX = startClientX;
        initialScrollLeft = sliderContainer.scrollLeft;

        const handleMouseMove = (moveEvent: MouseEvent) => {
            if (!isDragging) return;

            const delta = moveEvent.clientX - startClientX;

            sliderContainer.scrollLeft = initialScrollLeft - delta;
            lastClientX = moveEvent.clientX;
        };

        const handleMouseUp = () => {
            isDragging = false;

            if (Math.abs(lastClientX - startClientX) < dragThreshold) {
                const clickedGroupIndex = Math.floor(sliderContainer.scrollLeft / sliderContainer.offsetWidth);

                const clickedIndex = Math.round((sliderContainer.scrollLeft % sliderContainer.offsetWidth) / (sliderContainer.offsetWidth / slideImages[clickedGroupIndex].length));

                const imageIndex = clickedGroupIndex * slideImages[0].length + clickedIndex;

                if (imageIndex >= 0 && imageIndex < allImages.length) {
                    currentImageIndex = imageIndex;

                    isShownModalGallery = true;
                };
            };

            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };

        document.addEventListener('mousemove', handleMouseMove, { passive: true });
        document.addEventListener('mouseup', handleMouseUp, { once: true });
    };

    function handleTouchStart(event: TouchEvent) {
        if (!sliderContainer) return;

        startClientX = event.touches[0].clientX;

        initialScrollLeft = sliderContainer.scrollLeft;
    }

    function handleTouchMove(event: TouchEvent) {
        if (!sliderContainer || !startClientX) return;

        const delta = event.touches[0].clientX - startClientX;

        sliderContainer.scrollLeft = initialScrollLeft - delta;
    }

    function handleTouchEnd() {
        startClientX = 0;
    }
</script>

<section id="gallery" class="container pb-25">
	<h4
		class="main-title bg-gradient-to-b from-teal-500 via-orange-500 to-indigo-500 bg-clip-text text-transparent"
	>
		{$t('section.gallery.title')}
	</h4>

	<div class="slider-wrapper cursor-grab">
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div
			class="slide-container overflow-y-hidden overflow-x-scroll scrollbar-width grid max-h-[496px] grid-flow-col grid-rows-1 gap-2.5 max-lg:max-h-[396px]"
			bind:this={sliderContainer}
			onwheel={handleWheel}
			onmousedown={handleMouseDown}
			ontouchstart={handleTouchStart}
			ontouchmove={handleTouchMove}
			ontouchend={handleTouchEnd}
		>
			{#each slideImages as slideGroup}
				<div class="slide grid grid-cols-2 grid-rows-2 gap-2.5">
					{#each slideGroup as { src, alt, className }}
						<picture
							class={className}
						>
							<source srcset={`/slider-gallery/${src}.webp`} type="image/webp" />

							<img class="w-full h-full" src={`/slider-gallery/${src}.jpg`} {alt} loading="lazy" />
						</picture>
					{/each}
				</div>
			{/each}
		</div>
	</div>

	<ModalGallery 
		bind:isShownModalGallery
		{currentImageIndex}
		{allImages}
	/>

</section>

<style lang="postcss">
	.slider-wrapper {
		.slide-container {
			&:active {
				cursor: grabbing;
			}

			> .slide:nth-child(2) {
				width: 798px;
			}

			> .slide {
				width: 496px;
			}
		}
	}
</style>
