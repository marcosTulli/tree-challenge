import React from 'react';
import { Box } from '@mui/material';
import Navigation from '@/components/navigation';

const Page: React.FC<React.PropsWithChildren> = ({ children }) => {
	return (
		<Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
			<Navigation />
			<Box
				sx={{
					flex: 1,
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					backgroundColor: 'defaultBackground.main',
					paddingTop: '1rem',
				}}
			>
				{children}
			</Box>
		</Box>
	);
};

export default Page;
