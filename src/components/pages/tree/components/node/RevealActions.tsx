import React from 'react';
import { Box } from '@mui/material';
import { INode } from '@/models';
import { RevealChildren } from '../buttons';

interface IRevealActionsProps {
	node: INode;
}

const RevealActions: React.FC<IRevealActionsProps> = ({ node }) => {
	return (
		<Box sx={{ display: 'flex', gap: '0.8rem', paddingLeft: '1rem' }}>
			{node.children.length ? (
				<RevealChildren node={node} />
			) : (
				<Box sx={{ width: '30px' }}></Box>
			)}
		</Box>
	);
};

export default RevealActions;
