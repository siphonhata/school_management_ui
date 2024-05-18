import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { DashboardLayout } from '.';

export const Dashboard = () => {
    return (
        <Routes>
            <Route path="home" element={<h1>Home Component</h1>} />
            <Route path="profile" element={<h1>Profile Component</h1>} />
            <Route path="settings" element={<h1>settings Component</h1>} />
            <Route index element={<h1>Default Component</h1>} />
        </Routes>
    );
};

