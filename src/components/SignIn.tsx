import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    // Simple validation (replace with your actual logic)
    if ( !email || !password) {
      setErrorMessage('Please fill in all fields');
      return;
    }

    // Validate email format (basic check)
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMessage('Invalid email format');
      return;
    }
    console.log(email, password)
    try {
      const response = await fetch('http://192.168.0.131:8080/school_management/UserLogin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.success) {
        // Login successful, redirect or display success message
        console.log('Login successful');
        // Handle successful login (e.g., navigate to a different page)
      } else {
        setErrorMessage(data.message);
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setErrorMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div className="form-group">
          <button type="submit" className="bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-700">
            Login
          </button>
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default Login;
