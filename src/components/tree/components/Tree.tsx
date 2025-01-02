import React from 'react';
import { Box } from '@mui/material';
import {  useTree  } from '../hooks';
import { INode } from '@/models';
import Node from './Node';


const TreeBody:React.FC = () => {
  const {rootNode} = useTree()
  return (
      <Box id='node-container'>
        <Node node={rootNode}/>
        <ul>
          {rootNode.children.map(childNode => {
            return (
              <li key={childNode.id}>
                <Node node={childNode as INode}/>
              </li>
            )
          } )}
        </ul>
      </Box>
  );
};

export default TreeBody