import Box from '@mui/material/Box';
import SideBar from './components/sidebar';
import NavBar from './components/navbar';

const Menu = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <NavBar />
            <SideBar />
        </Box>
    );
};

export default Menu;