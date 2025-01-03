import React from 'react';
import { Box } from '@mui/material';
import { useNode } from '../../hooks';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ButtonComponent from '@/components/common/Button';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { INode } from '@/models';

interface INodeButtonsProps {
	node: INode;
}

const Actions: React.FC<INodeButtonsProps> = ({ node }) => {
	const { id } = node;
	const {
		handleAddNodeClick,
		handleRemoveNodeClick,
		toggleReveal,
		isCollapsed,
		hasChildren,
		enableEdit,
	} = useNode();

	const isParent = id === 'root';

	return (
		<Box sx={{ display: 'flex', gap: '0.8rem', paddingLeft: '1rem' }}>
			<ButtonComponent
				onClick={() => handleRemoveNodeClick({ node })}
				display={enableEdit && !isParent}
			>
				<RemoveIcon color="secondary" sx={{ width: '15px' }} />
			</ButtonComponent>
			<ButtonComponent onClick={() => handleAddNodeClick({ node })} display={enableEdit}>
				<AddIcon color="secondary" sx={{ width: '15px' }} />
			</ButtonComponent>
			{hasChildren &&
				(isCollapsed ? (
					<ButtonComponent onClick={toggleReveal} display={true}>
						<ExpandLessIcon color="secondary" sx={{ width: '15px' }} />
					</ButtonComponent>
				) : (
					<ButtonComponent onClick={toggleReveal} display={true}>
						<ExpandMoreIcon color="secondary" sx={{ width: '15px' }} />
					</ButtonComponent>
				))}
		</Box>
	);
};

export default Actions;
