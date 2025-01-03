import useDialogs from './useDialogs';
import useTreeStore from './useTreeStore';
import { INode } from '@/models/index';

const useTree = () => {
	const { createNode, removeNode, children, id, title } = useTreeStore();
	const rootNode = { children, id, title };
	const { closeCreateDialog } = useDialogs();
	const createId = () => Date.now().toString();

	const addNode = ({ event, node }: { event: React.FormEvent<HTMLFormElement>; node: INode }) => {
		event.preventDefault();
		const id = createId();
		const formData = new FormData(event.currentTarget);
		const formJson = Object.fromEntries((formData as any).entries());
		const title = formJson.name;
		const newNode = { id, title, children: [] };
		createNode(newNode, node);
		closeCreateDialog();
	};

	return { rootNode, removeNode, addNode };
};

export default useTree;
