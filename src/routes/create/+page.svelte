<script lang="ts">
	// this file helps create new entries for our dictionary.
    import {type Category, categories as allCategories} from '../../../schema/categories';
	let konkani_word = $state('');
	let meaning: string[] = $state(['']);
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const parts_of_speech = ['noun', 'verb', 'adjective', 'misc'] as const;
    let isNote = $state(false);
    let note = $state('');
	let part_of_speech: (typeof parts_of_speech)[number] = $state('noun'); // default value

	let addedKeywords: string[] = $state([]);
	let keywords: string[] = $derived.by(() => {
		const baseKeywords = [konkani_word, ...meaning];
		return [...baseKeywords, ...addedKeywords].filter((k) => k.trim() !== '');
	});
	let examples: { example: string; translation: string }[] = $state([
		{ example: '', translation: '' }
	]);
    let categories: Category[] = $state([]);

    let entry = $derived.by(() => {
        return {
            konkani_word,
            meaning,
            part_of_speech,
            keywords,
            examples,
            categories,
            note: isNote ? note : undefined
        };
    });
</script>

<input type="radio" bind:group={part_of_speech} value="noun" /> Noun
<input type="radio" bind:group={part_of_speech} value="verb" /> Verb
<input type="radio" bind:group={part_of_speech} value="adjective" /> Adjective
<input type="radio" bind:group={part_of_speech} value="misc" /> Misc

<input type="text" placeholder="Enter a new word" bind:value={konkani_word} />
<!-- the following keeps deselecting when you type. probably has something to do with reactivity. maybe just take out the whole thing and replace like how table is below?-->
{#each meaning as m, index (m)}
	<input type="text" placeholder="Enter the meaning" bind:value={meaning[index]} />

	<button onclick={() => meaning.splice(index, 1)}>Remove</button>
{/each}

<button onclick={() => meaning.push('')}>Add Meaning</button>
keywords:
<ul>
	<li>{konkani_word}</li>
	{#each meaning as m (m)}
		<li>{m}</li>
	{/each}
	{#each addedKeywords as keyword (keyword)}
		<li><input type="text" bind:value={addedKeywords[addedKeywords.indexOf(keyword)]} /></li>
	{/each}
</ul>

examples
<table>
	<tbody>
		<tr>
			<th>Example</th>
			<th>Translation</th>
		</tr>
		{#each examples as example, index (example)}
			<tr>
				<td
					><input
						type="text"
						placeholder="Enter the example"
						bind:value={examples[index].example}
					/></td
				>
				<td
					><input
						type="text"
						placeholder="Enter the translation"
						bind:value={examples[index].translation}
					/></td
				>
				<td><button onclick={() => examples.splice(index, 1)}>Remove</button></td>
			</tr>
		{/each}
            <tr>
        <td colspan="3"><button onclick={() => examples.push({ example: '', translation: '' })}>Add Example</button></td>
    </tr>
	</tbody>

</table>

{#each allCategories as category (category)}
    <label>
        <input
            type="checkbox"
            value={category}
            onchange={(e) => {
                if (e.target.checked) {
                    categories.push(category);
                } else {
                    categories = categories.filter((c) => c !== category);
                }
            }}
        />
        {category}
    </label>
{/each}
<input type="checkbox" bind:checked={isNote} /> note?
{#if isNote}
    <textarea bind:value={note} placeholder="Enter your note here"></textarea>
{/if}