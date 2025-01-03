import { createId } from '@/utils';
import useDialogs from './useDialogs';
import useTreeStore from './useTreeStore';
import { INode } from '@/models/index';

const useTree = () => {
	const { createNode, removeNode, rootNode } = useTreeStore();
	const { closeCreateDialog, closeRemoveDialog } = useDialogs();

	const add = ({ title, node }: { title: string; node: INode }) => {
		const id = createId();
		const newNode = { id, title, children: [] };
		createNode(newNode, node.id);
		closeCreateDialog();
	};

	const remove = (id: string) => {
		removeNode(id);
		closeRemoveDialog();
	};

	return { rootNode, removeNode, add, remove };
};

export default useTree;
