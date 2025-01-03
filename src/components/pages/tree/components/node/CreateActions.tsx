import React from 'react';
import { Box } from '@mui/material';
import { CreateNode, RemoveNode } from '../buttons';
import { INodeProps } from '@/models';

const CreateActions: React.FC<INodeProps> = ({ node }) => {
	return (
		<Box sx={{ display: 'flex', gap: '0.8rem', paddingLeft: '1rem' }}>
			<RemoveNode node={node} />
			<CreateNode node={node} />
		</Box>
	);
};

export default CreateActions;
