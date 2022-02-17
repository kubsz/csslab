import * as fs from 'fs';
import { dirname } from 'path';

export const post = async ({ request }) => {
	let { path } = await request.json();
	console.log(process.cwd());
	if (!path) return { body: 'unable to find' };

	const file = await fs.readFileSync(`${process.cwd()}/src/components${path}`, 'utf8');

	return {
		body: {
			file
		}
	};
};
