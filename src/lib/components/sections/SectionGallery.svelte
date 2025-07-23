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

	const slideImages: TSlideImg[] = [
		{ src: 'galery_one', alt: 'Gallery 1' },
		{ src: 'galery_two', alt: 'Gallery 2' },
		{ src: 'galery_three', alt: 'Gallery 3' },
		{ src: 'galery_five', alt: 'Gallery 4' },
		{ src: 'galery_four', alt: 'Gallery 5' },
		{ src: 'galery_six', alt: 'Gallery 6' },
		{ src: 'galery_seven', alt: 'Gallery 7' },
		{ src: 'galery_eight', alt: 'Gallery 8' },
		{ src: 'galery_nine', alt: 'Gallery 9' },
		{ src: 'galery_ten', alt: 'Gallery 10' },
		{ src: 'galery_eleven', alt: 'Gallery 11' },
		{ src: 'galery_twelve', alt: 'Gallery 12' },
		{ src: 'galery_thersteen', alt: 'Gallery 13' },
		{ src: 'galery_fourteen', alt: 'Gallery 14' },
		{ src: 'galery_fiveteen', alt: 'Gallery 15' },
		{ src: 'galery_sixteen', alt: 'Gallery 16' },
		{ src: 'galery_seventeen', alt: 'Gallery 17' },
		{ src: 'galery_eightteen', alt: 'Gallery 18' }
	];

	const allImages: { src: string; alt: string }[] = slideImages;

	let sliderContainer: HTMLDivElement;
	let slideElements: HTMLDivElement[] = $state([]);
	let isDragging: boolean = $state<boolean>(false);
	let startClientX: number;
	let initialScrollLeft: number;
	let lastClientX: number;
	let dragThreshold: number = 5;

	function handleWheel(event: WheelEvent) {
		if (sliderContainer && !isShownModalGallery) {
			event.preventDefault();
			sliderContainer.scrollLeft += event.deltaY;
		}
	}

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

		const handleMouseUp = (moveEvent: MouseEvent) => {
			isDragging = false;

			if (Math.abs(lastClientX - startClientX) < dragThreshold) {
				const rect = sliderContainer.getBoundingClientRect();
				const clickX = moveEvent.clientX - rect.left + sliderContainer.scrollLeft; // Абсолютна позиція кліку

				// Знаходимо найближчий слайд
				let closestIndex = 0;
				let minDistance = Infinity;
				slideElements.forEach((slide, index) => {
					const slideRect = slide.getBoundingClientRect();
					const slideCenter =
						slideRect.left - rect.left + sliderContainer.scrollLeft + slideRect.width / 2;
					const distance = Math.abs(clickX - slideCenter);
					if (distance < minDistance) {
						minDistance = distance;
						closestIndex = index;
					}
				});

				if (closestIndex >= 0 && closestIndex < slideImages.length) {
					currentImageIndex = closestIndex;
					isShownModalGallery = true;
				}
			}

			document.removeEventListener('mousemove', handleMouseMove);
			document.removeEventListener('mouseup', handleMouseUp);
		};

		document.addEventListener('mousemove', handleMouseMove, { passive: true });
		document.addEventListener('mouseup', handleMouseUp, { once: true });
	}

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
			class="slide-container scrollbar-width flex h-[496px] gap-2.5 overflow-x-scroll max-lg:max-h-[396px]"
			bind:this={sliderContainer}
			onwheel={handleWheel}
			onmousedown={handleMouseDown}
			ontouchstart={handleTouchStart}
			ontouchmove={handleTouchMove}
			ontouchend={handleTouchEnd}
		>
			{#each slideImages as { src, alt }, index}
				<div class="slide min-w-fit max-w-fit" bind:this={slideElements[index]}>
					<picture>
						<source srcset={`/slider-gallery/${src}.webp`} type="image/webp" />
						<img
							class="h-full w-full object-cover"
							src={`/slider-gallery/${src}.jpg`}
							{alt}
							loading="lazy"
						/>
					</picture>
				</div>
			{/each}
		</div>
	</div>

	<ModalGallery bind:isShownModalGallery {currentImageIndex} {allImages} />
</section>

<style lang="postcss">
	.slider-wrapper {
		.slide-container {
			&:active {
				cursor: grabbing;
			}
		}
	}
</style>
