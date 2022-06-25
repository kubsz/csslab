import { parse } from 'cookie';
import { getUserData } from '$lib/auth.js';
import { slice } from 'lodash';

export async function handle({ event, resolve }) {
	const { request } = event;

	const cookies = parse(request.headers.get('cookie') || '');

	if (cookies.token) {
		const userData = await getUserData(cookies.token);
		if (userData) {
			event.locals.user = userData;
			return await resolve(event);
		}
	}

	event.locals.user = null;
	return await resolve(event);
}

export function getSession(event) {
	return { user: event?.locals?.user || null };
}
