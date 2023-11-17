<script lang="ts">
	/**
	add foooter component
	add side bar compinent
	*/
	// css
	import '../app.postcss';
	import '@fortawesome/fontawesome-free/css/fontawesome.css';
	import '@fortawesome/fontawesome-free/css/brands.css';
	import '@fortawesome/fontawesome-free/css/solid.css';

	import {AppShell} from '@skeletonlabs/skeleton'
	import AppBar from '$lib/AppBar.svelte'
	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup, initializeStores } from '@skeletonlabs/skeleton';

	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	initializeStores();
</script>
<AppShell>
	<svelte:fragment slot="pageHeader">
		<AppBar/>
	</svelte:fragment>
		<slot />
</AppShell>	
