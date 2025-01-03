import React from 'react';
import { useNode } from '../../hooks';
import AddIcon from '@mui/icons-material/Add';
import ButtonComponent from '@/components/common/Button';
import { INodeProps } from '@/models';

const CreateActions: React.FC<INodeProps> = ({ node }) => {
	const { handleAddNodeClick, enableEdit } = useNode();

	return (
		<ButtonComponent
			onClick={() => handleAddNodeClick({ node })}
			display={enableEdit}
			variant="contained"
			title="Crear nodo"
		>
			<AddIcon color="secondary" sx={{ fontSize: '12px' }} />
		</ButtonComponent>
	);
};

export default CreateActions;
