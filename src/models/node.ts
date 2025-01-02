export default interface INode {
  id: string;
  title: string;
  children: INode[];
}

export interface IActionableNode extends INode {
  addChild: (child: INode) => void;
  removeChild: (id: string) => void;
}
