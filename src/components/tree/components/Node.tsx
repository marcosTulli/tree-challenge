import React from 'react'
import { Box, Typography } from '@mui/material';
import NodeButtons from './NodeButtons';
import { INode } from '@/models';

interface INodeProps { 
  node: INode,
}

const Node:React.FC<INodeProps> = ({node}) => {

  return (
        <Box 
        // id={node.id}
        sx={{
          bgcolor:'primary.main',
          width:'fit-Content',
          padding: '0.5rem',
          marginTop:'1rem',
          display:'flex',
          alignItems:'center',
          borderRadius:'4px'
        }} 
        >
        <Typography variant='body1' color='secondary.main'>{node.title}</Typography>
        <NodeButtons node={node}/> 
      </Box>
  )
}

export default Node