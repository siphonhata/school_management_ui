import { useState } from 'react';
import axios from "axios";
import { api_url } from "../../App";


export const TeachersCard = ({ teachers }: any) => {
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        setIsLoading(true);
        if (!email) {
            console.log("Please fill in all fields");
            return;
        }
        try {
            //@ts-ignore
            const response = await axios.post(`${api_url}/invite`, {
                email,
                role: "TEACHER"
            });

            if (response?.data.success) {
                console.log(response.data.message)
            }
            else {
                console.log(response?.data.message);
            }
        } catch (error) {
            console.log(error);
        }
        setEmail('');
        setIsLoading(false);
    };

    return (
        <div className="p-4 bg-gray-50 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4 text-gray-800">
                <h2 className="text-xl font-bold">Teachers List</h2>
                <p className="hover:underline text-gray-300 hover:text-gray-500">See more</p>
            </div>
            <div className="flex mb-4 space-x-2">
                {teachers.slice(0, 6).map((teacher: any, index: any) => (
                    <img
                        key={index}
                        src={teacher.avatar}
                        alt={teacher.name}
                        className="w-10 h-10 rounded-full border-2 border-white"
                    />
                ))}
            </div>
            <p className="text-md font-bold text-gray-800 m-2">Add Teachers</p>
            <div className="flex border rounded-md bg-white overflow-hidden">
            <input
                type="email"
                placeholder="Invite with email"
                className="w-full p-2 outline-none focus:outline-none"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button
                type="button"
                disabled={isLoading}
                className={`p-2 px-4 font-bold bg-gray-900 rounded-md text-white ${
                    isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-800'
                }`}
                onClick={handleSubmit}
            >
                {isLoading ? 'Inviting...' : 'Invite'}
            </button>
        </div>

        </div>
    );
};
