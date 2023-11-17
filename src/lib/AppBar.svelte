<script lang="ts">
	import type { DrawerSettings } from '@skeletonlabs/skeleton';
	import { AppBar, LightSwitch, popup, getModalStore } from '@skeletonlabs/skeleton';
	import {getDrawerStore} from '@skeletonlabs/skeleton';

	const drawerStore = getDrawerStore();
	function drawerOpen(): void {
		const s: DrawerSettings = { id: 'doc-sidenav' };
		drawerStore.open(s);
	}
</script>

<AppBar shadow="shadow-2xl" slotTrail="!space-x-2">
			<button on:click={drawerOpen} class="btn-icon btn-icon-sm lg:!hidden">
				<i class="fa-solid fa-bars text-xl" />
			</button>
</AppBar>
