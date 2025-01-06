import React from 'react';
import { Box, Switch, Typography } from '@mui/material';
import { useNode } from '../../hooks';

const Header: React.FC = () => {
	const { toggleEdit } = useNode();
	return (
		<Box
			id="title"
			component="header"
			sx={{
				display: 'flex',
				alignItems: 'center',
				padding: '2rem',
			}}
		>
			<Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
				<Typography component="label" color="secondary">
					Editar
				</Typography>
				<Switch color="secondary" onChange={toggleEdit} />
			</Box>
			<Box sx={{ flex: 1, textAlign: 'center' }}>
				<Typography variant="h3" color="secondary.main">
					Árbol
				</Typography>
			</Box>
		</Box>
	);
};

export default Header;
