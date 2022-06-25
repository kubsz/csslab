import cookie from 'cookie';
import axios from 'axios';

export const post = async ({ request }) => {
	const data = await request.json();

	const { username, email, password } = data;

	if (!username || !email || !password) {
		throw Error('Request must contain "identiifer", "password", and "email" field.');
	}

	console.log(username, email, password);

	const endpoint = 'http://localhost:1337/api/auth/local/register';

	const response = await axios.post(endpoint, { username, email, password });

	return {
		headers: {
			'set-cookie': cookie.serialize('token', response.data.jwt, {
				httpOnly: true,
				maxAge: 60 * 60 * 24 * 7,
				path: '/'
			})
		},
		body: response.data
	};
};
