export const strapiImage = (image = {}) => {
	let [url, path] = ['http://localhost:1337', null];

	if (!image.formats) {
		path = image.url;
	}

	return `${url}${path}`;
};
