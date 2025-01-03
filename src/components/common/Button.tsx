import React from 'react';
import { Button } from '@mui/material';

interface IButtonComponentProps {
	onClick: () => void;
	display: boolean;
	variant: 'outlined' | 'contained' | 'text';
}
const ButtonComponent: React.FC<React.PropsWithChildren & IButtonComponentProps> = ({
	children,
	onClick,
	display,
	variant,
}) => {
	return (
		<Button
			onClick={onClick}
			variant={variant}
			sx={{
				display: display ? 'flex' : 'none',
				minWidth: '2px',
				minHeight: '2px',
				p: '5px',
				m: '0',
			}}
		>
			{children}
		</Button>
	);
};

export default ButtonComponent;
