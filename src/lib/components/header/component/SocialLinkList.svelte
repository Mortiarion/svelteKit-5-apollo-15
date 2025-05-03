<!-- <script lang="ts">
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
</ul> -->

<div class="flex flex-col gap-5 items-end">
	<a href="tel:+380123456789" class="social-button">
		<span><i class="fas fa-phone"></i> Телефон</span>
	</a>
	<a href="https://t.me/yourusername" target="_blank" class="social-button">
		<span><i class="fab fa-telegram-plane"></i> Telegram</span>
	</a>
	<a href="viber://chat?number=+380123456789" class="social-button">
		<span><i class="fab fa-viber"></i> Viber</span>
	</a>
	<a href="https://www.instagram.com/yourusername" target="_blank" class="social-button">
		<span><i class="fab fa-instagram"></i> Instagram</span>
	</a>
	<a href="https://www.tiktok.com/@yourusername" target="_blank" class="social-button">
		<span><i class="fab fa-tiktok"></i> TikTok</span>
	</a>
</div>

<style lang="postcss">
	.social-button {
		position: relative;
		width: 200px;
		height: 50px;
		line-height: 48px;
		background: #000;
		text-transform: uppercase;
		font-size: 18px;
		text-align: center;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: 0.5s;
		-webkit-box-reflect: below 1px linear-gradient(transparent, #0004);
	}

	.social-button span {
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: center;
		top: 1px;
		left: 1px;
		right: 1px;
		bottom: 1px;
		text-align: center;
		background: #0c0c0c;
		color: rgba(255, 255, 255, 0.2);
		transition: 0.5s;
	}

	.social-button:hover span {
		color: rgba(255, 255, 255, 1);
	}

	.social-button span::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 50%;
		background: rgba(255, 255, 255, 0.1);
		z-index: 10;
	}

	.social-button::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(
			45deg,
			#c0392b,
			#f39c12,
			#f1c40f,
			#2ecc71,
			#3498db,
			#2980b9,
			#9b59b6,
			#8e44ad,
			#c0392b,
			#f39c12,
			#f1c40f,
			#2ecc71,
			#3498db,
			#2980b9,
			#9b59b6,
			#8e44ad
		);
		background-size: 400%;
		opacity: 0;
		transition: 2.5s;
		animation: eff 20s linear infinite;
	}

	.social-button:hover::before,
	.social-button:hover::after {
		opacity: 1;
	}

	.social-button::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(
			45deg,
			#c0392b,
			#f39c12,
			#f1c40f,
			#2ecc71,
			#3498db,
			#2980b9,
			#9b59b6,
			#8e44ad,
			#c0392b,
			#f39c12,
			#f1c40f,
			#2ecc71,
			#3498db,
			#2980b9,
			#9b59b6,
			#8e44ad
		);
		background-size: 400%;
		opacity: 0;
		filter: blur(20px);
		transition: 0.5s;
		animation: eff 20s ease infinite;
	}

	@keyframes eff {
		0% {
			background-position: 0 0;
		}
		50% {
			background-position: 400% 0;
		}
		100% {
			background-position: 0 0;
		}
	}

	.social-button i {
		margin-right: 8px;
		font-size: 20px;
	}

	/* Адаптивні стилі для мобільних пристроїв */
	@media (max-width: 640px) {
		.social-button {
			width: 160px;
			height: 40px;
			line-height: 38px;
			font-size: 14px;
		}

		.social-button i {
			font-size: 16px;
			margin-right: 6px;
		}
	}
</style>
