import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { api_url } from "../../App";

export const RegisterSchoolForm = () => {
  const [formData, setFormData] = useState({
    schoolName: "",
    schoolEmail: "",
    schoolPhoneNumber: "",
    websiteLink: "",
    missionStatement: "",
    representativeName: "",
    representativeLastName: "",
    representativeEmail: "",
    representativePhoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [schoolPhoneNumber, setSchoolPhoneNumber] = useState('');
  const [repPhoneNumber, setRepPhoneNumber] = useState('');
  const navigate = useNavigate();

  const handleChange = (e: any) => {
    const { name, value } = e.target; 
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleChangePhoneNumber = (setter: any) => (e: any) => {
    const value = e.target.value.replace(/[^0-9]/g, '').slice(0, 10);
    setter(value);
  };

  const generateDisplayValue = (phoneNumber: any) => {
    const numUnderscores = 10 - phoneNumber.length;
    return '_'.repeat(numUnderscores) + phoneNumber;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    
    setErrorMessage("");

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }
    setIsLoading(true);

    try {
      
      const response = await axios.post(`${api_url}/registerAccount`, formData);
      console.log(response.data);
      if (response.data.success) {
        navigate(`/verify-account?email=${formData.representativeEmail}`);
      } else {
        setErrorMessage(
          response.data.message || "Registration failed. Please try again."
        );
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("Registration failed. Please try again.");
    } finally {
      setIsLoading(false);
    }

   
  };

  

  return (
    <div className="shadow-lg px-8 py-4">
      <h2 className="text-2xl font-bold mb-8 text-center">
        Register Your School
      </h2>
      {errorMessage && (
        <div className="mb-4 text-red-500 text-center">{errorMessage}</div>
      )}
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="flex gap-4">
          <div className="mb-4 w-full">
            <label className="block text-sm font-medium text-gray-700">
              Institute Name
              <span className="m-1 text-md font-bold text-red-400">*</span>
            </label>
            <input
              type="text"
              name="schoolName"
              value={formData.schoolName}
              onChange={handleChange}
              placeholder="School Name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="mb-4 w-full">
            <label className="block text-sm font-medium text-gray-700">
              Institute Email
              <span className="m-1 text-md font-bold text-red-400">*</span>
            </label>{" "}
            <input
              type="email"
              name="schoolEmail"
              value={formData.schoolEmail}
              onChange={handleChange}
              placeholder="School Email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="mb-4 w-full">
            <label className="block text-sm font-medium text-gray-700">
              Institute Phone Number
              <span className="m-1 text-md font-bold text-red-400">*</span>
            </label>
            <input
              type="tel"
              name="schoolPhoneNumber"
              value={generateDisplayValue(schoolPhoneNumber)}
              onChange={handleChangePhoneNumber(setSchoolPhoneNumber)}
              placeholder="School Phone Number"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="mb-4 w-full">
            <label className="block text-sm font-medium text-gray-700">
              Institute Webste Link
            </label>{" "}
            <input
              type="text"
              name="websiteLink"
              value={formData.websiteLink}
              onChange={handleChange}
              placeholder="Website Link"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Mission Statement
            <span className="m-1 text-md font-bold text-red-400">*</span>
          </label>{" "}
          <textarea
            name="missionStatement"
            value={formData.missionStatement}
            onChange={handleChange}
            placeholder="Mission Statement"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            rows={4}
          />
        </div>
        <h2 className="text-lg font-semibold mb-4 text-gray-900">
          Representative Information
        </h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Representative Name
            <span className="m-1 text-md font-bold text-red-400">*</span>
          </label>
          <input
            type="text"
            name="representativeName"
            value={formData.representativeName}
            onChange={handleChange}
            placeholder="Representative Name"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Representative Last Name
            <span className="m-1 text-md font-bold text-red-400">*</span>
          </label>
          <input
            type="text"
            name="representativeLastName"
            value={formData.representativeLastName}
            onChange={handleChange}
            placeholder="Representative Last Name"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Representative Email
            <span className="m-1 text-md font-bold text-red-400">*</span>
          </label>{" "}
          <input
            type="email"
            name="representativeEmail"
            value={formData.representativeEmail}
            onChange={handleChange}
            placeholder="Representative Email"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Representative Phone Number
            <span className="m-1 text-md font-bold text-red-400">*</span>
          </label>{" "}
          <input
            type="tel"
            name="representativePhoneNumber"
            value={generateDisplayValue(repPhoneNumber)}
            onChange={handleChangePhoneNumber(setRepPhoneNumber)}
            placeholder="Representative Phone Number"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
       
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Password
            <span className="m-1 text-md font-bold text-red-400">*</span>
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="********"
            required
            value={formData.password}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        {/* Confirm Password */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Confirm Password
            <span className="m-1 text-md font-bold text-red-400">*</span>
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="********"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full text-white px-3 py-2 rounded-md bg-gray-900 ${
              isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-800"
            }`}
          >
            {isLoading ? "Registering..." : "Register"}
          </button>
        </div>

        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/signin" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};
