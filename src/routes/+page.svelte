<script lang="ts">
	import content from "$lib/content.json";
</script>

<h1 class="text-5xl"> {content.quote} </h1>
<h4 class="text-xl"> {content.quote_expansion} </h4>
<a class="" href={"mailto:" + content.email_address + "?subject=" + content.subject}> {content.cta} </a>
<p class=""> {content.pricing}</p>
