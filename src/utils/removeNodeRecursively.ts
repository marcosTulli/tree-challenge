import { INode } from '@/models';

export const removeNodeRecursively = ({
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
			.map((child) => removeNodeRecursively({ currentNode: child, id })),
	};
};
