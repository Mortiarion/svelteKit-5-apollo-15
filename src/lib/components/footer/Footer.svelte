<script lang="ts">
	import { t } from '$lib/i18n';
	import Logo from '../header/component/Logo.svelte';

	let listPrivacyPolicy = $derived([
		{
			title: $t('footer.lis.policy.title.one'),
			description: $t('footer.lis.policy.description.one')
		},
		{
			title: $t('footer.lis.policy.title.two'),
			description: $t('footer.lis.policy.description.two')
		},
		{
			title: $t('footer.lis.policy.title.three'),
			description: $t('footer.lis.policy.description.three')
		},
		{
			title: $t('footer.lis.policy.title.four'),
			description: $t('footer.lis.policy.description.four')
		},
		{
			title: $t('footer.lis.policy.title.five'),
			description: $t('footer.lis.policy.description.five')
		},
		{
			title: $t('footer.lis.policy.title.six'),
			description: $t('footer.lis.policy.description.six')
		},
		{
			title: $t('footer.lis.policy.title.seven'),
			description: $t('footer.lis.policy.description.seven')
		}
	]);

	let dialog: HTMLDialogElement;
	let showModal = $state(false);

	$effect(() => {
		if (showModal) {
			dialog?.showModal();
			document.body.classList.add('overflow-hidden');
		} else {
			dialog?.close();
			document.body.classList.remove('overflow-hidden');
		}
	});
</script>

<footer class="container py-10">
	<div class="flex items-end justify-between max-md:flex-col max-md:items-center max-md:gap-1">
		<button
			type="button"
			class="cursor-pointer
			hover:underline active:underline max-md:hidden"
			onclick={() => (showModal = true)}
			aria-label={$t('footer.lis.policy.title')}
			title={$t('footer.lis.policy.title')}
		>
			{$t('footer.lis.policy.title')}
		</button>

		<dialog
			class="bg-modal scrollbar-width relative m-auto bg-transparent text-white"
			bind:this={dialog}
			onclose={() => (showModal = false)}
			onclick={(e) => {
				if (e.target === dialog) dialog.close();
			}}
		>
			<h1 class="text-center text-5xl max-md:text-3xl">
				{$t('footer.lis.policy.title')}
			</h1>
			<!-- svelte-ignore a11y_autofocus -->
			<button
				class="cursor-pointer px-3 py-1 text-4xl"
				aria-label={$t('close')}
				title={$t('close')}
				autofocus
				onclick={() => dialog.close()}
			>
				&times
			</button>

			<div
				class="scrollbar-width flex max-h-[500px] max-w-[900px] flex-col gap-10 overflow-y-scroll px-10 py-5 text-center max-md:px-5"
			>
				<p class="text-2xl max-md:text-lg">
					{$t('footer.lis.policy.subtitle')}
				</p>

				<ul class="flex flex-col gap-10">
					{#each listPrivacyPolicy as { title, description }}
						<li>
							<p class="text-3xl underline underline-offset-5 max-md:text-xl">
								{title}
							</p>

							<span class="text-2xl max-md:text-base">
								{description}
							</span>
						</li>
					{/each}
				</ul>
			</div>
		</dialog>

		<Logo className={'max-w-[146px]'} />

		<button
			type="button"
			class="hidden cursor-pointer hover:underline active:underline max-md:block"
			onclick={() => (showModal = true)}
			aria-label={$t('footer.lis.policy.title')}
			title={$t('footer.lis.policy.title')}
		>
			{$t('footer.lis.policy.title')}
		</button>

		<span>© 2025 UA. {$t('footer.all.ring.reserved')}</span>
	</div>
</footer>
