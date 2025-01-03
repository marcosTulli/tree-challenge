export interface INode {
	id: string;
	title: string;
	children: INode[];
}

export interface INodeProps {
	node: INode;
}
