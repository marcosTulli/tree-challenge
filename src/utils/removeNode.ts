import { INode } from '@/models';

export const removeNode = ({
	currentNode,
	id,
}: {
	currentNode: INode;
	id: string;
}): INode => {
	return {
		...currentNode,
		children: currentNode.children
			.filter((child) => child.id !== id)
			.map((child) => removeNode({ currentNode: child, id })),
	};
};
