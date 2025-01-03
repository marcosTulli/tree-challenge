import React from 'react';
import { Box } from '@mui/material';
import { INodeProps } from '@/models';
import Node from './index';

const Children: React.FC<INodeProps> = ({ node }) => {
	return (
		<Box component="ul" sx={{ listStyleType: 'none', pl: '1rem', margin: 0 }}>
			{node.children?.map((childNode) => (
				<li key={childNode.id}>
					<Node node={childNode} />
				</li>
			))}
		</Box>
	);
};

export default Children;
