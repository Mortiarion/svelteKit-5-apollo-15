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
	let isDown = $state(false);
	let startX: number;
	let scrollLeft: number;

	function handleWheel(event: WheelEvent) {
		if (sliderContainer) {
			event.preventDefault();
			sliderContainer.scrollLeft += event.deltaY;
		}
	}

	function handleMouseDown(event: MouseEvent) {
		if (event.button !== 0 || !sliderContainer) return;
		event.preventDefault();
		isDown = true;
		startX = event.clientX;
		scrollLeft = sliderContainer.scrollLeft;

		const handleMouseMove = (moveEvent: MouseEvent) => {
			if (!isDown) return;
			const delta = moveEvent.clientX - startX;
			sliderContainer.scrollLeft = scrollLeft - delta;
		};

		const handleMouseUp = () => {
			isDown = false;
			document.removeEventListener('mousemove', handleMouseMove);
			document.removeEventListener('mouseup', handleMouseUp);
		};

		document.addEventListener('mousemove', handleMouseMove);
		document.addEventListener('mouseup', handleMouseUp);
	}
</script>

<section class="container py-48">
	<h3
		class="mb-16 bg-gradient-to-b from-teal-500 via-orange-500 to-indigo-500 bg-clip-text text-center text-5xl text-transparent"
	>
		Фотогалерея
	</h3>

	<div class="slider-wrapper">
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div
			class="slide-container grid grid-flow-col grid-rows-1 gap-2.5"
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
			max-height: 496px;
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
