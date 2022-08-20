import React from 'react';
import { IconButton } from '@mui/material';
import { AddOutlined } from '@mui/icons-material';
import JournalLayout from '../layout/JournalLayout';
import { useDispatch, useSelector } from 'react-redux';
import { startNewNode } from '../../store/journal/thunks';
import NothingSelectedView from '../views/NothingSelectedView';
import NoteView from '../views/NoteView';

const JournalPage = () => {
    const dispatch = useDispatch();
    const { isSaving, active } = useSelector(state => state.journal);

    const onClickNewNote = () => {
        dispatch(startNewNode());
    };

    return (
        <JournalLayout>
            {
                (!!active) ? <NoteView /> : <NothingSelectedView />
            }

            <IconButton
                onClick={onClickNewNote}
                size='small'
                disabled={ isSaving }
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
