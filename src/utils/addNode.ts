import { INode } from '@/models';

interface IAddNodeProps {
	currentNode: INode;
	parentId: string;
	node: INode;
}

export const addNode = ({ currentNode, parentId, node }: IAddNodeProps): INode => {
	if (currentNode.id === parentId) {
		return {
			...currentNode,
			children: [...currentNode.children, node],
		};
	}
	return {
		...currentNode,
		children: currentNode.children.map((child) =>
			addNode({ currentNode: child, parentId, node }),
		),
	};
};
