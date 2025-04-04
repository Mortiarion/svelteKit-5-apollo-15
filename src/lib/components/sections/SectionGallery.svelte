<script lang="ts">
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

	function handleWheel(event: WheelEvent) {
		if (sliderContainer) {
			event.preventDefault();
			sliderContainer.scrollLeft += event.deltaY;
		}
	}

	function handleMouseDown(event: MouseEvent) {
		if (event.button !== 0 || !sliderContainer) return;
		event.preventDefault();
		isDragging = true;
		startClientX = event.clientX;
		initialScrollLeft = sliderContainer.scrollLeft;

		const handleMouseMove = (moveEvent: MouseEvent) => {
			if (!isDragging) return;
			const delta = moveEvent.clientX - startClientX;
			sliderContainer.scrollLeft = initialScrollLeft - delta;
		};

		const handleMouseUp = () => {
			isDragging = false;
			document.removeEventListener('mousemove', handleMouseMove);
			document.removeEventListener('mouseup', handleMouseUp);
		};

		document.addEventListener('mousemove', handleMouseMove, { passive: true });
		document.addEventListener('mouseup', handleMouseUp, { once: true });
	}
</script>

<section class="container pb-25">
	<h4
		class="main-title bg-gradient-to-b from-teal-500 via-orange-500 to-indigo-500 bg-clip-text text-transparent"
	>
		Фотогалерея
	</h4>

	<div class="slider-wrapper">
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div
			class="slide-container grid max-h-[496px] grid-flow-col grid-rows-1 gap-2.5 max-lg:max-h-[396px]"
			bind:this={sliderContainer}
			onwheel={handleWheel}
			onmousedown={handleMouseDown}
		>
			{#each slideImages as slideGroup}
				<div class="slide grid grid-cols-2 grid-rows-2 gap-2.5">
					{#each slideGroup as { src, alt, className }}
						<picture class={className}>
							<source srcset={`/slider-gallery/${src}.webp`} type="image/webp" />

							<img src={`/slider-gallery/${src}.jpg`} {alt} />
						</picture>
					{/each}
				</div>
			{/each}
		</div>
	</div>
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
</style>
