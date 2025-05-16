<script lang="ts">
	import { t } from '$lib/i18n';

    let { isShownModalGallery = $bindable(), currentImageIndex, allImages }: Props = $props();

    interface Props {
        isShownModalGallery: boolean;
        currentImageIndex: number;
        allImages: { src: string; alt: string }[];
    };

    let modalGallery: HTMLDialogElement;

	function nextImage() {
        const totalImages = allImages.length;
        currentImageIndex = (currentImageIndex + 1) % totalImages;
    }

    function prevImage() {
        const totalImages = allImages.length;
        currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
    }

    function handleWheel(event: WheelEvent) {
        if (isShownModalGallery) {
            event.preventDefault();
            if (event.deltaY > 0) nextImage();
            else prevImage();
        }
    }

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

	$effect(() => {
		if (isShownModalGallery && modalGallery) {
			modalGallery.showModal();
			document.body.classList.add('overflow-hidden');
		} else {
            modalGallery?.close();
			document.body.classList.remove('overflow-hidden');
		}
	});
</script>

<dialog
    bind:this={modalGallery}
    onclose={() => (isShownModalGallery = false)}
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
            &times;
        </button>

        <button
            type="button"
            class="chevron left absolute top-1/2 left-5 cursor-pointer p-2 z-10"
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
            class="chevron right absolute top-1/2 right-5 cursor-pointer p-2 z-10"
            aria-label={$t('next')}
            title={$t('next')}
            onclick={nextImage}
        ></button>
    </div>
</dialog>

<style lang='postcss'>
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
