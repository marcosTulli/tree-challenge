import { create } from 'zustand';
import { INode } from '@/models';

const initialState = {
	isCollapsed: false,
	selectedNode: null,
	displayOptions: false,
};

interface INodeStore {
	isCollapsed: boolean;
	selectedNode: INode | null;
	displayOptions: boolean;
	toggleReveal: () => void;
	setSelectedNode: ({ node }: { node: INode }) => void;
	clearSelectedNode: () => void;
	toggleOptions: () => void;
}

const useNodeStore = create<INodeStore>()((set) => ({
	...initialState,
	toggleReveal: () => set((state) => ({ isCollapsed: !state.isCollapsed })),
	toggleOptions: () => set((state) => ({ displayOptions: !state.displayOptions })),
	setSelectedNode: ({ node }: { node: INode }) => set(() => ({ selectedNode: node })),
	clearSelectedNode: () => set(() => ({ selectedNode: null })),
}));

export default useNodeStore;
