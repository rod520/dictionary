<script lang="ts">
	/* eslint-disable svelte/require-each-key */

	let { data } = $props();
	// svelte-ignore state_referenced_locally
	console.log(data);
</script>

{JSON.stringify(data, null, 2)}
<div class="word">{data.konkani_word}</div>
<div class="part-of-speech">{data.part_of_speech}</div>
<br />
<ul>
	{#each data.meaning as meaning}
		<li>{meaning}</li>
	{/each}
</ul>
<br />
<ul>
	{#each data.forms as form}
		<li>{form.label}: {form.value}</li>
	{/each}
</ul>
<ul>
    {#each data.examples as example}
        <li>
            {example.konkani_sentence} - {example.english_sentence}
        </li>
    {/each}
</ul>
<ul>
    {#each data.categories as category}
        <li>{category}</li>
    {/each}
</ul>