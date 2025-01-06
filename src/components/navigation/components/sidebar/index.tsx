import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import useSideBar from '../../hooks/useSidebar';
import PageNavigation from '../page-navigation';

interface Props {
	window?: () => Window;
}

const SideBar: React.FC<Props> = ({ window }) => {
	const { isSideBarOpen, toggleSideBar } = useSideBar();
	const container = window !== undefined ? () => window().document.body : undefined;

	return (
		<Drawer
			container={container}
			open={isSideBarOpen}
			onClose={toggleSideBar}
			ModalProps={{ keepMounted: true }}
			sx={{
				display: { xs: 'flex', sm: 'none' },
				'& .MuiDrawer-paper': {
					boxSizing: 'border-box',
					width: 80,
					overflow: 'hidden',
				},
			}}
		>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					paddingTop: '2rem',
					backgroundColor: 'primary.main',
					gap: '0.5rem',
					height: '100%',
				}}
			>
				<PageNavigation />
			</Box>
		</Drawer>
	);
};

export default SideBar;
