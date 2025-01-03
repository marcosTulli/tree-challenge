import { create } from 'zustand';
import useDialogs from './useDialogs';
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

const useNode = () => {
	const { toggleReveal, isCollapsed, selectedNode, setSelectedNode, clearSelectedNode } = useNodeStore();
	const { openCreateDialog, openRemoveDialog, closeCreateDialog, closeRemoveDialog } = useDialogs();
	const hasChildren = false;

	const handleAddNodeClick = ({ node }: { node: INode }) => {
		openCreateDialog();
		setSelectedNode({ node });
	};

	const handleRemoveNodeClick = ({ node }: { node: INode }) => {
		openRemoveDialog();
		setSelectedNode({ node });
	};

	const handleCloseCreateDialog = () => {
		closeCreateDialog();
		clearSelectedNode();
	};

	const handleCloseRemoveDialog = () => {
		closeRemoveDialog();
		clearSelectedNode();
	};

	return {
		hasChildren,
		isCollapsed,
		selectedNode,
		toggleReveal,
		handleAddNodeClick,
		handleRemoveNodeClick,
		handleCloseRemoveDialog,
		handleCloseCreateDialog,
	};
};

export default useNode;
