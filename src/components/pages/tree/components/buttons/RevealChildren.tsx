import React from 'react';
import ButtonComponent from '@/components/common/Button';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { INodeProps } from '@/models';
import useRevealChildren from '../../hooks/useRevealChildren';

const RevealActions: React.FC<INodeProps> = ({ node }) => {
	const { toggleRevealChildren } = useRevealChildren();

	return (
		<ButtonComponent
			onClick={() => toggleRevealChildren({ nodeId: node.id })}
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
