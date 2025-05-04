<script lang="ts">
	import { t } from '$lib/i18n';

	interface ISocialLink {
		href: string;
		icon: string;
		label: string;
		target?: string;
	}

	const socialLinks: ISocialLink[] = $derived([
		{ href: 'tel:+380936551515', icon: 'fas fa-phone', label: $t('social.telephone') },
		{
			href: 'https://t.me/Apollo15Odessa',
			icon: 'fab fa-telegram-plane',
			label: $t('social.telegram'),
			target: '_blank'
		},
		{
			href: 'viber://chat?number=%2B380936551515',
			icon: 'fab fa-viber',
			label: $t('social.viber')
		},
		{
			href: 'https://www.instagram.com/apollo_15.bar/profilecard/?igsh=MXhuc3U1MnZieWEyeQ==',
			icon: 'fab fa-instagram',
			label: $t('social.instagram'),
			target: '_blank'
		},
		{
			href: 'https://www.tiktok.com/@apollo15bar',
			icon: 'fab fa-tiktok',
			label: $t('social.tik-tok'),
			target: '_blank'
		}
	]);
</script>

<div class="flex flex-col items-end justify-center gap-10">
	{#each socialLinks as { href, icon, label, target }}
		<a {href} {target} class="social-button" aria-label={label} title={label}>
			<span>
				<i class={icon}></i>
				{label}
			</span>
		</a>
	{/each}
</div>
