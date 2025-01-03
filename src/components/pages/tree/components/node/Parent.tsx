import React from 'react';
import { Box, Typography } from '@mui/material';
import CreateActions from './CreateActions';
import { INodeProps } from '@/models';
import RevealActions from './RevealActions';

const Parent: React.FC<INodeProps> = ({ node }) => {
	return (
		<Box
			sx={{
				width: 'fit-content',
				marginTop: '1rem',
				display: 'flex',
				alignItems: 'center',
				borderRadius: '4px',
			}}
		>
			<RevealActions node={node} />
			<Typography variant="body1" color="secondary.main">
				{node.title}
			</Typography>
			<CreateActions node={node} />
		</Box>
	);
};

export default Parent;
