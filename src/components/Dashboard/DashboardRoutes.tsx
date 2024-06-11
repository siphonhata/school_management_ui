import React from 'react';
import { Route, Routes } from 'react-router-dom';
export const Dashboard = ({ navItems }: any) => {
  
    return (
        <Routes>
            {navItems.map((item: any) => (
                <Route key={item.path} path={item.path} element={item.Component} />
            ))}
        </Routes>
    );
};

