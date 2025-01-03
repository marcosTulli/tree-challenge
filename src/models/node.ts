export interface INode {
	id: string;
	title: string;
	children: INode[];
	revealChildren?: boolean;
}

export interface INodeProps {
	node: INode;
}
