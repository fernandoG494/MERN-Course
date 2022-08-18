import React from 'react';
import Navbar from '../components/Navbar';
import SideBar from '../components/SideBar';
import { Box, Toolbar } from '@mui/material';

const drawerWidth = 240;

const JournalLayout = ({ children }) => {
    return (
        <Box
            sx={{ display: 'flex' }}
            className='animate__animated animate__fadeIn animate__faster'
        >
            <Navbar drawerWidth={ drawerWidth } />
            <SideBar drawerWidth={ drawerWidth }/>
            <Box
                component='main'
                sx={{ flexGrow: 1, p: 3}}
            >
                <Toolbar />
                { children }
            </Box>
        </Box>
    );
};

export default JournalLayout;
