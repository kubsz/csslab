import axios from 'axios';

export const get = async ({ req, res }) => {
	const response = await axios.get('http://localhost:1337/api/tags?populate=*');

	if (response.status !== 200) {
		return {
			body: {
				status: 'error',
				error: true
			}
		};
	}

	return {
		body: {
			status: 'success',
			data: response.data
		}
	};
};
