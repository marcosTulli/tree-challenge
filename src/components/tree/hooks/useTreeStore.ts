import { create } from 'zustand';

interface INode {
	id: string;
	title: string;
	children: INode[];
}

const initialState: INode = {
	id: 'root',
	title: 'Parent',
	children: [
		{
			id: 'jksdjksjd',
			title: 'TEST',
			children: [
				{ id: 'wakeup', title: 'wakeup', children: [] },
				{ id: 'jdjskd', title: 'september', children: [{ id: 'je', title: 'jeje', children: [] }] },
			],
		},
	],
};

interface ITreeStore {
	id: string;
	title: string;
	children: INode[];
	createNode: (node: INode, parent: INode) => void;
	removeNode: (id: string) => void;
}

const useTreeStore = create<ITreeStore>()((set) => ({
	...initialState,
	createNode: (node) => {
		set((state) => ({
			...state,
			children: [...state.children, node],
		}));
	},

	removeNode: (id) =>
		set((state) => ({
			...state,
			children: state.children.filter((child) => child.id !== id),
		})),
}));

export default useTreeStore;
