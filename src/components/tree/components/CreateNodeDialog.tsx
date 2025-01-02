import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useDialogs, useNode, useTree } from '../hooks';
import { INode } from '@/models';

interface ICreateNodeDialogProps { 
  node: INode 
}
const CreateNodeDialog:React.FC<ICreateNodeDialogProps> =({node})=> {
    const {isOpenCreateDialog } = useDialogs()
    const {handleCloseCreateDialog} = useNode()
    const { addNode } = useTree()

  return (
    <React.Fragment>
      <Dialog
        open={isOpenCreateDialog}
        onClose={handleCloseCreateDialog}
        PaperProps={{
          component: 'form',
          onSubmit: (event: React.FormEvent<HTMLFormElement>)=> addNode({event, node}),
        }}
      >
        <DialogTitle>Nuevo Nodo</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="name"
            label="Nombre"
            type="text"
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseCreateDialog}>Cancelar</Button>
          <Button  type='submit' variant='contained'>Crear</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
export default CreateNodeDialog