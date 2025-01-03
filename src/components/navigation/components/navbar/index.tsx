import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import OpenSideBarButton from '../open-sidebar-button/OpenSidebarButton';
import PageNavigation from '../page-navigation';

const NavBar: React.FC = () => {
	return (
		<AppBar
			component="nav"
			sx={{
				alignItems: 'left',
			}}
		>
			<Toolbar>
				<OpenSideBarButton />
				<Box
					sx={{
						display: { xs: 'none', sm: 'flex' },
						flexWrap: 'nowrap',
					}}
				>
					<PageNavigation />
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default NavBar;
