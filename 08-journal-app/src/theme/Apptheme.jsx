import React from 'react';
import { purpleTheme } from './';
import { ThemeProvider } from '@emotion/react';
import CssBaseLine from '@mui/material/CssBaseline';

const Apptheme = ({ children }) => {
    return (
        <ThemeProvider theme={purpleTheme}>
            <CssBaseLine />
            {children}
        </ThemeProvider>
    )
}

export default Apptheme;
