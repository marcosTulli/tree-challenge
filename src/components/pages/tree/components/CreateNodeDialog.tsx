import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useDialogs } from '../hooks';

const CreateNodeDialog =()=> {
    const {isOpenCreateDialog, closeCreateDialog} = useDialogs()

  return (
    <React.Fragment>
      <Dialog
        open={isOpenCreateDialog}
        onClose={closeCreateDialog}
        PaperProps={{
          component: 'form',
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData as any).entries());
            const email = formJson.email;
            console.log(email);
            closeCreateDialog()
            
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
          <Button onClick={closeCreateDialog}>Cancelar</Button>
          <Button type="submit">Crear</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
export default CreateNodeDialog