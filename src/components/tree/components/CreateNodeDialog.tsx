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
	node: INode;
}

const CreateNodeDialog: React.FC<ICreateNodeDialogProps> = ({ node }) => {
	const { isOpenCreateDialog } = useDialogs();
	const { handleCloseCreateDialog, handleInput, title, disableSubmit } = useNode();
	const { add } = useTree();

	return (
		<React.Fragment>
			<Dialog open={isOpenCreateDialog} onClose={handleCloseCreateDialog}>
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
						onChange={handleInput}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleCloseCreateDialog}>Cancelar</Button>
					<Button
						disabled={disableSubmit}
						type="button"
						variant="contained"
						onClick={() => add({ title, node })}
					>
						Crear
					</Button>
				</DialogActions>
			</Dialog>
		</React.Fragment>
	);
};
export default CreateNodeDialog;
