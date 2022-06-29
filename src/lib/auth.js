import axios from 'axios';
import lodash from 'lodash';
const { pick } = lodash;

export const getUserData = async (jwt) => {
	const response = await axios.get('http://localhost:1337/api/users/me', {
		headers: {
			Authorization: `Bearer ${jwt}`
		}
	});

	return pick(response.data, ['username', 'email', 'confirmed', 'createdAt', 'slug', 'image']);
};
