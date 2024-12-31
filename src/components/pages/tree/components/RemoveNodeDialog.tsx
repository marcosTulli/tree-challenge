import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDialogs } from '../hooks';

const RemoveNodeDialog = ()=> {
    const {isOpenRemoveDialog, closeRemoveDialog} = useDialogs()


  return (
    <React.Fragment>
      <Dialog
        open={isOpenRemoveDialog}
        onClose={closeRemoveDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
            Eliminar nodo
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Seguro que desea eliminar este nodo?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeRemoveDialog}>Cancelar</Button>
          <Button variant='contained' color='error'  onClick={closeRemoveDialog} autoFocus>
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
export default RemoveNodeDialog