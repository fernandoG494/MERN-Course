import React from 'react';
import {
    Grid,
    TextField,
    Typography,
    Button,
    Link
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import AuthLayout from '../layout/AuthLayout';

export default function RegisterPage() {
    return (
        <AuthLayout title='Register'>
            <form>
                <Grid container>
                    <Grid item xs={ 12 } sx={{ mt: 2 }}>
                        <TextField
                            label='Nombre completo'
                            type='text'
                            placeholder='Nombre completo'
                            fullWidth
                        >
                        </TextField>
                    </Grid>
                    <Grid item xs={ 12 } sx={{ mt: 2 }}>
                        <TextField
                            label='Correo electrónico'
                            type='email'
                            placeholder='user@email.com'
                            fullWidth
                        >
                        </TextField>
                    </Grid>

                    <Grid item xs={ 12 } sx={{ mt: 2 }}>
                        <TextField
                            label='Contraseña'
                            type='password'
                            placeholder='Contraseña'
                            fullWidth
                        >
                        </TextField>
                    </Grid>

                    <Grid
                        container
                        spacing={ 2 }
                        sx={{ mb: 2, mt: 1 }}
                    >
                        <Grid item xs={ 12 } sm={ 12 }>
                            <Button variant='contained' fullWidth>
                                Crear cuenta
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid
                        container
                        direction='row'
                        justifyContent='end'
                    >
                        <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
                        <Link color='inherit' to='/auth/login' component={RouterLink}>
                            Ingresar
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
    );
};
