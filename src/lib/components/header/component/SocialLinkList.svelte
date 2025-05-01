<script lang="ts">
	import InstagramIcon from '$lib/icons/InstagramIcon.svelte';
	import TelegramIcon from '$lib/icons/TelegramIcon.svelte';
	import TellIcon from '$lib/icons/TellIcon.svelte';
	import TikTokIcon from '$lib/icons/TikTokIcon.svelte';
	import ViberIcon from '$lib/icons/ViberIcon.svelte';

	const socialLinks = [
		{
			href: 'tel:+380936551515',
			Icon: TellIcon,
			ariaLabel: 'Зателефонувати',
			title: 'Зателефонувати'
		},
		{
			href: 'https://t.me/Apollo15Odessa',
			Icon: TelegramIcon,
			ariaLabel: 'Telegram',
			title: 'Telegram'
		},
		{
			href: 'viber://chat?number=%2B380936551515',
			Icon: ViberIcon,
			ariaLabel: 'Viber',
			title: 'Viber'
		},
		{
			href: 'https://www.instagram.com/apollo_15.bar/profilecard/?igsh=MXhuc3U1MnZieWEyeQ==',
			Icon: InstagramIcon,
			ariaLabel: 'Instagram',
			title: 'Instagram'
		},
		{
			href: 'https://www.tiktok.com/@apollo15bar',
			Icon: TikTokIcon,
			ariaLabel: 'TikTok',
			title: 'TikTok'
		}
	];

	let { className = '' } = $props();
</script>

<ul class="flex gap-4 {className}">
	{#each socialLinks as { href, Icon, ariaLabel, title }}
		<li>
			<a {href} {title} aria-label={ariaLabel} class="transition-opacity hover:opacity-80">
				<Icon />
			</a>
		</li>
	{/each}
</ul>
