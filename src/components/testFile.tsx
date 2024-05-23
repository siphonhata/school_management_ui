import React, { useState } from 'react';
import axios from 'axios';
import { api_url } from '../App';

const ImageUpload: React.FC = () => {
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

    const handleRetrieveImage = async () => {
        if (imageId) {
            try {
                const response = await axios.get(`http://localhost:3001/upload/${imageId}`);
                setImageData(response.data.image);
            } catch (error) {
                console.error('Error retrieving image from DB', error);
            }
        }
    };

    return (
        <div>
            <input type="file" accept="image/*" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
            <button onClick={handleRetrieveImage}>Retrieve Image</button>
            {imageData && <img src={`data:image/png;base64,${imageData}`} alt="Uploaded" />}
        </div>
    );
};

export default ImageUpload;
