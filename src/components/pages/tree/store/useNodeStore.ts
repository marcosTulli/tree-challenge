import { create } from 'zustand';
import { INode } from '@/models';

const initialState = {
	isCollapsed: false,
	selectedNode: null,
};

interface INodeStore {
	isCollapsed: boolean;
	selectedNode: INode | null;
	toggleReveal: () => void;
	setSelectedNode: ({ node }: { node: INode }) => void;
	clearSelectedNode: () => void;
}

const useNodeStore = create<INodeStore>()((set) => ({
	...initialState,
	toggleReveal: () => set((state) => ({ isCollapsed: !state.isCollapsed })),
	setSelectedNode: ({ node }: { node: INode }) => set(() => ({ selectedNode: node })),
	clearSelectedNode: () => set(() => ({ selectedNode: null })),
}));

export default useNodeStore;
