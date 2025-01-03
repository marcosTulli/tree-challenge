import { create } from 'zustand';

interface INode {
	id: string;
	title: string;
	children: INode[];
}

const initialState: INode = {
	id: 'root',
	title: 'Parent',
	children: [{ id: 'je', title: 'eje', children: [] }],
};

interface ITreeStore {
	rootNode: INode;
	createNode: (node: INode, parentId: string) => void;
	removeNode: (id: string) => void;
}

interface IAddNodeProps {
	currentNode: INode;
	parentId: string;
	node: INode;
}
const addNode = ({ currentNode, parentId, node }: IAddNodeProps): INode => {
	if (currentNode.id === parentId) {
		return {
			...currentNode,
			children: [...currentNode.children, node],
		};
	}
	return {
		...currentNode,
		children: currentNode.children.map((child) => addNode({ currentNode: child, parentId, node })),
	};
};

const useTreeStore = create<ITreeStore>((set) => ({
	rootNode: initialState,
	createNode: (node, parentId) => {
		set((state) => ({ rootNode: addNode({ currentNode: state.rootNode, parentId, node }) }));
	},

	removeNode: (id) => {
		set((state) => {
			const removeNodeFromTree = (currentNode: INode): INode => {
				return {
					...currentNode,
					children: currentNode.children.filter((child) => child.id !== id).map(removeNodeFromTree),
				};
			};

			return {
				rootNode: removeNodeFromTree(state.rootNode),
			};
		});
	},
}));

export default useTreeStore;
