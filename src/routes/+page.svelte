<script lang="ts">
	import type {ConicStop} from '@skeletonlabs/skeleton';
	import {ConicGradient} from '@skeletonlabs/skeleton';
	/**
	- Add aigh good morning <name>, a nice day ain't it?
	- make greetings changeable
	- add CTO
	- add things to gain
	- add show off
	*/
	const noOfLoops: number = 9;
	const persons: Array<string> = [
	"Artsy", "ballsy", "natalie", "makenley",
	"amory", "nory", "disckens", "arnoldd,",
	"andy", "nelosn", "raj", "amy",
	"buck", "nirris", "nand", "antsy"
	]
// https://github.com/skeletonlabs/skeleton/blob/master/sites/skeleton.dev/src/routes/(inner)/elements/cards/+page.svelte
</script>
{#each persons as person}
	<p class="p mx-4 card"> name: {person} </p>
{/each}
<div class="snap-x  scroll-px-4 select-none snap-start snap-proximity scroll-smooth flex gap-4 overflow-x-auto px-4 py-5 bg-gradient-to-r from-primary-800 to-transparent">
	{#each Array(noOfLoops) as _}
		<div class="snap-y scroll-py-4 px-5 py5 p card p-8 my-8 mx-4 variant-glass-error" >
			{#each persons as person}
				<p class="mx-4 text-xl"> {person} </p>
			{/each}
		</div>

	{/each}
</div>

