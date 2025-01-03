import React from 'react';
import { useNode } from '../../hooks';
import ButtonComponent from '@/components/common/Button';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { INodeProps } from '@/models';

const RevealActions: React.FC<INodeProps> = ({ node }) => {
	const { handleReveal } = useNode();

	return (
		<ButtonComponent
			onClick={() => handleReveal({ id: node.id })}
			display={true}
			variant="text"
			title={`${node.revealChildren ? 'Colapsar' : 'Desplegar'}`}
		>
			{node.revealChildren ? (
				<ExpandLessIcon color="secondary" sx={{ width: '20px' }} />
			) : (
				<ExpandMoreIcon color="secondary" sx={{ width: '20px' }} />
			)}
		</ButtonComponent>
	);
};

export default RevealActions;
