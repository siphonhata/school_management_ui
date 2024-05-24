import React, { useState } from 'react';
import { FaCamera } from 'react-icons/fa';

export const UpdateProfilePicture = () => {
    const [profilePicture, setProfilePicture] = useState(null);

    // Function to handle file input change
    const handleFileChange = (event: any) => {
        const file = event.target.files[0];
        // You can perform validation here if needed
        setProfilePicture(file);
    };

    // Function to handle profile picture submission
    const handleSubmit = () => {
        // You can handle the submission logic here, e.g., send the file to the server
        console.log("Profile picture submitted:", profilePicture);
        // Reset the profile picture state after submission
        setProfilePicture(null);
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
