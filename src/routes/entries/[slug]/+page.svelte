<script lang="ts">

    	let { data } = $props();
        // svelte-ignore state_referenced_locally
        console.log(data);
</script>

{JSON.stringify(data, null, 2)}