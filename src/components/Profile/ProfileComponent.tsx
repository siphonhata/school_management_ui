import React, { useEffect, useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { api_url } from '../../App';
import axios from 'axios';
import { ButtonLoader, useFetchUser } from '../Common';
import { useNavigate } from 'react-router-dom';
import { ProfileView, UpdateProfilePicture } from '.';

export const ProfilePage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isAddressOpen, setIsAddressOpen] = useState(false);
    const [isPasswordOpen, setIsPasswordOpen] = useState(false);
    const [isSchoolOpen, setIsSchoolOpen] = useState(false);
    const [loading, setLoading] = useState(false)
    const { user, loading: load  } = useFetchUser();
    const [formData, setFormData] = useState<any>({})

    const nav = useNavigate()

    useEffect(() => {
        if (user) {
            setFormData({
                firstName: user.firstName,
                lastName: user.lastName,
                idNumber: user.idNumber,
                email: user.email,
                phoneNumber: user.phoneNumber,
                bio: user.bio,
                address: user.address,
                password: user.password
            });

        }
    }, [user]);
   
    const handleChange = (e: any, isSecondForm: boolean = false) => {
        const { name, value } = e.target;
       
            setFormData({ ...formData, [name]: value });
        
    };

    const handleSubmit = async (e: any, isSecondForm: boolean = false) => {
        e.preventDefault();
        setLoading(true);
       
        try {
            
            const response = await axios.put(`${api_url}/update`, formData);
            if (response.data.success) {
                setLoading(false);
                setIsOpen(!isOpen)
                nav("/dashboard/profile")
            }
        } catch (error) {
            console.error("Error updating profile:", error);
        }
    };


    return (
       <div className='mt-4 '>
        <ProfileView user={user} loading={load} />

        <div>
        {user && user.role === 'ADMIN' && (
            <div className='flex justify-between bg-gray-800 p-4 text-white text-lg font-bold mb-4 rounded-lg'><p>Edit School Info</p>
                {isSchoolOpen ? <ChevronDownIcon className="w-6 h-6" onClick={() => setIsSchoolOpen(!isSchoolOpen)} /> : <ChevronUpIcon className="w-6 h-6" onClick={() => setIsSchoolOpen(!isSchoolOpen)} />}
            </div>
        )}
        
            {isSchoolOpen && user && user.role === 'ADMIN' && ( <>
                    <form onSubmit={handleSubmit}>
                        <table className="w-full">
                            <tbody>
                                <tr>
                                    {/* First Column */}
                                    <td className="px-4 py-2">
                                        
                                        <div className="mb-4">
                                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Current Password<span className='m-1 text-md font-bold text-red-400'>*</span></label>
                                                <input
                                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                    type="password"
                                                    id="password"
                                                    name="password"
                                                    placeholder="Please enter your current password"
                                                    onChange={handleChange}
                                                />
                                        </div>

                                        <div className="mb-4">
                                            <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">New Password<span className='m-1 text-md font-bold text-red-400'>*</span></label>
                                                <input
                                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                    type="password"
                                                    id="newPassword"
                                                    name="newPassword"
                                                    placeholder="Please enter your new password"
                                                    onChange={handleChange}
                                                />
                                        </div>

                                        <div className="mb-4">
                                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password<span className='m-1 text-md font-bold text-red-400'>*</span></label>
                                                <input
                                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                    type="password"
                                                    id="confirmPassword"
                                                    name="confirmPassword"
                                                    placeholder="Please confirm your password"
                                                    onChange={handleChange}
                                                />
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="flex justify-end mt-4 mb-4 mr-4">
                                <button className='border-2 border-gray-800 bg-gray-800 text-white font-bold p-2 rounded-lg hover:bg-white hover:text-gray-800 flex items-center' type="submit">
                                    {loading && <ButtonLoader />}
                                    Submit
                                </button>
                        </div>
                        {/* <button className='float-right flex border-2 border-gray-800 bg-gray-800 mx-3 text-white font-bold p-2 rounded-lg hover:bg-white hover:text-gray-800 relative' type="submit">
                            <span className="flex items-center">
                                {loading && <div className='flex justify-center items-center text-center'><ButtonLoader /></div>}
                                Submit
                            </span>
                        </button> */}
                    </form></>
        )}
        </div>

            <div>
            <div className='flex justify-between bg-gray-800 p-4 text-white text-lg font-bold mb-4 rounded-lg'><p>Edit User Info</p>
                {isOpen ? <ChevronDownIcon className="w-6 h-6" onClick={() => setIsOpen(!isOpen)} /> : <ChevronUpIcon className="w-6 h-6" onClick={() => setIsOpen(!isOpen)} />}
            </div>
            {
                isOpen && <>
                    <form onSubmit={handleSubmit}>
                        <UpdateProfilePicture />
                        <table className="w-full">
                            <tbody>
                                <tr>
                                    {/* First Column */}
                                    <td className="px-4 py-2">
                                        
                                        <div className="mb-4">
                                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name<span className='m-1 text-md font-bold text-red-400'>*</span></label>
                                                <input
                                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                    type="text"
                                                    id="firstName"
                                                    name="firstName"
                                                    defaultValue={user && user.firstName}
                                                    placeholder="Please enter your first name"
                                                    onChange={handleChange}
                                                />
                                        </div>

                                        <div className="mb-4">
                                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name<span className='m-1 text-md font-bold text-red-400'>*</span></label>
                                                <input
                                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                    type="text"
                                                    id="lastName"
                                                    name="lastName"
                                                    defaultValue={user && user.lastName}
                                                    placeholder="Please enter your last name"
                                                    onChange={handleChange}
                                                />
                                        </div>

                                        <div className="mb-4">
                                            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Biography<span className='m-1 text-md font-bold text-red-400'>*</span></label>
                                                <input
                                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                    type="text"
                                                    id="bio"
                                                    name="bio"
                                                    defaultValue={user && user.bio}
                                                    placeholder="Please enter your biography"
                                                    onChange={handleChange}
                                                />
                                    </div>
                                        
                                    </td>

                                    {/* Second Column */}
                                    <td className="px-4 py-2">
                                        <div className="mb-4">
                                            <label htmlFor="idNumber" className="block text-sm font-medium text-gray-700">ID Number<span className='m-1 text-md font-bold text-red-400'>*</span></label>
                                                <input
                                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                    type="text"
                                                    id="idNumber"
                                                    name="idNumber"
                                                    defaultValue={user && user.idNumber}
                                                    placeholder="Please enter your ID number"
                                                    onChange={handleChange}
                                                />
                                        </div>

                                        <div className="mb-4">
                                            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number<span className='m-1 text-md font-bold text-red-400'>*</span></label>
                                                <input
                                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                    type="text"
                                                    id="phoneNumber"
                                                    name="phoneNumber"
                                                    defaultValue={user && user.phoneNumber}
                                                    placeholder="Please enter your phone number"
                                                    onChange={handleChange}
                                                />
                                        </div>

                                        <div className="mb-4">
                                            <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender<span className='m-1 text-md font-bold text-red-400'>*</span></label>
                                                <input
                                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                    type="text"
                                                    id="gender"
                                                    name="gender"
                                                    defaultValue={user && user.gender}
                                                    readOnly
                                                />
                                        </div>
                                    </td> 
                                </tr>
                            </tbody>
                        </table>
                        <div className="flex justify-end mt-4 mb-4 mr-4">
                                <button className='border-2 border-gray-800 bg-gray-800 text-white font-bold p-2 rounded-lg hover:bg-white hover:text-gray-800 flex items-center' type="submit">
                                    {loading && <ButtonLoader />}
                                    Submit
                                </button>
                        </div>
                    </form></>
            }
            </div>

            <div className='flex justify-between bg-gray-800 p-4 text-white text-lg font-bold mb-4 rounded-lg'><p>Edit User Address</p>
                {isAddressOpen ? <ChevronDownIcon className="w-6 h-6" onClick={() => setIsAddressOpen(!isAddressOpen)} /> : <ChevronUpIcon className="w-6 h-6" onClick={() => setIsAddressOpen(!isAddressOpen)} />}
            </div>
            {
                isAddressOpen && <>
                    <form onSubmit={handleSubmit}>
                        <table className="w-full">
                            <tbody>
                                <tr>
                                    {/* First Column */}
                                    <td className="px-4 py-2">
                                        
                                        <div className="mb-4">
                                            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address<span className='m-1 text-md font-bold text-red-400'>*</span></label>
                                                <input
                                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                    type="text"
                                                    id="address"
                                                    name="address"
                                                    defaultValue={user && user.address}
                                                    placeholder="Please enter your address"
                                                    onChange={handleChange}
                                                />
                                        </div>

                                        <div className="mb-4">
                                            <label htmlFor="city" className="block text-sm font-medium text-gray-700">City<span className='m-1 text-md font-bold text-red-400'>*</span></label>
                                                <input
                                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                    type="text"
                                                    id="city"
                                                    name="city"
                                                    defaultValue={user && user.lastName}
                                                    placeholder="Please enter your city"
                                                    onChange={handleChange}
                                                />
                                        </div>

                                        <div className="mb-4">
                                            <label htmlFor="stateProvince" className="block text-sm font-medium text-gray-700">Province<span className='m-1 text-md font-bold text-red-400'>*</span></label>
                                                <input
                                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                    type="text"
                                                    id="stateProvince"
                                                    name="stateProvince"
                                                    defaultValue={user && user.bio}
                                                    placeholder="Please enter your province"
                                                    onChange={handleChange}
                                                />
                                        </div>
                                        
                                    </td>

                                    {/* Second Column */}
                                    <td className="px-4 py-2">
                                        <div className="mb-4">
                                            <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country<span className='m-1 text-md font-bold text-red-400'>*</span></label>
                                                <input
                                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                    type="text"
                                                    id="country"
                                                    name="country"
                                                    defaultValue={user && user.idNumber}
                                                    placeholder="Please enter your country"
                                                    onChange={handleChange}
                                                />
                                        </div>

                                        <div className="mb-4">
                                            <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">Postal Code<span className='m-1 text-md font-bold text-red-400'>*</span></label>
                                                <input
                                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                    type="text"
                                                    id="postalCode"
                                                    name="postalCode"
                                                    defaultValue={user && user.phoneNumber}
                                                    placeholder="Please enter your postal code"
                                                    onChange={handleChange}
                                                />
                                        </div>

                                        <div className="mb-4">
                                            <label htmlFor="faxNumber" className="block text-sm font-medium text-gray-700">Fax Number<span className='m-1 text-md font-bold text-red-400'>*</span></label>
                                                <input
                                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                    type="text"
                                                    id="faxNumber"
                                                    name="faxNumber"
                                                    defaultValue={user && user.gender}
                                                    readOnly
                                                />
                                        </div>
                                    </td> 
                                </tr>
                            </tbody>
                        </table>
                        <div className="flex justify-end mt-4 mb-4 mr-4">
                                <button className='border-2 border-gray-800 bg-gray-800 text-white font-bold p-2 rounded-lg hover:bg-white hover:text-gray-800 flex items-center' type="submit">
                                    {loading && <ButtonLoader />}
                                    Submit
                                </button>
                        </div>
                    </form></>
            }

            <div className='flex justify-between bg-gray-800 p-4 text-white text-lg font-bold mb-4 rounded-lg'><p>Edit User Password</p>
                {isPasswordOpen ? <ChevronDownIcon className="w-6 h-6" onClick={() => setIsPasswordOpen(!isPasswordOpen)} /> : <ChevronUpIcon className="w-6 h-6" onClick={() => setIsPasswordOpen(!isPasswordOpen)} />}
            </div>
            {
                isPasswordOpen && <>
                    <form onSubmit={handleSubmit}>
                        <table className="w-full">
                            <tbody>
                                <tr>
                                    {/* First Column */}
                                    <td className="px-4 py-2">
                                        
                                        <div className="mb-4">
                                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Current Password<span className='m-1 text-md font-bold text-red-400'>*</span></label>
                                                <input
                                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                    type="password"
                                                    id="password"
                                                    name="password"
                                                    placeholder="Please enter your current password"
                                                    onChange={handleChange}
                                                />
                                        </div>

                                        <div className="mb-4">
                                            <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">New Password<span className='m-1 text-md font-bold text-red-400'>*</span></label>
                                                <input
                                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                    type="password"
                                                    id="newPassword"
                                                    name="newPassword"
                                                    placeholder="Please enter your new password"
                                                    onChange={handleChange}
                                                />
                                        </div>

                                        <div className="mb-4">
                                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password<span className='m-1 text-md font-bold text-red-400'>*</span></label>
                                                <input
                                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                    type="password"
                                                    id="confirmPassword"
                                                    name="confirmPassword"
                                                    placeholder="Please confirm your password"
                                                    onChange={handleChange}
                                                />
                                        </div>
                                        
                                    </td>
  
                                </tr>
                            </tbody>
                        </table>
                        <div className="flex justify-end mt-4 mb-4 mr-4">
                                <button className='border-2 border-gray-800 bg-gray-800 text-white font-bold p-2 rounded-lg hover:bg-white hover:text-gray-800 flex items-center' type="submit">
                                    {loading && <ButtonLoader />}
                                    Submit
                                </button>
                        </div>
                    </form></>
            }

        </div>

        
    );
};
