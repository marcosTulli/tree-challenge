import { addNode, removeNode } from '@/utils';
import { create } from 'zustand';
import { INode } from '@/models';

const initialState: INode = {
	id: 'root',
	title: 'Parent',
	children: [],
};

interface ITreeStore {
	rootNode: INode;
	createNode: (node: INode, parentId: string) => void;
	removeNode: (id: string) => void;
}

const useTreeStore = create<ITreeStore>((set) => ({
	rootNode: initialState,
	createNode: (node, parentId) => {
		set((state) => ({
			rootNode: addNode({ currentNode: state.rootNode, parentId, node }),
		}));
	},

	removeNode: (id) => {
		set((state) => ({ rootNode: removeNode({ currentNode: state.rootNode, id }) }));
	},
}));

export default useTreeStore;
