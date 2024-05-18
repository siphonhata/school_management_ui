import { PencilIcon, PencilSquareIcon } from "@heroicons/react/24/outline"

export const ProfileView = () => {
    return (
        <div className="bg-white rounded-lg mt-2">
            <div className="flex  rounded-t-lg bg-gray-800 p-4 pl-8">
                <img src="https://avatars.githubusercontent.com/u/92311415?v=4" alt="User Avatar" className="w-20 h-20 border rounded-full mr-4" />
                <div className="flex justify-center items-center text-center">
                    <div className="text-white  justify-center items-center text-center">
                        <p className="text-xl font-medium block">Dineo Mathibela</p>
                        <p className="text-sm font-thin text-left flex">Admin | <p className="hover:underline flex ml-1"> Edit profile <PencilSquareIcon className="w-4 h-4 hover:underline" /></p></p>
                    </div></div>

            </div>
            <div className="border border-gray-200 p-4 m-4">
                <p className="font-semibold mb-2">Personal Details</p>
                <p className="mb-2"><strong>Email:</strong> dineo@example.com</p>
                <p className="mb-2"><strong>Phone:</strong> +1234567890</p>
                <p className="mb-2"><strong>Date of Birth:</strong> January 1, 1990</p>
                {/* Add more user information fields as needed */}
            </div>
        </div>
    )
}