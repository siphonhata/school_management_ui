import React, { useEffect, useState } from 'react';
import { ProfileFormData } from './ProfileStaticData';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { api_url } from '../../App';
import axios from 'axios';
import { ButtonLoader, ModalComponent, PlaceHolder, useFetchUser } from '../Common';
import { useNavigate } from 'react-router-dom';
import { ProfileView, UpdateProfilePicture } from '.';

export const ProfilePage = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [loading, setLoading] = useState(false)
    const { user, image, error } = useFetchUser();
    const [formData, setFormData] = useState<any>({})
    const [secondFormData, setSecondFormData] = useState<any>({});
    
    const nav = useNavigate()

    useEffect(() => {
        if (user) {
            setFormData({
                firstName: user.firstName,
                lastName: user.lastName,
                idNumber: user.idNumber,
                email: user.email,
                phoneNumber: user.phoneNumber,
                address: user.address,
                bio: user.bio,
                password: user.password
            });
        }
    }, [user]);
   
    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: any) => {
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
                        <button className='float-right flex border-2 border-gray-800 bg-gray-800 mx-3 text-white font-bold p-2 rounded-lg hover:bg-white hover:text-gray-800 relative' type="submit">
                            <span className="flex items-center">
                                {loading && <div className='flex justify-center items-center text-center'><ButtonLoader /></div>}
                                Submit
                            </span>
                        </button>
                    </form></>
            }

            {/* {!isOpen && <ModalComponent modalContent={<PlaceHolder imageSrc={"/correct.png"} description={"Successfully updated Profile"} size={"h-24 w-24"} />} />}
        </div ></> : <><ProfileView /></> */}
        </div>

        
    );
};
