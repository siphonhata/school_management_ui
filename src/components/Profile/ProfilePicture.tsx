import axios from 'axios';
import React, { useState } from 'react';
import { FaCamera } from 'react-icons/fa';
import { api_url } from '../../App';

export const UpdateProfilePicture = ({ image }: any) => {
    const [profilePicture, setProfilePicture] = useState<File | null>(null);

    const handleSubmit = async (base64String: string) => {
        try {
            const response = await axios.post(`${api_url}/upload`, { image: base64String });
            if (response.data.success) {
                console.log("Image uploaded")
            }
        } catch (error) {
            console.error('Error saving image to DB', error);
        }
    };


    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setProfilePicture(e.target.files[0]);
        }
    };
    const handleUpload = async () => {
        if (profilePicture) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = reader.result?.toString().split(',')[1];
                if (base64String) {
                    handleSubmit(base64String);
                }
            };
            reader.readAsDataURL(profilePicture);
        }
    };

    return (
        <div className="flex flex-col items-center">
            <h2 className="text-xl font-bold mb-4">Update Profile Picture</h2>
            {profilePicture ? (
                <div className="relative mb-4">
                    <img
                        src={URL.createObjectURL(profilePicture)}
                        alt="Profile"
                        className="w-full h-40 object-cover rounded-full mb-2"
                    />
                    <FaCamera className="text-gray-600 text-3xl absolute bottom-2 right-2" />
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                </div>
            ) : (
                <div className="relative mb-4">
                    <img src={'/profile.jpg'} alt='' className='w-full h-40 object-cover rounded-full mb-2' />
                    <FaCamera className="text-gray-600 text-3xl absolute bottom-2 right-2" />
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                </div>
            )}
        </div>
    );
};
