import React from 'react';
import { Button } from '@mui/material';

interface IButtonComponentProps {
	onClick: () => void;
	display: boolean;
}
const ButtonComponent: React.FC<React.PropsWithChildren & IButtonComponentProps> = ({
	children,
	onClick,
	display,
}) => {
	return (
		<Button
			onClick={onClick}
			variant="contained"
			sx={{
				display: display ? 'flex' : 'none',
				minWidth: '30px',
				padding: '0',
				margin: '0',
			}}
		>
			{children}
		</Button>
	);
};

export default ButtonComponent;
