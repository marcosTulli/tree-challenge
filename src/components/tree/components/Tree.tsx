import React from 'react';
import { Box } from '@mui/material';
import { useTree } from '../hooks';
import Node from './Node';

const TreeBody: React.FC = () => {
	const { rootNode } = useTree();

	return (
		<Box id="node-container">
			<Node node={rootNode} />
		</Box>
	);
};

export default TreeBody;
