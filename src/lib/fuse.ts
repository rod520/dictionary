import Fuse from 'fuse.js'

import {entries} from '$lib/import'

const options: Fuse.IFuseOptions<typeof entries[0]> = { keys: ['keywords', 'konkani_word'] }


// take each keyword and make an object with one keyword a path and an entry word  
export const searchEntries = entries.map((entry) => {
    
        return { keyword: entry.keywords, path: entry.path, konkani_word: entry.konkani_word, part_of_speech: entry.part_of_speech }
    
})

export const fuse = new Fuse(searchEntries, options)