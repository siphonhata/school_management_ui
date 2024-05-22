import React, { useState } from 'react';
import { ProfileFormData } from './ProfileStaticData';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { api_url } from '../../App';
import axios from 'axios';

export const ProfilePage = () => {
    const [isOpen, setIsOpen] = useState(true);

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        id_number: '',
        email: '',
        phone_number: '',
        address: '',
        bio: '',
        password: ''
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const response = await axios.put(`${api_url}/update`, formData);
            console.log("Profile updated successfully:", response.data);
        } catch (error) {
            console.error("Error updating profile:", error);
        }
    };

    return (
        <div className='mt-4 '>
            <div className='flex justify-between bg-gray-800 p-4 text-white text-lg font-bold mb-4 rounded-lg'><p>Edit Profile Info</p>
                {isOpen ? <ChevronDownIcon className="w-6 h-6" onClick={() => setIsOpen(!isOpen)} /> : <ChevronUpIcon className="w-6 h-6" onClick={() => setIsOpen(!isOpen)} />}
            </div>
            {isOpen && <form onSubmit={handleSubmit}>
                <table className="w-full">
                    <tbody>
                        <tr>
                            {/* First Column */}
                            <td className="px-4 py-2">
                                {
                                    ProfileFormData.slice(0, 3).map(formData => (
                                        <div key={formData.id} className="mb-4">
                                            <label htmlFor={formData.id} className="block text-sm font-medium text-gray-700">{formData.title}<span className='m-1 text-md font-bold text-red-400'>*</span></label>
                                            <input
                                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                type={formData.type}
                                                id={formData.id}
                                                name={formData.name}
                                                placeholder={formData.placeholder}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    ))
                                }
                                <div className="">
                                    <label htmlFor="bio" className="block text-sm font-medium text-gray-700">Biography<span className='m-1 text-md font-bold text-red-400'>*</span></label>
                                    <textarea
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        id="bio"
                                        name="bio"
                                        placeholder="Tell us a little about yourself..."
                                        onChange={handleChange}
                                    />
                                </div>
                            </td>

                            {/* Second Column */}
                            <td className="px-4 py-2">
                                {
                                    ProfileFormData.slice(3, 7).map(formData => (
                                        <div key={formData.id} className="mb-4">
                                            <label htmlFor={formData.id} className="block text-sm font-medium text-gray-700">{formData.title}<span className='m-1 text-md font-bold text-red-400'>*</span></label>
                                            <input
                                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                type={formData.type}
                                                id={formData.id}
                                                name={formData.name}
                                                placeholder={formData.placeholder}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    ))
                                }
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button className='float-right border-2 border-gray-800 bg-gray-800 mx-3 text-white font-bold p-2 rounded-lg hover:bg-white hover:text-gray-800' type="submit">Submit</button>
            </form>}
        </div>
    );
};
