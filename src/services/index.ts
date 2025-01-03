export const getLocalStorageData = (key: string): any => {
	const data = localStorage.getItem(key);
	return data ? JSON.parse(data) : null;
};

export const setLocalStorageData = (key: string, value: any) => {
	localStorage.setItem(key, JSON.stringify(value));
};
