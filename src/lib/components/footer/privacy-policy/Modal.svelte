<script>
	let { showModal = $bindable(), header, children } = $props();

	let dialog = $state();

	$effect(() => {
		if (showModal) dialog.showModal();
		document.body.classList.toggle('overflow-hidden');
	});
</script>

<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_noninteractive_element_interactions -->
<dialog
class=" m-auto text-white bg-transparent bg-modal scrollbar-width"
	bind:this={dialog}
	onclose={() => (showModal = false)}
	onclick={(e) => {
		if (e.target === dialog) dialog.close();
	}}
>
	<div class="flex flex-col gap-10 py-5 px-10">
		{@render header?.()}

		{@render children?.()}
		<!-- svelte-ignore a11y_autofocus -->
		<button class="text-4xl px-3 py-1 cursor-pointer" autofocus onclick={() => dialog.close()}>&times</button>
	</div>
</dialog>

<style lang="postcss">
	dialog {
		/* &::backdrop {
			background: rgba(0, 0, 0, 0.3);
		} */

		> div {
			padding: 20px 40px;
		}

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
