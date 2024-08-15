import { useEffect, useState } from 'react';
import axios from 'axios';
import { api_url } from '../../App';

export const useFetchUser = () => {
    const [user, setUser] = useState<any>(null);
    const [image, setImage] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`${api_url}/getuser`);
                console.log("Common Response", response)
                if (response.data.success) {
                    setUser(response.data.user);
                    setImage(response.data.photo);
                }
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);
    return { user, image, loading, error };
};
