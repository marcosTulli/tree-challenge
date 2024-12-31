import React, { useState } from 'react';
import { useTreeStore } from '../hooks/useTreeStore';
import TreeNode from './TreeNode';

interface TreeNodeType {
  id: string;
  value: string;
  children: TreeNodeType[];
}
interface TreeProps {
  title: string;
  value: TreeNodeType[];
  onChange: (newValue: TreeNodeType[]) => void;
  editable: boolean;
}

const Tree: React.FC<TreeProps> = ({
  title,
  value,
  onChange,
  editable,
}) => {
  const [newNodeValue, setNewNodeValue] = useState('');
  const [isAddingNode, setIsAddingNode] = useState(false);
  const { updateTree } = useTreeStore();

  const handleAddNode = (parentId: string) => {
    if (newNodeValue.trim() !== '') {
      const newNode: TreeNodeType = { id: Math.random().toString(), value: newNodeValue, children: [] };
      updateTree(value, parentId, newNode);
      onChange(value);
      setIsAddingNode(false);
      setNewNodeValue('');
    }
  };

  const handleRemoveNode = (nodeId: string) => {
    updateTree(value, nodeId, null);
    onChange(value);
  };

  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {value.map((node: TreeNodeType) => (
          <TreeNode
            key={node.id}
            node={node}
            editable={editable}
            onAddNode={() => setIsAddingNode(true)}
            onRemoveNode={() => handleRemoveNode(node.id)}
          >
            {editable && isAddingNode && (
              <div>
                <input
                  type="text"
                  value={newNodeValue}
                  onChange={(e) => setNewNodeValue(e.target.value)}
                />
                <button onClick={() => handleAddNode(node.id)}>Agregar</button>
                <button onClick={() => setIsAddingNode(false)}>Cancelar</button>
              </div>
            )}
          </TreeNode>
        ))}
      </ul>
    </div>
  );
};

export default Tree;