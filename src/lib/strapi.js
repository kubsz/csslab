export const strapiImage = (image, size = 'thumbnail') => {
	let [url, path] = [import.meta.env.VITE_PUBLIC_API_URL, null];

	if (!image) {
		return 'https://avatars.githubusercontent.com/u/19872173?s=280&v=4';
	}

	if (!image.formats) {
		path = image.url;
	} else {
		path = image.formats[size] ? image.formats[size].url : image.url;
	}

	return `${url}${path}`;
};

import { format, formatDistance, subDays } from 'date-fns';

export const strapiDate = (date, distance = false) => {
	if (distance) {
		return formatDistance(subDays(new Date(), 0), new Date(date));
	} else {
		return format(new Date(date), 'd LLLL, yyyy');
	}
};
