import { useState } from 'react';
import { Link } from 'react-router-dom';

export const RegisterSchoolForm = () => {
    const [formData, setFormData] = useState({
        schoolName: '',
        schoolEmail: '',
        schoolPhoneNumber: '',
        websiteLink: '',
        missionStatement: '',
        representativeName: '',
        representativeEmail: '',
        representativePhoneNumber: ''
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // Add logic to handle form submission
        console.log(formData);
    };

    return (
        <div className="flex h-screen w-full">
            {/* Left side with background image and text */}
            <div className="hidden md:block md:w-1/2 bg-cover bg-gray-600 bg-center h-full">
                {/* Replace the URL with your actual background image */}
                <img src="https://media.licdn.com/dms/image/D5612AQEN4dV-DgLwNA/article-cover_image-shrink_600_2000/0/1690814547641?e=2147483647&v=beta&t=qU7ECD33uYKDYm0TVqj3p-Hcia9t4n_i7ztjUnATawM"
                    alt="Background" className="w-full h-full object-cover opacity-50" />
            </div>
            {/* Right side with form */}
            <div className="w-full bg-white overflow-y-auto">
                <div className="shadow-lg px-8 py-4">
                    <h2 className="text-2xl font-bold mb-8 text-center">Register Your School</h2>
                    <form className="w-full" onSubmit={handleSubmit}>
                        <div className='flex gap-4'>
                            <div className="mb-4 w-full">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Institute Name
                                    <span className="m-1 text-md font-bold text-red-400">*</span>
                                </label><input
                                    type="text"
                                    name="schoolName"
                                    value={formData.schoolName}
                                    onChange={handleChange}
                                    placeholder="School Name"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                /></div>
                            <div className="mb-4 w-full">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Institute Email
                                    <span className="m-1 text-md font-bold text-red-400">*</span>
                                </label> <input
                                    type="email"
                                    name="schoolEmail"
                                    value={formData.schoolEmail}
                                    onChange={handleChange}
                                    placeholder="School Email"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                /></div></div>
                        <div className="flex gap-4">
                            <div className="mb-4 w-full">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Institute Phone Number
                                    <span className="m-1 text-md font-bold text-red-400">*</span>
                                </label><input
                                    type="tel"
                                    name="schoolPhoneNumber"
                                    value={formData.schoolPhoneNumber}
                                    onChange={handleChange}
                                    placeholder="School Phone Number"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                /></div>
                            <div className="mb-4 w-full">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Institute Webste Link
                                </label>  <input
                                    type="text"
                                    name="websiteLink"
                                    value={formData.websiteLink}
                                    onChange={handleChange}
                                    placeholder="Website Link"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                /></div></div>
                        <div className="mb-4">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Mission Statement
                                <span className="m-1 text-md font-bold text-red-400">*</span>
                            </label> <textarea
                                name="missionStatement"
                                value={formData.missionStatement}
                                onChange={handleChange}
                                placeholder="Mission Statement"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                rows={4}
                            /></div>
                        <h2 className="text-lg font-semibold mb-4 text-gray-900">Representative Information</h2>
                        <div className="mb-4">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Representative Name
                                <span className="m-1 text-md font-bold text-red-400">*</span>
                            </label><input
                                type="text"
                                name="representativeName"
                                value={formData.representativeName}
                                onChange={handleChange}
                                placeholder="Representative Name"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            /></div>
                        <div className="mb-4">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Representative Email
                                <span className="m-1 text-md font-bold text-red-400">*</span>
                            </label> <input
                                type="email"
                                name="representativeEmail"
                                value={formData.representativeEmail}
                                onChange={handleChange}
                                placeholder="Representative Email"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            /></div>
                        <div className="mb-4">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Representative Phone Number
                                <span className="m-1 text-md font-bold text-red-400">*</span>
                            </label>   <input
                                type="tel"
                                name="representativePhoneNumber"
                                value={formData.representativePhoneNumber}
                                onChange={handleChange}
                                placeholder="Representative Phone Number"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            /></div>
                        {/* Password */}
                        <div className="mb-4">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Password
                                <span className="m-1 text-md font-bold text-red-400">*</span>
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder='*****'
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        </div>
                        {/* Password */}
                        <div className="mb-4">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Confirm Password
                                <span className="m-1 text-md font-bold text-red-400">*</span>
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder='*****'
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
                        >
                            Register
                        </button>

                        {/* Link to Login Page */}
                        <p className="mt-4 text-center text-sm text-gray-600">
                            Already have an account?{" "}
                            <Link to="/signin" className="text-blue-500 hover:underline">
                                Login
                            </Link>
                        </p>
                    </form>
                </div>
            </div >
        </div >
    );

};

