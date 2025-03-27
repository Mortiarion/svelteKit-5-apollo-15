<script lang="ts">
	import { t } from "$lib/i18n";
	import Navigation from "./component/Navigation.svelte";
    
    
</script>

<header>
    <div class="container relative">
        <Navigation />
        <p>
            {$t('hello')}
        </p>
    </div>
</header>