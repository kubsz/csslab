import axios from 'axios';

export const get = async ({ req, res }) => {
	const response = await axios.get(`${import.meta.env.VITE_PUBLIC_API_URL}/api/components?populate=*`);

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
