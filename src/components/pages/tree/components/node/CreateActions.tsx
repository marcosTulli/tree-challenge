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

const CreateActions: React.FC<INodeButtonsProps> = ({ node }) => {
	const { id } = node;
	const { handleAddNodeClick, handleRemoveNodeClick, enableEdit } = useNode();
	const isParent = id === 'root';

	return (
		<Box sx={{ display: 'flex', gap: '0.8rem', paddingLeft: '1rem' }}>
			{/* REMOVE NODE */}
			<ButtonComponent
				onClick={() => handleRemoveNodeClick({ node })}
				display={enableEdit && !isParent}
				variant={'contained'}
			>
				<RemoveIcon color="secondary" sx={{ fontSize: '12px' }} />
			</ButtonComponent>

			{/* CREATE NODE */}
			<ButtonComponent
				onClick={() => handleAddNodeClick({ node })}
				display={enableEdit}
				variant="contained"
			>
				<AddIcon color="secondary" sx={{ fontSize: '12px' }} />
			</ButtonComponent>
		</Box>
	);
};

export default CreateActions;
