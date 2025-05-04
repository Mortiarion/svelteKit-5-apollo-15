<script lang="ts">
	import { t } from '$lib/i18n';
	import InstagramIcon from '$lib/icons/InstagramIcon.svelte';
	import PhoneIcon from '$lib/icons/PhoneIcon.svelte';
	import TelegramIcon from '$lib/icons/TelegramIcon.svelte';
	import TikTokIcon from '$lib/icons/TikTokIcon.svelte';
	import ViberIcon from '$lib/icons/ViberIcon.svelte';

	type SvelteComponent = new (...args: any[]) => any;

	interface ISocialLink {
		href: string;
		icon: SvelteComponent;
		label: string;
		target?: string;
	}

	const socialLinks: ISocialLink[] = $derived([
		{ href: 'tel:+380936551515', icon: PhoneIcon, label: $t('social.telephone') },
		{
			href: 'https://t.me/Apollo15Odessa',
			icon: TelegramIcon,
			label: $t('social.telegram'),
			target: '_blank'
		},
		{
			href: 'viber://chat?number=%2B380936551515',
			icon: ViberIcon,
			label: $t('social.viber')
		},
		{
			href: 'https://www.instagram.com/apollo_15.bar/profilecard/?igsh=MXhuc3U1MnZieWEyeQ==',
			icon: InstagramIcon,
			label: $t('social.instagram'),
			target: '_blank'
		},
		{
			href: 'https://www.tiktok.com/@apollo15bar',
			icon: TikTokIcon,
			label: $t('social.tik-tok'),
			target: '_blank'
		}
	]);
</script>

<div class="flex flex-col items-end justify-center gap-10">
	{#each socialLinks as { href, icon: Icon, label, target } (href)}
		<a {href} {target} class="social-button" aria-label={label} title={label}>
			<span>
				<i>
					<Icon />
				</i>

				{label}
			</span>
		</a>
	{/each}
</div>
