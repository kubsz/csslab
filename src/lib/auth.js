import axios from 'axios';
import lodash from 'lodash';
const { pick } = lodash;

export const getUserData = async (jwt) => {
	const response = await axios.get(`${import.meta.env.VITE_PUBLIC_API_URL}/api/users/me`, {
		headers: {
			Authorization: `Bearer ${jwt}`
		}
	});

	return pick(response.data, ['username', 'email', 'confirmed', 'createdAt', 'slug', 'image']);
};
