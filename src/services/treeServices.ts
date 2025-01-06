import { ICreateNodeProps, INode } from '@/models';
import { addNode, getLocalStorageData, removeNode, revealNode, setLocalStorageData } from '@/utils';

const LOCAL_STORAGE_KEY = 'root';

class TreeServices {
	private initializeRootNode: () => INode;
	private getRootNode: () => INode;
	private updateRootNode: (rootNode: INode) => INode;
	public addChildNode: (props: ICreateNodeProps) => Promise<INode>;
	public fetchRootNode: () => Promise<INode>;
	public removeChildNode: (props: { nodeId: string }) => Promise<INode>;
	public toggleRevealNode: (props: { nodeId: string }) => Promise<INode>;

	constructor() {
		this.initializeRootNode = () => {
			const defaultRootNode: INode = {
				id: 'root',
				title: 'Root',
				children: [],
			};
			setLocalStorageData(LOCAL_STORAGE_KEY, defaultRootNode);
			return defaultRootNode;
		};

		this.getRootNode = () => {
			return getLocalStorageData(LOCAL_STORAGE_KEY) || this.initializeRootNode();
		};

		this.updateRootNode = (rootNode: INode) => {
			setLocalStorageData(LOCAL_STORAGE_KEY, rootNode);
			return rootNode;
		};

		this.addChildNode = async ({
			parentId,
			newNode,
			rootNode,
		}: ICreateNodeProps): Promise<INode> => {
			const updatedRootNode = addNode({ currentNode: rootNode, node: newNode, parentId });
			return this.updateRootNode(updatedRootNode);
		};

		this.fetchRootNode = async (): Promise<INode> => {
			return this.getRootNode();
		};

		this.removeChildNode = async ({ nodeId }: { nodeId: string }): Promise<INode> => {
			const rootNode = this.getRootNode();
			const updatedRootNode = removeNode({ currentNode: rootNode, id: nodeId });
			return this.updateRootNode(updatedRootNode);
		};

		this.toggleRevealNode = async ({ nodeId }: { nodeId: string }): Promise<INode> => {
			const rootNode = this.getRootNode();
			const updatedRootNode = revealNode({ currentNode: rootNode, id: nodeId });
			return this.updateRootNode(updatedRootNode);
		};
	}
}

const TreeServicesInstance = new TreeServices();
export default TreeServicesInstance;
