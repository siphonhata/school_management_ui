import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AdminDashboard, HomePage, Login, RegisterSchoolForm, SignUp } from './components';
import PrivateRoute from './ProtectedRoute';
import ImageUpload from './components/testFile';
export const api_url = process.env.REACT_APP_API_URL

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/test" element={<ImageUpload />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/register" element={<RegisterSchoolForm />} />

        <Route element={<PrivateRoute />}>
          <Route path="/dashboard/*" element={<AdminDashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
