import { TotalParentsCard, TotalRevenueCard, TotalTeachersCard, TotalStudentsCard } from './Cards';

export const HomeAdmin = () => {
  return (
    <div className="flex justify-start items-start h-screen bg-gray-100 p-2">
        <div className="mx-1"><TotalStudentsCard /></div>
        <div className="mx-1"><TotalTeachersCard /></div>
        <div className="mx-1"><TotalParentsCard /></div>
        <div className="mx-1"><TotalRevenueCard /></div>
    </div>
    // <div className="w-48 h-24 bg-blue-500 text-white rounded-lg flex flex-col-reverse justify-between items-center shadow-lg p-4 mt-3"> {/* Added mt-12 for margin top */}
    //   <div className="flex items-center text-xl font-semibold">
    //     Total Students
    //   </div>
    //   <FaGraduationCap className="text-3xl font-bold text-black" /> {/* Adding the graduation cap icon */}
    //   <div className="flex items-center justify-center text-3xl font-bold text-black">
    //     123
    //   </div>
    // </div>
  );
};
