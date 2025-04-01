<script lang="ts">
    type TSlideImg = {
        src: string;
        alt: string;
        className?: string;
    }

    type TSlideGroup = {
        slides: TSlideImg[];
    }
    
	const slideImages: TSlideGroup[] = [
		{
			slides: [
				{ src: 'galery_one', alt: 'Gallery 1' },
				{ src: 'galery_two', alt: 'Gallery 2' },
				{ src: 'galery_three', alt: 'Gallery 3', className: 'col-span-2' }
			]
		},

		{
			slides: [
				{ src: 'galery_five', alt: 'Gallery 4', className: 'row-span-2' },
				{ src: 'galery_four', alt: 'Gallery 5' },
				{ src: 'galery_six', alt: 'Gallery 6', className: 'col-start-2' }
			]
		},
        {
			slides: [
				{ src: 'galery_one', alt: 'Gallery 1' },
				{ src: 'galery_two', alt: 'Gallery 2' },
				{ src: 'galery_three', alt: 'Gallery 3', className: 'col-span-2' }
			]
		},
	];
</script>

<section class="container py-48">
	<h3>Фотогалерея</h3>

	<div class="slider-wrapper">
		<div class="slide-container grid grid-flow-col grid-rows-1 gap-2.5">
			{#each slideImages as slideGroup}
				<div class="slide grid grid-cols-2 grid-rows-2 gap-2.5">
					{#each slideGroup.slides as { src, alt, className }}
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
	.slide-container {
		max-height: 496px;
		overflow-x: auto;

		> .slide:nth-child(2) {
			width: 798px;
		}

		> .slide {
			width: 496px;
		}
	}
</style>
