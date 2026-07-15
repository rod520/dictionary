<script lang="ts">
/* eslint-disable svelte/require-each-key */

    import { entries } from '$lib/import';
    console.log(entries);
    import { searchEntries } from '$lib/fuse'
	import Search from '$lib/cmpnts/Search.svelte';
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
<Search />
<!--
    {#each searchEntries as e, i }
    <br/>
    {i}
        {JSON.stringify(e, null, 2)}
    {/each}
-->


{#each entries as e, i }
<br/>
{i}
    {JSON.stringify(e, null, 2)}
{/each}