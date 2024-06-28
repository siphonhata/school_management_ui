import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { api_url } from '../../App';
import axios from 'axios';

export const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        // Handle forgot password logic here

        try {
            const response = await axios.post(`${api_url}/forgot-password`, {email});
            
            if (response.data.success) {
            //   setLoading(false);
            //   setIsOpen(!isOpen);
            //   nav("/dashboard/profile");
            console.log("EMAIL SENT")
            }
          } 
          catch (error) {
            setErrorMessage("Error sending email");
            console.error("Error sending email:", error);
          }
        };
    

    return (
        <div className="flex justify-center items-center h-screen bg-white">
            <div className="m-20 p-6 rounded-lg z-20 w-full">
                <h1 className="text-center text-2xl font-bold mb-4">Forgot Password</h1>
                <p className="text-center text-sm text-gray-600 mb-4">
                    Please enter your email address below. We will send you a link to reset your password.
                </p>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Email<span className="m-1 text-md font-bold text-red-400">*</span>
                        </label>
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
                    <div className="mb-4">
                        <button
                            type="submit"
                            className="w-full hover:bg-gray-800 text-white px-3 py-2 rounded-md bg-gray-900"
                        >
                            Send Reset Link
                        </button>
                    </div>
                </form>
                {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
                <p className="text-center text-sm text-gray-600">
                    Remember your password?{" "}
                    <Link to="/signin" className="text-gray-900 hover:underline">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

