<script lang="ts">
	// highlight current link
	// Add close button
	import { page } from '$app/stores';

	import { navData} from './navLinks';
	import {getDrawerStore} from '@skeletonlabs/skeleton';

	// Local
	const drawerStore = getDrawerStore();

	function onClickAnchor(): void {
		drawerStore.close();
	}

	// Lifecycle
	// Reactive
</script>


<section class=" p-4 pb-20 space-y-4 ">
	<p class="mb-6 font-bold  text-2xl">Navigation</p>
	<nav class="list-nav">
		<ul>
		<!-- Nav Links -->
		{#each navData as {label, href, iconClass}}
			<li class="rounded-token">
				<a {href} class="flex-auto  " data-sveltekit-preload-data="hover" on:click={drawerStore.close} on:keypress>
					<i class={iconClass}/>
					<p>{label}</p>
				</a>
			</li>
		{/each}
		</ul>
	</nav>
</section>
