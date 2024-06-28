import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const ResetPassword = () => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // Handle forgot password logic here
    };

    return (
        <div className="flex justify-center items-center h-screen bg-white">
            <div className="m-20 p-6 rounded-lg z-20 w-full">
                <h1 className="text-center text-2xl font-bold mb-4">Reset Password</h1>
                <p className="text-center text-sm text-gray-600 mb-4">
                    Please enter your new password below.
                </p>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label
                            htmlFor="newPassword"
                            className="block text-sm font-medium text-gray-700"
                        >
                            New Password<span className="m-1 text-md font-bold text-red-400">*</span>
                        </label>
                        <input
                            type="text"
                            id="newPassword"
                            name="newPassword"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="newPassword"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Confirm Password<span className="m-1 text-md font-bold text-red-400">*</span>
                        </label>
                        <input
                            type="text"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <button
                            type="submit"
                            className="w-full hover:bg-gray-800 text-white px-3 py-2 rounded-md bg-gray-900"
                        >
                            Submit
                        </button>
                    </div>
                </form>
                {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
                
            </div>
        </div>
    );
};

