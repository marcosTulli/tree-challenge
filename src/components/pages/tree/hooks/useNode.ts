/* eslint-disable @typescript-eslint/no-unused-expressions */
import React from 'react';
import { useEditModeStore, useNodeStore, useDialogsStore, useTreeStore } from '../store';
import { INode } from '@/models';

const useNode = () => {
	const [title, setTitle] = React.useState<string>('');
	const hasChildren = false;
	const disableSubmit = title.length === 0;

	const { enableEdit, toggleEdit } = useEditModeStore();
	const { toggleReveal } = useTreeStore();
	const {
		displayOptions,
		selectedNode,
		setSelectedNode,
		clearSelectedNode,
		toggleOptions,
	} = useNodeStore();
	const { openCreateDialog, openRemoveDialog, closeCreateDialog, closeRemoveDialog } =
		useDialogsStore();

	const handleAddNodeClick = ({ node }: { node: INode }) => {
		openCreateDialog();
		setSelectedNode({ node });
		displayOptions && toggleOptions();
	};

	const handleRemoveNodeClick = ({ node }: { node: INode }) => {
		openRemoveDialog();
		setSelectedNode({ node });
		displayOptions && toggleOptions();
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

	const handleReveal = ({ id }: { id: string }) => {
		toggleReveal(id);
	};

	return {
		hasChildren,
		selectedNode,
		disableSubmit,
		title,
		enableEdit,
		displayOptions,
		toggleOptions,
		handleAddNodeClick,
		handleRemoveNodeClick,
		handleCloseRemoveDialog,
		handleCloseCreateDialog,
		handleInput,
		toggleEdit,
		handleReveal,
	};
};

export default useNode;
