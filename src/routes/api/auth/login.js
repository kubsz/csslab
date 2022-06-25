import cookie from 'cookie';
import axios from 'axios';

export const post = async ({ request }) => {
	const data = await request.json();

	const { identifier, password } = data;

	console.log(data);

	if (!identifier || !password) {
		throw Error('Request must contain "identiifer" and "password" field.');
	}

	const endpoint = 'http://localhost:1337/api/auth/local';

	const response = await axios.post(endpoint, { identifier, password });

	return {
		status: 200,
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
