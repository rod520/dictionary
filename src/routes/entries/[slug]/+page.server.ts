import type { EntryGenerator } from './$types';
import { entries as dictEntries} from '$lib/import';
export const entries: EntryGenerator = () => {
	return dictEntries.map((entry) => {
        const slug = entry.path.split('/').pop()?.replace('.json', '');
        return { slug: slug ?? '' };
    });
};

export const prerender = "auto";


import { error, json } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const post = dictEntries.find((entry) => entry.path === `/entries/${params.slug}`);

	if (post) {
		return post;
	}

	error(404, 'Not hree' + 'words:' + JSON.stringify(dictEntries.map((entry) => entry.path)));

};

