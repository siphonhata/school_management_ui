import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
export const Dashboard = ({ navItems }: any) => {
    return (
        <Routes>
            {navItems.map((item: any) => (
                <Route key={item.path} path={item.path} element={item.Component} />
            ))}
        </Routes>
    );
};

