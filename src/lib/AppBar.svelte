<script lang="ts">
	/**
	- 💤 make header disapper on scroll down
	- 💤 make bar appear on scroll up
	*/
	import type { DrawerSettings } from '@skeletonlabs/skeleton';
	import { AppBar, LightSwitch } from '@skeletonlabs/skeleton';
	import {getDrawerStore} from '@skeletonlabs/skeleton';

	const drawerStore = getDrawerStore();
	function drawerOpen(): void {
		const s: DrawerSettings = { id: 'doc-sidenav' };
		drawerStore.open(s);
	}
</script>

<AppBar shadow="shadow-2xl" slotTrail="!space-x-2">
	<svelte:fragment slot="lead">
			<!-- Logo -->
			<a class="h1" href="/" title="home">
				haiz.dev
			</a>
	</svelte:fragment>

	<svelte:fragment slot="trail">
			<LightSwitch/>
			<!-- Hburger menu -->
			<button on:click={drawerOpen} class="btn-icon btn-icon-sm lg:!hidden">
				<i class="fa-solid fa-bars text-xl" />
			</button>
	</svelte:fragment>
</AppBar>
