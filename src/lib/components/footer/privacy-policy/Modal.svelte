<script>
	let { showModal = $bindable(), header, children } = $props();

	let dialog = $state();

	$effect(() => {
		if (showModal) {
			dialog.showModal();
			document.body.classList.add('overflow-hidden');
		} else {
			dialog.close();
			document.body.classList.remove('overflow-hidden');
		}
	});
</script>

<dialog
	class="bg-modal scrollbar-width relative m-auto overflow-hidden bg-transparent text-white"
	bind:this={dialog}
	onclose={() => (showModal = false)}
	onclick={(e) => {
		if (e.target === dialog) dialog.close();
	}}
>
	{@render header?.()}
	<!-- svelte-ignore a11y_autofocus -->
	<button class="cursor-pointer px-3 py-1 text-4xl" autofocus onclick={() => dialog.close()}>
		&times
	</button>

	<div
		class="scrollbar-width flex max-h-[500px] max-w-[900px] flex-col gap-10 overflow-y-scroll px-10 py-5 text-center max-md:px-5"
	>
		{@render children?.()}
	</div>
</dialog>

<style lang="postcss">
	dialog {
		&[open] {
			animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
		}

		&[open]::backdrop {
			animation: fade 0.2s ease-out;
		}
	}

	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}

	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
