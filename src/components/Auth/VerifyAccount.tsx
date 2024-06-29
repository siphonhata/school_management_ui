import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { api_url } from '../../App';

export const VerifyAccount = () => {
    const [otpDigits, setOtpDigits] = useState<string[]>(['', '', '', '', '', '']);
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [timer, setTimer] = useState<number>(600); // 10 minutes in seconds
    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const email = searchParams.get('email');
    const otpInputRefs = useRef<(HTMLInputElement | null)[]>(new Array(6).fill(null));

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const handleInputChange = (index: number, value: string) => {
        const newOtpDigits = [...otpDigits];
        newOtpDigits[index] = value;
        setOtpDigits(newOtpDigits);

        // Move focus to the next input field if current input is not empty
        if (value && index < otpDigits.length - 1 && otpInputRefs.current[index + 1]) {
            otpInputRefs.current[index + 1]?.focus();
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setErrorMessage('');

        try {
            const otp = otpDigits.join(''); // Combine all digits into one OTP string
            const response = await axios.post(`${api_url}/verifyOTP`, { email, otp });

            if (!response.data.success) {
                throw new Error(response.data.message || 'Failed to verify OTP. Please try again.');
            }
            navigate('/signin');
        } catch (error) {
            console.log(error)
            setErrorMessage((error as Error).message);
        } finally {
            setIsLoading(false);
        }
    };

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <div className="flex justify-center items-center h-screen bg-white">
            <div className="m-20 p-6 rounded-lg z-20 w-full">
                <h1 className="text-center text-2xl font-bold mb-4">Verify Account</h1>
                <p className="text-center text-sm text-gray-600 mb-2">
                    We have sent a one-time password (OTP) to your email address{' '}
                    <span className="font-medium text-gray-800">{email}.</span>
                </p>
                <p className="text-center text-sm text-gray-600 mb-4">
                    Please check your email and enter the OTP below to verify your account.
                </p>
                <form onSubmit={handleSubmit}>
                    <div className="flex justify-center mb-4 space-x-2">
                        {otpDigits.map((digit, index) => (
                            <input
                                key={index}
                                type="text"
                                value={digit}
                                onChange={(e) => handleInputChange(index, e.target.value)}
                                maxLength={1}
                                ref={(el) => {
                                    otpInputRefs.current[index] = el;
                                }}
                                autoFocus={index === 0}
                                className="w-12 h-12 text-2xl text-center border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            />
                        ))}
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
                {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
                <p className="text-center text-sm text-gray-600">
                    Didn't receive an OTP?{' '}
                    <Link to="/resend-otp" className="text-gray-900 hover:underline">
                        Resend OTP
                    </Link>
                </p>
                <p className="text-center text-sm text-gray-600 mt-4">
                    OTP expires in: <span className="font-medium text-gray-800">{formatTime(timer)}</span>
                </p>
            </div>
        </div>
    );
};
