import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api_url } from "../../App";
import { FaEye, FaEyeSlash } from 'react-icons/fa';


export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState({ message: "", visible: false });
  const [passwordVisible, setPasswordVisible] = useState(false);

  const nav = useNavigate();
  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (!email || !password) {
      setErrorMessage({ message: "Please fill in all fields", visible: true });
      return;
    }
    try {
      //@ts-ignore
      const response = await axios.post(`${api_url}/login`, {
        email,
        password,
      });

      if (response?.data.success) {
        if (response.data.token) {
          localStorage.setItem("_Ey_", response.data.token);
          nav("/dashboard/dashboard");
        }
      }
      else {
        setErrorMessage({ message: response?.data.message, visible: true });
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 404) {
          setErrorMessage({ message: "User does not exist", visible: true });
        } else if (error.response?.status === 401) {
          setErrorMessage({ message: "Invalid credentials.", visible: true });
        } else {
          setErrorMessage({ message: "An error occurred. Please try again.", visible: true });
        }
      } else {
        setErrorMessage({ message: "An unexpected error occurred.", visible: true });
      }
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  useEffect(() => {
    if (errorMessage.visible) {
      const timer = setTimeout(() => {
        setErrorMessage(prev => ({ ...prev, visible: false }));
      }, 4000);

      return () => clearTimeout(timer);
    }
  },  [errorMessage]);

  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="m-20 p-6 rounded-lg z-20 w-full">
        <h1 className="text-center text-2xl font-bold mb-4">Login</h1>
        {/* Basic Error Message Display */}
        {errorMessage.visible && (
          <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
            {errorMessage.message}
          </div>
        )}
        
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
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password<span className="m-1 text-md font-bold text-red-400">*</span>
            </label>
            <div className="relative">
              <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              <span
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
              >
                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>
          <Link to="/forgot-password" className="text-gray-900 hover:underline">
            Forgot Password
          </Link>
          <div className="my-4">
            <button
              type="submit"
              className="w-full hover:bg-gray-800 text-white px-3 py-2 rounded-md bg-gray-900"
            >
              Login
            </button>
          </div>
        </form>
        <p className="text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link to="/register" className="text-gray-900 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};
