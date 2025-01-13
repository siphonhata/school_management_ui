import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AdminDashboard, AuthLayout, HomePage } from './components';
import PrivateRoute from './ProtectedRoute';
import ImageUpload from './components/testFile';
export const api_url = process.env.REACT_APP_API_URL

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/test" element={<ImageUpload />} />
        <Route path="/signin" element={<AuthLayout />} />
        <Route path="/register" element={<AuthLayout />} />
        <Route path="/verify-account" element={<AuthLayout />} />
        <Route path="/forgot-password" element={<AuthLayout />} />
        <Route path="/reset-password" element={<AuthLayout />} />
        <Route path="/dashboard/*" element={<AdminDashboard />} />
        {/* <Route element={<PrivateRoute />}>
          <Route path="/dashboard/*" element={<AdminDashboard />} />
        </Route> */}
      </Routes>
    </Router>
  );
}

export default App;
