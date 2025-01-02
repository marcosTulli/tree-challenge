import { create } from 'zustand';

interface INode { 
  id: string;
  title: string;
  children: INode[];
}

const initialState: INode = {
  id: 'root',
  title: 'Parent',
  children: [],
};

interface ITreeStore {
  id: string;
  title: string;
  children: INode[];
  createNodeFor: (node: INode) => void;
  removeNode: (id: string) => void;
}

const useTreeStore = create<ITreeStore>()((set) => ({
  ...initialState,
  createNodeFor: (node) => {
    set((state) => ({
      ...state,
      children: [...state.children, node]
    }));
  },

  removeNode: (id) => 
    set((state) => ({
      ...state,
      children: state.children.filter(child => child.id !== id)
    })),
}));


export default useTreeStore