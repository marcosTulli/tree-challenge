import React from 'react';
import { Box, Typography } from '@mui/material';
import NodeButtons from './NodeButtons';
import { INode } from '@/models';

interface INodeProps {
	node: INode;
}

const Node: React.FC<INodeProps> = ({ node }) => {
	console.log(node);
	return (
		<Box id={node.id}>
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
				<NodeButtons node={node} />
			</Box>

			<Box component="ul" sx={{ listStyleType: 'none', paddingLeft: '1rem', margin: 0 }}>
				{node.children?.map((childNode) => (
					<li key={childNode.id}>
						<Node node={childNode} />
					</li>
				))}
			</Box>
		</Box>
	);
};

export default Node;
