import useDialogs from './useDialogs';
import  useTreeStore from './useTreeStore';
import { INode } from '@/models/index'


function createNodeWithActions(
  node: INode,
  createNodeFor: (node: INode) => void,
  removeNode: (id: string) => void): INode & {
  addChild: (child: INode) => void;
  removeChild: (id: string) => void;
} {
  return {
    ...node,
    addChild: (child: INode) => {
      // Here we're adding the child directly to this node's children
      // console.log(child)
      createNodeFor({ ...child, children: [] });
    },
    removeChild: (id: string) => {
      // Here we're removing a child from this node's children
      removeNode(id);
    },
    children: node.children.map(child => createNodeWithActions(child, createNodeFor, removeNode))
  };
}


const useTree = () => {
    const { createNodeFor, removeNode, children, id , title  } = useTreeStore()
    const rootNode = createNodeWithActions({ children , id, title  }, createNodeFor, removeNode);
    const {closeCreateDialog} = useDialogs()
    const createId = () => Date.now().toString();
    
    const addNode = ({event, node}: {event: React.FormEvent<HTMLFormElement>, node: INode }) => {
          event.preventDefault();
          const id = createId()
          const formData = new FormData(event.currentTarget);
          const formJson = Object.fromEntries((formData as any).entries());
          const title = formJson.name;
          const newNode = {id, title, children:[]}
          if (node.addChild) { 
              node.addChild(newNode)
          }
          closeCreateDialog()
          }


    
        
  return { rootNode, removeNode, addNode}
}
export default useTree