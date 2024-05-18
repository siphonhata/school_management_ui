import React, { useState } from 'react';
import { ProfileFormData } from './ProfileStaticData';

export const ProfilePage = () => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        id_number: '',
        date_of_birth: '',
        gender: '',
        email: '',
        phone_number: '',
        address: '',
        role: '',
        password: ''
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            {
                ProfileFormData.map(formData => (
                    <div key={formData.id} className="mb-4">
                        <label htmlFor={formData.id} className="block text-sm font-medium text-gray-700">{formData.title}</label>
                        <input
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            type={formData.type}
                            id={formData.id}
                            name={formData.name}
                            value={''} // Assuming you have value in formData
                            placeholder={formData.placeholder}
                            onChange={handleChange}
                        />
                    </div>
                ))
            }

            <button type="submit">Submit</button>
        </form>
    );
};