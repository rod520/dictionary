<script>
    import { entries } from '$lib/import';
    console.log(entries);
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
{#each entries as e, i}
<br/>
{i}
    {JSON.stringify(e, null, 2)}
{/each}