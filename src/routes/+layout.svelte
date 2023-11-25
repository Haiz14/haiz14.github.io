<script lang="ts">
	/**
	- add footer

	- make header component hide on scroll donw
	- make header component visible on scroll up
	*/
	// css
	import '../app.postcss';
	import '@fortawesome/fontawesome-free/css/fontawesome.css';
	import '@fortawesome/fontawesome-free/css/brands.css';
	import '@fortawesome/fontawesome-free/css/solid.css';

	import {AppShell} from '@skeletonlabs/skeleton'
	import AppBar from '$lib/AppBar.svelte'
	import Footer from '$lib/Footer.svelte';
	import NavDrawer from '$lib/NavDrawer.svelte';
	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup, initializeStores } from '@skeletonlabs/skeleton';

	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	initializeStores();
</script>

<NavDrawer/>
<AppShell>
	<svelte:fragment slot="header">
		<AppBar/>
	</svelte:fragment>
		<slot />
		<svelte:fragment slot="pageFooter">
			<Footer/>
		</svelte:fragment>
</AppShell>	
