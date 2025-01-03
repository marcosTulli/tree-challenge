import React from 'react';
import { Box, Container } from '@mui/material';
import Navigation from '@/components/navigation';

const Page: React.FC<React.PropsWithChildren> = ({ children }) => (
	<Box
		sx={{
			height: '100vh',
			display: 'flex',
			flexDirection: 'column',
			gap: '3rem',
		}}
	>
		<Navigation />
		<Box
			sx={{
				flex: 1,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor: 'defaultBackground.main',
				pt: '1rem',
			}}
		>
			<Container sx={{ width: '100%', height: '100%', p: '2rem' }}>{children}</Container>
		</Box>
	</Box>
);

export default Page;
