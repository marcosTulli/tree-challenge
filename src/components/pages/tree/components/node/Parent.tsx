import React from 'react';
import { Box, Typography } from '@mui/material';
import Actions from './Actions';
import { INodeProps } from '@/models';

const Parent: React.FC<INodeProps> = ({ node }) => {
	return (
		<Box
			sx={{
				bgcolor: 'primary.main',
				width: 'fit-content',
				padding: '0.5rem',
				marginTop: '1rem',
				display: 'flex',
				alignItems: 'flex-start',
				borderRadius: '4px',
			}}
		>
			<Typography variant="body1" color="secondary.main">
				{node.title}
			</Typography>
			<Actions node={node} />
		</Box>
	);
};

export default Parent;
