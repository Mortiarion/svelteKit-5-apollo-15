<script lang="ts">
	import { t } from '$lib/i18n';

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

	let sliderContainer: HTMLDivElement;
	let isDragging = $state(false);
	let startClientX: number;
	let initialScrollLeft: number;
	let isShowModal = $state(false);
	let currentImageIndex = $state(0);
	const allImages = slideImages.flat();

	let dragThreshold = 5;
	let lastClientX: number;

	function openModal(index: number) {
		if (!isDragging && Math.abs(lastClientX - startClientX) < dragThreshold) {
			modalGallery?.showModal();
			currentImageIndex = index;
		}
	}

	function nextImage() {
		const totalImages = allImages.length;
		currentImageIndex = (currentImageIndex + 1) % totalImages;
	}

	function prevImage() {
		const totalImages = allImages.length;
		currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
	}

	function handleWheel(event: WheelEvent) {
		if (sliderContainer && !isShowModal) {
			event.preventDefault();
			sliderContainer.scrollLeft += event.deltaY;
		}
		if (isShowModal) {
			event.preventDefault();
			if (event.deltaY > 0) nextImage();
			else prevImage();
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

		const handleMouseUp = () => {
			isDragging = false;
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

	// Свайп у модальному вікні
	let touchStartX: number;
	function handleModalTouchStart(event: TouchEvent) {
		touchStartX = event.touches[0].clientX;
	}

	function handleModalTouchMove(event: TouchEvent) {
		if (!touchStartX) return;
		const touchEndX = event.touches[0].clientX;
		const delta = touchEndX - touchStartX;
		if (delta > 50) prevImage();
		else if (delta < -50) nextImage();
		touchStartX = touchEndX;
	}

	function handleModalTouchEnd() {
		touchStartX = 0;
	}

	let modalGallery = $state<HTMLDialogElement | undefined>();

	$effect(() => {
		if (isShowModal && modalGallery) {
			modalGallery.showModal();
			document.body.classList.add('overflow-hidden');
		} else {
			document.body.classList.remove('overflow-hidden');
		}
	});
</script>

<section id="gallery" class="container pb-25">
	<h4
		class="main-title bg-gradient-to-b from-teal-500 via-orange-500 to-indigo-500 bg-clip-text text-transparent"
	>
		{$t('section.gallery.title')}
	</h4>

	<div class="slider-wrapper">
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div
			class="slide-container grid max-h-[496px] grid-flow-col grid-rows-1 gap-2.5 max-lg:max-h-[396px]"
			bind:this={sliderContainer}
			onwheel={handleWheel}
			onmousedown={handleMouseDown}
			ontouchstart={handleTouchStart}
			ontouchmove={handleTouchMove}
			ontouchend={handleTouchEnd}
		>
			{#each slideImages as slideGroup, groupIndex}
				<div class="slide grid grid-cols-2 grid-rows-2 gap-2.5">
					{#each slideGroup as { src, alt, className }, index}
						<!-- svelte-ignore a11y_click_events_have_key_events -->
						<picture
							class={className}
							onclick={() => openModal(groupIndex * slideGroup.length + index)}
						>
							<source srcset={`/slider-gallery/${src}.webp`} type="image/webp" />
							<img src={`/slider-gallery/${src}.jpg`} {alt} />
						</picture>
					{/each}
				</div>
			{/each}
		</div>
	</div>

	<dialog
		bind:this={modalGallery}
		onclose={() => (isShowModal = false)}
		onclick={(e) => e.target === modalGallery && modalGallery.close()}
		class="m-auto max-h-full max-w-full backdrop-opacity-90 backdrop:backdrop-blur-lg"
		onwheel={handleWheel}
		ontouchstart={handleModalTouchStart}
		ontouchmove={handleModalTouchMove}
		ontouchend={handleModalTouchEnd}
	>
		<div class="relative text-white">
			<button
				type="button"
				class="absolute top-2.5 right-2.5 cursor-pointer px-2 text-3xl"
				onclick={() => modalGallery?.close()}
				title={$t('nav.close')}
				aria-label={$t('nav.close')}
			>
				×
			</button>

			<button
				type="button"
				class="chevron left absolute top-1/2 left-5 cursor-pointer p-2"
				aria-label={$t('prev')}
				title={$t('prev')}
				onclick={prevImage}
			></button>

			<img
				src={`/slider-gallery/${allImages[currentImageIndex].src}.jpg`}
				alt={allImages[currentImageIndex].alt}
				class="max-h-[90dvh] max-w-[90dvw]"
			/>

			<button
				type="button"
				class="chevron right absolute top-1/2 right-5 cursor-pointer p-2"
				aria-label={$t('next')}
				title={$t('next')}
				onclick={nextImage}
			></button>
		</div>
	</dialog>
</section>

<style lang="postcss">
	picture {
		> img {
			width: 100%;
			height: 100%;
		}
	}

	.slider-wrapper {
		cursor: grab;

		.slide-container {
			overflow-x: scroll;
			overflow-y: hidden;
			scrollbar-width: none;

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

	.chevron {
		width: 10px;
		height: 10px;
		border-width: 0 3px 3px 0;
		padding: 8px;

		&.right {
			transform: rotate(-45deg);
		}

		&.left {
			transform: rotate(135deg);
		}
	}

	:global(body.overflow-hidden) {
		overflow: hidden;
		touch-action: none;
	}
</style>
