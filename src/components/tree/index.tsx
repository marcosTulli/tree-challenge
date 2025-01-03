import React from 'react';
import { Box, Container, Switch, Typography } from '@mui/material';
import { useEditMode, useNode } from './hooks';
import CreateNodeDialog from './components/CreateNodeDialog';
import RemoveNodeDialog from './components/RemoveNodeDialog';
import Tree from './components/Tree';
import { INode } from '@/models';

const TreeBody: React.FC = () => {
	const { toggleEdit } = useEditMode();
	const { selectedNode } = useNode();

	return (
		<Container sx={{ width: '100%', height: '100%' }}>
			<Box
				id="title "
				sx={{
					display: 'flex',
					justifyContent: 'center',
					padding: '2rem',
					alignItems: 'center',
				}}
			>
				<Box sx={{ paddingRight: '3rem' }}>
					<Switch color="secondary" onChange={toggleEdit} />
				</Box>
				<Typography variant="h3" color="secondary.main">
					Árbol
				</Typography>
			</Box>
			<Tree />
			<CreateNodeDialog node={selectedNode as INode} />
			<RemoveNodeDialog node={selectedNode as INode} />
		</Container>
	);
};

export default TreeBody;
