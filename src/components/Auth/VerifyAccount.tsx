import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { api_url } from '../../App';

export const VerifyAccount = () => {
    const [otp, setOtp] = useState<string>(''); // Default email for now
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const email = searchParams.get('email');


    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setIsLoading(true);
        setErrorMessage('');
        // Handle OTP verification logic here

        try
        {
            const response = await axios.post(`${api_url}/verifyOTP`, { email, otp });

            if (!response.data.success) {
                throw new Error(response.data.message || 'Failed to verify OTP. Please try again.');
            }
            navigate('/signin');
        }
        catch (error) {
            setErrorMessage((error as Error).message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-white">
            <div className="m-20 p-6 rounded-lg z-20 w-full">
                <h1 className="text-center text-2xl font-bold mb-4">Verify Account</h1>
                <p className="text-center text-sm text-gray-600 mb-2">
                    We have sent a one-time password (OTP) to your email address{" "}
                    <span className="font-medium text-gray-800">{email}.</span></p>
                <p className="text-center text-sm text-gray-600 mb-4" > Please check your email and enter the OTP below to verify your account.
                </p>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                <label
                    htmlFor="otp"
                    className="block text-sm font-medium text-gray-700"
                >
                    Enter OTP<span className="m-1 text-md font-bold text-red-400">*</span>
                </label>
                <input
                    type="text"
                    id="otp"
                    name="otp"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
            </div>
             <div className="mb-4">
                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`w-full text-white px-3 py-2 rounded-md bg-gray-900 ${
                                isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-800'
                            }`}
                        >
                            {isLoading ? 'Verifying...' : 'Verify'}
                        </button>
                    </div>
        </form>
                { errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p> }
    <p className="text-center text-sm text-gray-600">
        Didn't receive an OTP?{" "}
        <Link to="/resend-otp" className="text-gray-900 hover:underline">
            Resend OTP
        </Link>
    </p>
            </div >
        </div >
    );
};
