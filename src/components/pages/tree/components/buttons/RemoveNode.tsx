import React from 'react';
import { useNode } from '../../hooks';
import RemoveIcon from '@mui/icons-material/Remove';
import ButtonComponent from '@/components/common/Button';
import { INodeProps } from '@/models';

const RemoveNode: React.FC<INodeProps> = ({ node }) => {
	const { id } = node;
	const { handleRemoveNodeClick, enableEdit } = useNode();
	const isParent = id === 'root';

	return (
		<ButtonComponent
			onClick={() => handleRemoveNodeClick({ node })}
			display={!isParent && enableEdit}
			variant={'contained'}
			title="Eliminar nodo"
		>
			<RemoveIcon color="secondary" sx={{ fontSize: '12px' }} />
		</ButtonComponent>
	);
};

export default RemoveNode;
