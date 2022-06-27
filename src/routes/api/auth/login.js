import cookie from 'cookie';
import axios from 'axios';

export const post = async ({ request }) => {
	const data = await request.json();

	const { identifier, password } = data;

	console.log(identifier, password);

	if (!identifier || !password) {
		return {
			status: 400,
			body: {
				status: 'error',
				message: 'Body must contain identifier and password.'
			}
		};
	}
	try {
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
			body: {
				status: 'success',
				data: response.data
			}
		};
	} catch (error) {
		return {
			status: 400,
			body: {
				status: 'error',
				message: error.response.data.error.message
			}
		};
	}
};
