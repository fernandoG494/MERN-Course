import React from 'react';
import { SaveOutlined } from '@mui/icons-material';
import ImageGallery from '../components/ImageGallery';
import { Button, Grid, TextField, Typography } from '@mui/material';

const NoteView = () => {
    return (
        <Grid
            className='animate__animated animate__fadeIn animate__faster'
            container
            direction='row'
            justifyContent='space-between'
            alignItems='center'
            sx={{ mb: 1 }}
        >
            <Grid item>
                <Typography
                    variant='h5'
                    fontSize={ 39 }
                    fontWeight='light'
                >
                    28 de agosto, 2022
                </Typography>
            </Grid>
            <Grid item>
                <Button color='primary' sx={{ padding: 1 }}>
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }}/>
                    Guardar
                </Button>
            </Grid>
            <Grid container>
                <TextField
                    type='text'
                    variant='filled'
                    fullWidth
                    placeholder='Escribe una nota'
                    label='Título'
                    sx={{ border: 'none', mb: 1 }}
                />

                <TextField
                    type='text'
                    variant='filled'
                    fullWidth
                    multiline
                    placeholder='Escribe una nota'
                    minRows={ 5 }
                />
            </Grid>

            <ImageGallery />
        </Grid>
    );
};

export default NoteView;
