import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import Page from '@/components/common/page';
import { useNavigate } from 'react-router-dom';

const NotFound: React.FC = () => {
	const navigate = useNavigate();
	return (
		<Page>
			<Box
				sx={{
					fontSize: '2rem',
					fontWeight: '700',
					color: 'secondary.main',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
				}}
			>
				<Typography variant="h3">Page Not Found</Typography>
				<Button
					sx={{
						backgroundColor: 'primary.main',
						color: 'secondary.main',
						marginTop: '2rem',
					}}
					onClick={() => navigate('/')}
				>
					<Typography
						sx={{
							fontSize: '1rem',
						}}
					>
						Go back
					</Typography>
				</Button>
			</Box>
		</Page>
	);
};

export default NotFound;
