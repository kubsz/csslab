import * as fs from 'fs';

export const post = async ({ request }) => {
	let { path, technology } = await request.json();
	if (!path) return { body: 'unable to find' };

	const wholePath = `${process.cwd()}/static/csslab/${path}`;

	let fileNames = [];

	try {
		fileNames = await fs.readdirSync(wholePath).sort((a, b) => {
			return (a.split('.')[0] === 'index') - (b.split('.')[0] === 'index');
		});
	} catch (err) {
		console.log(err);
	}

	const filePromises = fileNames.map(async (file) => {
		const splitByDot = file.split('.');
		const extension = splitByDot[splitByDot.length - 1];

		return {
			name: file,
			code: await fs.readFileSync(wholePath + file, 'utf8'),
			extension
		};
	});
	``;
	const files = await Promise.all(filePromises);

	return {
		body: {
			files
		}
	};
};
