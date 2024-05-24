import React, { useEffect, useState } from 'react';
import { ProfileFormData } from './ProfileStaticData';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { api_url } from '../../App';
import axios from 'axios';
import { ButtonLoader, ModalComponent, PlaceHolder, useFetchUser } from '../Common';
import { useNavigate } from 'react-router-dom';
import { UpdateProfilePicture } from '.';

export const ProfilePage = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [loading, setLoading] = useState(false)
    const { user, image, error } = useFetchUser();
    const [formData, setFormData] = useState<any>({})

    const nav = useNavigate()

    useEffect(() => {
        if (user) {
            setFormData({
                first_name: user.first_name,
                last_name: user.last_name,
                id_number: user.id_number,
                email: user.email,
                phone_number: user.phone_number,
                address: user.address,
                bio: user.bio,
                password: user.password
            });
        }
    }, [user]);

    console.log("askies", user, formData)
    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true);
        console.log("if i start", formData)
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
            <div className='flex justify-between bg-gray-800 p-4 text-white text-lg font-bold mb-4 rounded-lg'><p>Edit Profile Info</p>
                {isOpen ? <ChevronDownIcon className="w-6 h-6" onClick={() => setIsOpen(!isOpen)} /> : <ChevronUpIcon className="w-6 h-6" onClick={() => setIsOpen(!isOpen)} />}
            </div>
            {isOpen && <>
                <form onSubmit={handleSubmit}>
                    <UpdateProfilePicture />
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
                                                    defaultValue={user && user[formData.name]}
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
                                                    defaultValue={user && user[formData.name]}
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
                    <button className='float-right flex border-2 border-gray-800 bg-gray-800 mx-3 text-white font-bold p-2 rounded-lg hover:bg-white hover:text-gray-800 relative' type="submit">
                        <span className="flex items-center">
                            {loading && <div className='flex justify-center items-center text-center'><ButtonLoader /></div>}
                            Submit
                        </span>
                    </button>
                </form></>}

            {!isOpen && <ModalComponent modalContent={<PlaceHolder imageSrc={"/correct.png"} description={"Successfully updated Profile"} size={"h-24 w-24"} />} />}
        </div>
    );
};
