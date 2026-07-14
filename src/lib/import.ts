export const entriesImport
 = import.meta.glob
('/entries/**/*.json', { eager: true, import: 'default' })
 const entriesArray = Object.values(entriesImport)
 const entriesPath = Object.keys(entriesImport)

export const entries = Object.values(entriesArray).map((entry, index) => { 
entry.path = entriesPath[index]
    return entry
}) as Entry[]
type Entry = {
    konkani_word: string;
    meaning: string[];
    part_of_speech: string;
    spellings: string[];
    forms: { label: string; form_value: string }[];
    examples: { konkani_sentence: string; english_sentence: string }[];
    categories: string[];
    status: string;
    note: string;
    path: string;
};