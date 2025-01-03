import React from 'react';
import { Box } from '@mui/material';
import { useNode } from '../../hooks';
import ButtonComponent from '@/components/common/Button';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { INode } from '@/models';

interface IRevealActionsProps {
	node: INode;
}

const RevealActions: React.FC<IRevealActionsProps> = ({ node }) => {
	const { handleReveal } = useNode();

	return (
		<Box sx={{ display: 'flex', gap: '0.8rem', paddingLeft: '1rem' }}>
			{node.children.length ? (
				<ButtonComponent
					onClick={() => handleReveal({ id: node.id })}
					display={true}
					variant="text"
				>
					{node.revealChildren ? (
						<ExpandLessIcon color="secondary" sx={{ width: '20px' }} />
					) : (
						<ExpandMoreIcon color="secondary" sx={{ width: '20px' }} />
					)}
				</ButtonComponent>
			) : (
				<Box sx={{ width: '30px' }}></Box>
			)}
		</Box>
	);
};

export default RevealActions;
