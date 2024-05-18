import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AdminDashboard, HomePage, Login, SignUp } from './components';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard/*" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
