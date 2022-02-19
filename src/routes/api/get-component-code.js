// import * as fs from 'fs';
// import axios from 'axios';
import fs from 'fs';
import path from 'path';

import { page } from '$app/stores';

export const post = async ({ request }) => {
	let { path: dirPath, technology } = await request.json();
	if (!dirPath) return { body: 'unable to find' };

	const wholePath = `${dirPath}`;

	const dirRelativeToPublicFolder = 'CSSLAB_FILES';

	const dir = path.resolve('static', dirRelativeToPublicFolder);

	console.log(dir);

	const filenames = fs.readdirSync(dir);

	// const images = filenames.map((name) => path.join('/', dirRelativeToPublicFolder, name));

	// res.statusCode = 200;
	// res.json(images);

	// let fileNames = [];

	// const dir1 = await fs.readdirSync(`${__dirname}/`);

	// const dir = path.resolve('./static/CSSLAB_FILES);

	// try {
	// 	fileNames = await fs.readdirSync(wholePath).sort((a, b) => {
	// 		return (a.split('.')[0] === 'index') - (b.split('.')[0] === 'index');
	// 	});
	// } catch (err) {
	// 	console.log(err);
	// }

	// const filePromises = fileNames.map(async (file) => {
	// 	const splitByDot = file.split('.');
	// 	const extension = splitByDot[splitByDot.length - 1];

	// 	return {
	// 		name: file,
	// 		code: await fs.readFileSync(wholePath + file, 'utf8'),
	// 		extension
	// 	};
	// });
	// const files = await Promise.all(filePromises);

	return {
		body: {
			// files,
			data: {
				filenames
			}
		}
	};
};
