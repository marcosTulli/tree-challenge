import React from 'react';
import { Box, Typography } from '@mui/material';
import Page from '@/components/common/page';

const Home: React.FC = () => {
	return (
		<Page>
			<Box
				sx={{
					fontSize: '2rem',
					fontWeight: '700',
					color: 'secondary.main',
				}}
			>
				<Typography variant="h3">Home</Typography>
			</Box>
		</Page>
	);
};

export default Home;
