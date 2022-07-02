import axios from 'axios';
import qs from 'qs';

export const get = async (req, res) => {
	const { slug } = req.params;

	const query = qs.stringify(
		{
			filters: {
				slug: { $eq: slug }
			},
			populate: '*'
		},
		{ encodeValuesOnly: true }
	);

	const response = await axios.get(`${import.meta.env.VITE_PUBLIC_API_URL}/api/components?${query}`);

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
			data: response.data[0]
		}
	};
};
