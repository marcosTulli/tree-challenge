import React from 'react'
import { Box, Container, Typography } from '@mui/material';
import NodeButtons from './NodeButtons';

const Node:React.FC = ({}) => {
  return (
        <Box sx={{
          bgcolor:'primary.main',
          width:'fit-Content',
          padding: '0.5rem',
          marginTop:'1rem',
          display:'flex',
          alignItems:'center',
          borderRadius:'4px'

        }} 
        >
        <Typography variant='body1' color='secondary.main'>Parent</Typography>
        <NodeButtons/> 
      </Box>
  )
}

export default Node