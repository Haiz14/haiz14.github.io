<script lang="ts">
	/**
	- Add aigh good morning <name>, a nice day ain't it?
	- make greetings changeable
	- add CTO
	- add things to gain
	- add show off
	*/
	const persons: Array<string> = [
	"Artsy", "ballsy", "natalie", "makenley",
	"amory", "nory", "disckens", "arnoldd,",
	"andy", "nelosn", "raj", "amy",
	"buck", "nirris", "nand", "antsy"
	]
</script>
{#each persons as person}
	<h2 class="h2"> name: {person} </h2>
{/each}

{#each persons as person}
	<h2 class="h2"> name: {person} </h2>
{/each}

