import React from 'react';
import { Box, Typography } from '@mui/material';
import Page from '@/components/common/page';

const Lorem: React.FC = () => {
    return (
        <Page>
            <Box
                sx={{
                    fontSize: '2rem',
                    fontWeight: '700',
                    color: 'secondary.main'
                }}
            >
                <Typography>Lorem</Typography>
            </Box>
        </Page>
    );
};

export default Lorem;
