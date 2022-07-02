import axios from 'axios';
import qs from 'qs';

export const get = async ({ req, res }) => {
	const query = qs.stringify({ populate: '*' }, { encodeValuesOnly: true });
	const response = await axios.get(`${import.meta.env.VITE_PUBLIC_API_URL}/api/categories?${query}`);

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
