import React from 'react';
import { ThemeProvider } from '@emotion/react';
import CssBaseLine from '@mui/material/CssBaseline';
import { purpleTheme } from './';

const Apptheme = ({ children }) => {
    return (
        <ThemeProvider theme={purpleTheme}>
            <CssBaseLine />
            {children}
        </ThemeProvider>
    )
}

export default Apptheme;
