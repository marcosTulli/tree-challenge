import { create } from 'zustand';
import useDialogs from './useDialogs';
import { INode } from '@/models';
import React from 'react';

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
	const [title, setTitle] = React.useState<string>('');
	const { toggleReveal, isCollapsed, selectedNode, setSelectedNode, clearSelectedNode } =
		useNodeStore();
	const { openCreateDialog, openRemoveDialog, closeCreateDialog, closeRemoveDialog } =
		useDialogs();
	const hasChildren = false;
	const disableSubmit = title.length === 0;

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
		setTitle('');
	};

	const handleCloseRemoveDialog = () => {
		closeRemoveDialog();
		clearSelectedNode();
	};

	const handleInput = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		setTitle(event.target.value);
	};

	return {
		hasChildren,
		isCollapsed,
		selectedNode,
		disableSubmit,
		title,
		toggleReveal,
		handleAddNodeClick,
		handleRemoveNodeClick,
		handleCloseRemoveDialog,
		handleCloseCreateDialog,
		handleInput,
	};
};

export default useNode;
