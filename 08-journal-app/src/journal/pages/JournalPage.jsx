import React from 'react';
import { AddOutlined } from '@mui/icons-material';
import JournalLayout from '../layout/JournalLayout';
import { IconButton } from '@mui/material';
import NothingSelectedView from '../views/NothingSelectedView';

const JournalPage = () => {
    return (
        <JournalLayout>
            <NothingSelectedView />

            <IconButton
                size='small'
                sx={{
                    color: 'white',
                    backgroundColor: 'error.main',
                    ':hover': {
                        backgroundColor: 'error.main',
                        opacity: 0.9,
                    },
                    position: 'fixed',
                    right: 50,
                    bottom: 50,
                }}
            >
                <AddOutlined sx={{ fontSize: 30 }}/>
            </IconButton>
        </JournalLayout>
    );
};

export default JournalPage;
