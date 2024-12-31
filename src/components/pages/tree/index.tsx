import { Box, Button, Container, Switch, Typography } from '@mui/material';
import { useDialogs, useEditMode } from './hooks';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CreateNodeDialog from './components/CreateNodeDialog';
import React from 'react';
import RemoveNodeDialog from './components/RemoveNodeDialog';

interface IButtonComponentProps { 
  onClick: ()=> void, 
  display: boolean,
}
  const ButtonComponent: React.FC<React.PropsWithChildren & IButtonComponentProps> = ({children, onClick, display}) => { 
    return(
        <Button  
          onClick={onClick}
          variant='contained'
          sx={{ 
            display: display ? 'flex' : 'none',
            minWidth:'30px',
            padding: '0', margin: '0',
           }}>
            {children}
        </Button>
    )
  }

interface NodeTree {
  id: string;
  value: string;
  children: NodeTree[];
}
const TreeBody = () => {
  const {enableEdit, toggleEdit} = useEditMode()
  const {openCreateDialog, openRemoveDialog} = useDialogs()


  return (
    <Container sx={{width:'100%', height:'100%' }}>
      <Box id='title 'sx={{display:'flex', justifyContent:'center', padding:'2rem', alignItems:'center'}}>
        <Box sx={{paddingRight:'3rem'}}>
            <Switch color='secondary' onChange={toggleEdit} />
        </Box>
        <Typography variant='h3' color='secondary.main'>Árbol</Typography>
      </Box>
      <Container>
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
        <Box sx={{display:'flex', gap:'0.8rem', paddingLeft:'1rem'}}>
        <ButtonComponent onClick={openRemoveDialog} display={enableEdit}>
          <RemoveIcon color='secondary'  sx={{ width:'15px'}}/>
        </ButtonComponent>
        <ButtonComponent onClick={openCreateDialog} display={enableEdit}>
          <AddIcon color='secondary' sx={{ width:'15px'}}/>
        </ButtonComponent>
        </Box>
      </Box>
      </Container>
      <CreateNodeDialog/>
      <RemoveNodeDialog/>
    </Container>
  );
};

export default TreeBody;