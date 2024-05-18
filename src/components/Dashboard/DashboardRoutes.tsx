import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { ProfilePage } from '../Profile';
export const Dashboard = ({ navItems }: any) => {
    console.log("navItems", navItems)
    return (
        <Routes>
            {navItems.map((item: any) => (
                <Route key={item.path} path={item.path} element={item.Component} />
            ))}
        </Routes>
    );
};

