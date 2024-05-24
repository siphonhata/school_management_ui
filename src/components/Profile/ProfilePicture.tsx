import React, { useState } from 'react';

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
                <div className="mb-4">
                    <img src={URL.createObjectURL(profilePicture)} alt="Profile" className="w-40 h-40 rounded-full mb-2" />
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleSubmit}>Update Picture</button>
                </div>
            ) : (
                <div className="mb-4">
                    <input type="file" accept="image/*" onChange={handleFileChange} className="mb-2" />
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleSubmit}>Upload Picture</button>
                </div>
            )}
        </div>
    );
};
