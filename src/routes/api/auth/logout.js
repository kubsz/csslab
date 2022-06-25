import cookie from 'cookie';
import axios from 'axios';

export const get = async () => {
	return {
		status: 204,
		headers: {
			'set-cookie': cookie.serialize('token', 'dasd', {
				httpOnly: true,
				path: '/',
				maxAge: 0
			})
		},
		body: {
			status: 204,
			data: 'Successfully logged out.'
		}
	};
};
