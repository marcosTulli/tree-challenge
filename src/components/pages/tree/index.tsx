import { Box, Button, Container, Switch, Typography } from '@mui/material';
import { useCreateNodeDialog, useEditMode } from './hooks';
import AddIcon from '@mui/icons-material/Add';
import CreateNodeDialog from './components/CreateNodeDialog';

interface NodeTree {
  id: string;
  value: string;
  children: NodeTree[];
}
const TreeBody = () => {
  const {enableEdit, toggleEdit} = useEditMode()
  const {openDialog} = useCreateNodeDialog()

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
        <Button  
          onClick={openDialog}
          sx={{ display: enableEdit ? 'flex' : 'none', padding: '0', margin: '0' }}>
          <AddIcon color='secondary'/>
        </Button>
      </Box>
      </Container>
      <CreateNodeDialog/>
    </Container>
  );
};

export default TreeBody;