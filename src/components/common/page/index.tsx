import React from 'react';
import { Box } from '@mui/material';

const Page: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <Box sx={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'defaultBackground.main'
        }}>
            {children}
        </Box>
    );
};

export default Page;
