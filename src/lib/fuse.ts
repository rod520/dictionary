import Fuse from 'fuse.js'

import {entries} from '$lib/import'

const options: Fuse.IFuseOptions<typeof entries[0]> = { keys: 'keywords' }


// take each keyword and make an object with one keyword a path and an entry word  
export const searchEntries = entries.map((entry) => {
    return entry.keywords.map((keyword) => {
        return { keyword: keyword, path: entry.path, konkani_word: entry.konkani_word }
    })
}).flat()

