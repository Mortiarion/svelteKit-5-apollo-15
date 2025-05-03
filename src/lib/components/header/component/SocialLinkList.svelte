<script lang="ts">
	interface SocialLink {
		href: string;
		icon: string;
		label: string;
		target?: string;
	}

	const socialLinks: SocialLink[] = [
		{ href: 'tel:+380936551515', icon: 'fas fa-phone', label: 'Телефон' },
		{
			href: 'https://t.me/Apollo15Odessa',
			icon: 'fab fa-telegram-plane',
			label: 'Telegram',
			target: '_blank'
		},
		{ href: 'viber://chat?number=%2B380936551515', icon: 'fab fa-viber', label: 'Viber' },
		{
			href: 'https://www.instagram.com/apollo_15.bar/profilecard/?igsh=MXhuc3U1MnZieWEyeQ==',
			icon: 'fab fa-instagram',
			label: 'Instagram',
			target: '_blank'
		},
		{
			href: 'https://www.tiktok.com/@apollo15bar',
			icon: 'fab fa-tiktok',
			label: 'TikTok',
			target: '_blank'
		}
	];
</script>

<div class="flex flex-col items-end justify-center gap-10">
	{#each socialLinks as { href, icon, label, target }}
		<a {href} {target} class="social-button">
			<span>
				<i class={icon}></i>
				{label}
			</span>
		</a>
	{/each}
</div>
