export const validateEmail = (email) =>
	email.match(
		/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	);

export const objToCss = (obj, variables = false, suffix = '') => {
	let str = '';
	for (const [key, value] of Object.entries(obj)) {
		str += `${variables ? '--' : ''}${key}: ${value}${suffix};`;
	}
	return str;
};

export const pluralify = (num, prefix = '') => (num === 1 ? '' : prefix + 's');
