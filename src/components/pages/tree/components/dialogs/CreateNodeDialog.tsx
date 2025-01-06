import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useNode, useTree } from '../../hooks';
import { INode } from '@/models';
import { useDialogsStore } from '../../store';
import { Box } from '@mui/material';
import useRootNode from '../../hooks/useRootNode';

interface ICreateNodeDialogProps {
	node: INode;
}

const CreateNodeDialog: React.FC<ICreateNodeDialogProps> = ({ node }) => {
	const { isOpenCreateDialog } = useDialogsStore();
	const { handleCloseCreateDialog, handleInput, title, disableSubmit } = useNode();
	const { rootNode } = useRootNode();
	const { add } = useTree();

	return (
		<React.Fragment>
			<Dialog open={isOpenCreateDialog} onClose={handleCloseCreateDialog}>
				<Box>
					<DialogTitle fontSize={'15px'}>Nuevo Nodo</DialogTitle>
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
						<Button sx={{ fontSize: '11px' }} onClick={handleCloseCreateDialog}>
							Cancelar
						</Button>
						<Button
							sx={{ fontSze: '11px' }}
							disabled={disableSubmit}
							type="button"
							variant="contained"
							onClick={() => add({ title, node, rootNode: rootNode as INode })}
						>
							Crear
						</Button>
					</DialogActions>
				</Box>
			</Dialog>
		</React.Fragment>
	);
};
export default CreateNodeDialog;
