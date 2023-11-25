<script lang="ts">
	import { getDrawerStore, Drawer } from '@skeletonlabs/skeleton';
	import NavMenu from './NavMenu.svelte';

	const drawerStore = getDrawerStore();

	$: classesDrawer = $drawerStore.id === 'doc-sidenav' ? 'lg:hidden' : '';
</script>

<Drawer class={classesDrawer}>
	{#if $drawerStore.id === 'doc-sidenav'}
		<!-- Doc Sidebar -->
		<NavMenu />
	{/if}
</Drawer>
