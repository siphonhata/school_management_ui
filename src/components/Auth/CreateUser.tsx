import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const SignUp: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [role, setRole] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle sign-up logic here
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

            {/* Sign Up Form */}
            <div className="bg-white p-6 rounded-lg shadow-lg z-20 w-full max-w-md relative">
                <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
                <form onSubmit={handleSubmit}>


                    {/* First Name */}
                    <div className="mb-4">
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name<span className='m-1 text-md font-bold text-red-400'>*</span></label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                    </div>

                    {/* Last Name */}
                    <div className="mb-4">
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name<span className='m-1 text-md font-bold text-red-400'>*</span></label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                    </div>

                    {/* Role */}
                    <div className="mb-4">
                        <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role<span className='m-1 text-md font-bold text-red-400'>*</span></label>
                        <input
                            type="text"
                            id="role"
                            name="role"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email<span className='m-1 text-md font-bold text-red-400'>*</span></label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                    </div>


                    {/* Password */}
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password<span className='m-1 text-md font-bold text-red-400'>*</span></label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="mb-4">
                        <button type="submit" className="w-full hover:bg-blue-500 text-white px-3 py-2 rounded-md bg-blue-700">
                            Sign Up
                        </button>
                    </div>

                    {/* Error Message */}
                    {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
                </form>

                {/* Link to Login Page */}
                <p className="mt-4 text-center text-sm text-gray-600">
                    Already have an account? <Link to="/signin" className="text-blue-500 hover:underline">Login</Link>
                </p>
            </div>
        </div>
    );
};

