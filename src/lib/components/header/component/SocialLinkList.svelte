<script lang="ts">
	import InstagramIcon from '$lib/icons/InstagramIcon.svelte';
	import TelegramIcon from '$lib/icons/TelegramIcon.svelte';
	import TellIcon from '$lib/icons/TellIcon.svelte';
	import TikTokIcon from '$lib/icons/TikTokIcon.svelte';
	import ViberIcon from '$lib/icons/ViberIcon.svelte';
</script>

<ul class="flex flex-col items-end gap-5">
	<li>
		<a href="/">
			<TellIcon />
		</a>
	</li>
	<li>
		<a href="/">
			<TelegramIcon />
		</a>
	</li>
	<li>
		<a href="/">
			<ViberIcon />
		</a>
	</li>
	<li>
		<a href="/">
			<InstagramIcon />
		</a>
	</li>
	<li>
		<a href="/">
			<TikTokIcon />
		</a>
	</li>
</ul>
