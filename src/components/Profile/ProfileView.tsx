
export const ProfileView = ({user, loading} : any) => {

    
    const formatDate = (dateString: any) =>{
        const date = new Date(dateString);
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        const day = date.getDate();
        const monthIndex = date.getMonth();
        const year = date.getFullYear();

        return `${monthNames[monthIndex]} ${day}, ${year}`;
    };
    return (
        <div className="bg-white rounded-lg mt-2">
            <div className="flex  rounded-t-lg bg-gray-800 p-4 pl-8">
                <img src="https://avatars.githubusercontent.com/u/92311415?v=4" alt="User Avatar" className="w-20 h-20 border rounded-full mr-4" />
                <div className="flex justify-center items-center text-center">
                    <div className="text-white  justify-center items-center text-center">
                        <p className="text-xl font-medium block"> {loading ? "val......" : user.firstName}  {loading ? "val......" : user.lastName}</p>
                        <p className="text-sm font-thin text-left flex"> {loading ? "val......" : user.role}</p>
                    </div></div>

            </div>
            <div className="border border-gray-200 p-4 m-4">
                <p className="font-semibold mb-2">Personal Details</p>
                <p className="mb-2"><strong>Email:</strong> {loading ? "val......" : user.email}</p>
                <p className="mb-2"><strong>Phone:</strong> {loading ? "val......" : user.phoneNumber}</p>
                <p className="mb-2"><strong>Date of Birth:</strong> {loading ? "val......" : formatDate(user.dateOfBirth)}</p>
                {/* Add more user information fields as needed */}
            </div>
        </div>
    )
}