import React from 'react';
import { Box,  Container, Switch, Typography } from '@mui/material';
import { useEditMode } from './hooks';
import CreateNodeDialog from './components/CreateNodeDialog';
import RemoveNodeDialog from './components/RemoveNodeDialog';
import Node from './components/Node';


const TreeBody:React.FC = () => {
  const { toggleEdit} = useEditMode()

  return (
    <Container sx={{width:'100%', height:'100%' }}>
      <Box id='title 'sx={{display:'flex', justifyContent:'center', padding:'2rem', alignItems:'center'}}>
        <Box sx={{paddingRight:'3rem'}}>
            <Switch color='secondary' onChange={toggleEdit} />
        </Box>
        <Typography variant='h3' color='secondary.main'>Árbol</Typography>
      </Box>
      <Node />
      <CreateNodeDialog/>
      <RemoveNodeDialog/>
    </Container>
  );
};

export default TreeBody;