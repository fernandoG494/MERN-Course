import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './routes';

const CalendarApp = () => {
    return (
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    );
};

export default CalendarApp;
