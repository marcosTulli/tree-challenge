import { INode } from '@/models';

export const revealNode = ({
	currentNode,
	id,
}: {
	currentNode: INode;
	id: string;
}): INode => {
	if (currentNode.id === id) {
		return {
			...currentNode,
			revealChildren: !currentNode.revealChildren,
		};
	}

	if (currentNode.children) {
		return {
			...currentNode,
			children: currentNode.children.map((child) =>
				revealNode({ currentNode: child, id }),
			),
		};
	}

	return currentNode;
};
