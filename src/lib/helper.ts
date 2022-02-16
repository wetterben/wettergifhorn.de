import dayjs from 'dayjs/esm/index.js';

/**
 * Convert a date string safe to date object
 */
export const stringToDate = (string: string): Date => {
	const parts = string.split('-').map((part) => parseInt(part));

	return new Date(parts[0], parts[1] - 1, parts[2]);
};

/**
 * Fetch a URL and return the response
 */
export const get = async (endpoint: string, uri: string) => {
	const res = await fetch(endpoint + uri);
	return await res.json();
};

/**
 * Returns true if the date is on the current day
 */
export const isToday = (date: Date) => dayjs().isSame(date, 'day');