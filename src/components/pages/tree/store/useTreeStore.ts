import { addNode, removeNode, revealNode } from '@/utils';
import { create } from 'zustand';
import { INode } from '@/models';

const initialState: INode = {
	id: 'root',
	title: 'Parent',
	children: [],
	revealChildren: true,
};

interface ITreeStore {
	rootNode: INode;
	createNode: (node: INode, parentId: string) => void;
	removeNode: (id: string) => void;
	toggleReveal: (id: string) => void;
}

const useTreeStore = create<ITreeStore>((set) => ({
	rootNode: initialState,
	createNode: (node, parentId) => {
		set((state) => ({
			rootNode: addNode({ currentNode: state.rootNode, parentId, node }),
		}));
	},
	removeNode: (id) => {
		set((state) => ({
			rootNode: removeNode({ currentNode: state.rootNode, id }),
		}));
	},
	toggleReveal: (id) => {
		set((state) => ({
			rootNode: revealNode({ currentNode: state.rootNode, id }),
		}));
	},
}));

export default useTreeStore;
