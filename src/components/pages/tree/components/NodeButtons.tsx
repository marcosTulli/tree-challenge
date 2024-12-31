import React from 'react'
import { Box } from '@mui/material';
import { useDialogs, useEditMode } from '../hooks';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ButtonComponent from './Button';

const NodeButtons:React.FC = ({}) => {
  const {openCreateDialog, openRemoveDialog} = useDialogs()
  const {enableEdit} = useEditMode()    
  return (

        <Box sx={{display:'flex', gap:'0.8rem', paddingLeft:'1rem'}}>
        <ButtonComponent onClick={openRemoveDialog} display={enableEdit}>
          <RemoveIcon color='secondary'  sx={{ width:'15px'}}/>
        </ButtonComponent>
        <ButtonComponent onClick={openCreateDialog} display={enableEdit}>
          <AddIcon color='secondary' sx={{ width:'15px'}}/>
        </ButtonComponent>
        </Box>
  )
}

export default NodeButtons