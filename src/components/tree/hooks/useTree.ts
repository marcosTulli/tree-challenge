import useDialogs from './useDialogs';
import useTreeStore from './useTreeStore';
import { INode } from '@/models/index';

const useTree = () => {
	const { createNode, removeNode, rootNode } = useTreeStore();
	const { closeCreateDialog } = useDialogs();
	const createId = () => Date.now().toString();

	const addNode = ({ event, node }: { event: React.FormEvent<HTMLFormElement>; node: INode }) => {
		event.preventDefault();
		const id = createId();
		const formData = new FormData(event.currentTarget);
		const formJson = Object.fromEntries((formData as any).entries());
		const title = formJson.name;
		const newNode = { id, title, children: [] };
		createNode(newNode, node.id);
		closeCreateDialog();
	};

	return { rootNode, removeNode, addNode };
};

export default useTree;
