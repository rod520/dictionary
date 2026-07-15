export const entriesImport
 = import.meta.glob
('/entries/**/*.json', { eager: true, import: 'default' })
 const entriesArray = Object.values(entriesImport)
 const entriesPath = Object.keys(entriesImport)

export const entries = Object.values(entriesArray).map((entry, index) => { 
      entry.keywords = entry.keywords.map((keyword) => keyword.toLowerCase())

entry.path = entriesPath[index].replace('.json', '').replace(/^\/?entries\/(\w+)\/(\w+)$/, '/entries/$1-$2')
console.log('entry.path:', entry.path)
    return entry

})
    .filter((entry) => entry.status === 'published') as Entry[]
type Entry = {
    konkani_word: string;
    meaning: string[];
    part_of_speech: string;
    keywords: string[];
    forms: { label: string; form_value: string }[];
    examples: { konkani_sentence: string; english_sentence: string }[];
    categories: string[];
    status: string;
    note: string;
    path: string;
};