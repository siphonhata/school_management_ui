import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AdminDashboard, HomePage, Login, SignUp } from './components';
import PrivateRoute from './ProtectedRoute';
import ImageUpload from './components/testFile';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/test" element={<ImageUpload />} />
        <Route path="/signup" element={<SignUp />} />

        <Route element={<PrivateRoute />}>
          <Route path="/dashboard/*" element={<AdminDashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
