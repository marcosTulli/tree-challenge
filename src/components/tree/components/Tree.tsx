import React from 'react';
import { Box } from '@mui/material';
import {  useTree  } from '../hooks';
import Node from './Node';
import { INode } from '@/models';


const TreeBody:React.FC = () => {
  const {rootNode} = useTree()
  return (
      <Box id='node-container'>
        <Node node={rootNode}/>
        <ul>
          {rootNode.children.map(childNode => {
            return (
              <li key={childNode.id}>
                <Node node={childNode}/>
                <ul>
                  {
                    childNode.children.map((i: INode)=> {
                      return (
                      <li key={i.id}>
                        <Node node={childNode}/>
                      </li>
                      )
                    })
                  }
                </ul>
              </li>
          )
          } )}
        </ul>
      </Box>
  );
};

export default TreeBody