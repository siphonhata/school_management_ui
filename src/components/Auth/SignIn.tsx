import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api_url } from "../../App";
import { FaEye, FaEyeSlash } from 'react-icons/fa';


export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const nav = useNavigate();
  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (!email || !password) {
      setErrorMessage("Please fill in all fields");
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
          nav("/dashboard");
        }
      } else {
        setErrorMessage(response?.data.message);
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };


  return (
    <div className="relative min-h-screen bg-gray-100 flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      {/* Login Form */}
      <div className="bg-white p-6 rounded-lg shadow-lg z-20 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
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
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
              <span className="m-1 text-md font-bold text-red-400">*</span>
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
          <div className="mb-4">
            <button
              type="submit"
              className="w-full hover:bg-blue-500 text-white px-3 py-2 rounded-md bg-blue-700"
            >
              Login
            </button>
          </div>
        </form>
        {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
        <p className="bottom-4 left-0 right-0 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};
