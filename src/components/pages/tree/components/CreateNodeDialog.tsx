import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useCreateNodeDialog } from '../hooks';

const CreateNodeDialog =()=> {
    const {isOpen, closeDialog} = useCreateNodeDialog()

  return (
    <React.Fragment>
      <Dialog
        open={isOpen}
        onClose={closeDialog}
        PaperProps={{
          component: 'form',
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData as any).entries());
            const email = formJson.email;
            console.log(email);
            closeDialog()
            
          },
        }}
      >
        <DialogTitle>Nuevo Nodo</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="Nombre"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog}>Cancelar</Button>
          <Button type="submit">Crear</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
export default CreateNodeDialog