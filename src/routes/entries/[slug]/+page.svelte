<script lang="ts">
    import type { PageServerLoad } from './$types'; 

    	let { data } = $props();
        // svelte-ignore state_referenced_locally
        console.log(data);
</script>

{JSON.stringify(data, null, 2)}