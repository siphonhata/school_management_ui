import axios from 'axios';
import React, { useState } from 'react';
import { FaCamera, FaCheck } from 'react-icons/fa';
import { api_url } from '../../App';

export const UpdateProfilePicture = ({ image }: any) => {
    const [file, setFile] = useState<File | null>(null);
    const [imageId, setImageId] = useState<number | null>(null);
    const [imageData, setImageData] = useState<string | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0]);
        }
    };

    const handleUpload = async () => {
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = reader.result?.toString().split(',')[1];
                if (base64String) {
                    saveToDatabase(base64String);
                    alert('Successfully updated profile picture!');
                    window.location.reload();
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const saveToDatabase = async (base64String: string) => {
        try {
            const response = await axios.post(`${api_url}/upload`, { image: base64String });
            setImageId(response.data.id);
        } catch (error) {
            console.error('Error saving image to DB', error);
        }
    };


    return (
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-bold mb-4">Update Profile Picture</h2>
          <div className="relative mb-4">
            <img
              src={imageData ? `data:image/png;base64,${imageData}` : '/profile.jpg'}
              alt="Profile"
              className="w-full h-40 object-cover rounded-full mb-2"
            />
            <div
              className="text-gray-600 text-3xl absolute bottom-2 right-26 cursor-pointer"
            >
              <FaCamera />
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
            </div>
            <div
              className="text-gray-600 text-3xl absolute bottom-2 right-2 cursor-pointer"
              onClick={handleUpload}
            >
              <FaCheck />
            </div>
          </div>
        </div>
      );
};
