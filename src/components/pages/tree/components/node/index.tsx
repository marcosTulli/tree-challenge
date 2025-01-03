import React from 'react';
import { Box } from '@mui/material';
import { INodeProps } from '@/models';
import Parent from './Parent';
import Children from './Children';

const Node: React.FC<INodeProps> = ({ node }) => {
	return (
		<Box id={node.id} onMouseEnter={() => console.log(node.id)}>
			<Parent node={node} />
			<Children node={node} />
		</Box>
	);
};

export default Node;
