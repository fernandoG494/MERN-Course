import { AddOutlined } from '@mui/icons-material';
import { IconButton, Typography } from '@mui/material';
import React from 'react';
import JournalLayout from '../layout/JournalLayout';
import NoteView from '../views/NoteView';
import NothingSelectedView from '../views/NothingSelectedView';

const JournalPage = () => {
    return (
        <JournalLayout>
            {/* <Typography>
                Loren ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography> */}
            <NothingSelectedView />
            {/* <NoteView /> */}

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
