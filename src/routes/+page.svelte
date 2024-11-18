<script lang="ts">
	import content from "$lib/content.json";
</script>

<div class="my-20 mx-6 md:mx-[10%] lg:mx-[20%] space-y-10">
	<div class="space-y-6">
		<h1 class="text-5xl"> {content.quote} </h1>
		<h4 class="text-2xl leading-10"> {content.quote_expansion} </h4>
  </div>
	<div>
		<a class="bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 px-4 rounded" href={"mailto:" + content.email_address + "?subject=" + content.subject}> {content.cta} </a>
	</div>
	<!-- <p class=""> {content.pricing}</p> -->
</div>
