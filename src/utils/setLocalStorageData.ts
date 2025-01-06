import { INode } from '@/models';

export const setLocalStorageData = (key: string, value: INode) => {
	localStorage.setItem(key, JSON.stringify(value));
};
