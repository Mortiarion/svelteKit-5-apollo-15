<script lang="ts">
	import InstagramIcon from '$lib/icons/InstagramIcon.svelte';
	import TelegramIcon from '$lib/icons/TelegramIcon.svelte';
	import TellIcon from '$lib/icons/TellIcon.svelte';
	import TikTokIcon from '$lib/icons/TikTokIcon.svelte';
	import ViberIcon from '$lib/icons/ViberIcon.svelte';

	let { className = '' } = $props();
</script>

<ul class={className}>
	<li>
		<a href="tel:+380936551515">
			<TellIcon />
		</a>
	</li>
	<li>
		<a href="https://t.me/Apollo15Odessa">
			<TelegramIcon />
		</a>
	</li>
	<li>
		<a href="viber://chat?number=%2B380936551515">
			<ViberIcon />
		</a>
	</li>
	<li>
		<a href="https://www.instagram.com/apollo_15.bar/profilecard/?igsh=MXhuc3U1MnZieWEyeQ==">
			<InstagramIcon />
		</a>
	</li>
	<li>
		<a href="/">
			<TikTokIcon />
		</a>
	</li>
</ul>
