import JournalPage from '../pages/JournalPage.jsx';
import { Routes, Navigate, Route } from 'react-router-dom';

export const JournalRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<JournalPage />} />
            <Route path="/*" element={<Navigate to='/' />} />
        </Routes>
    );
};
