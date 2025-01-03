import React from 'react';
import { Box, Switch, Typography } from '@mui/material';
import { useNode } from '../../hooks';

const Header: React.FC = () => {
	const { toggleEdit } = useNode();
	return (
		<Box
			id="title "
			component="header"
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
	);
};

export default Header;
