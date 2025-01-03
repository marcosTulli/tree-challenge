import { create } from 'zustand';
import useDialogsStore from '../store/useDialogsStore';
import { INode } from '@/models';
import React from 'react';
import { useEditModeStore } from '../store';

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
	const { enableEdit, toggleEdit } = useEditModeStore();
	const { toggleReveal, isCollapsed, selectedNode, setSelectedNode, clearSelectedNode } =
		useNodeStore();
	const { openCreateDialog, openRemoveDialog, closeCreateDialog, closeRemoveDialog } =
		useDialogsStore();

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
		enableEdit,
		toggleReveal,
		handleAddNodeClick,
		handleRemoveNodeClick,
		handleCloseRemoveDialog,
		handleCloseCreateDialog,
		handleInput,
		toggleEdit,
	};
};

export default useNode;
