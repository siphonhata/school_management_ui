import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { api_url } from "../../App";
import axios from "axios";
import { ButtonLoader, useFetchUser } from "../Common";
import { useNavigate } from "react-router-dom";
import { ProfileView, UpdateProfilePicture } from ".";

export const ProfilePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAddressOpen, setIsAddressOpen] = useState(false);
  const [isPasswordOpen, setIsPasswordOpen] = useState(false);
  const [isSchoolOpen, setIsSchoolOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { user, image, loading: load } = useFetchUser();

  const [formData, setFormData] = useState<any>({
    userInfo: {},
    address: {},
    password: {},
    school: {},
  });
  const nav = useNavigate();

  
  const handleChange = (e: any, formSection: string) => {
    const { name, value } = e.target;
    setFormData((prevData: any) => ({
      ...prevData,
      [formSection]: {
        ...prevData[formSection],
        [name]: value,
      },
    }));
  };
  
  const handleSubmit = async (e: any, type: string) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.put(`${api_url}/update`, {formData, type});
      
      if (response.data.success) {
        setLoading(false);
        setIsOpen(!isOpen);
        nav("/dashboard/profile");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="mt-4 ">
      <ProfileView user={user} image={image} loading={load} />

      <div>
        {user && user.role === "ADMIN" && (
          <div className="flex justify-between bg-gray-800 p-4 text-white text-lg font-bold mb-4 rounded-lg">
            <p>Edit School Info</p>
            {isSchoolOpen ? (
              <ChevronDownIcon
                className="w-6 h-6"
                onClick={() => setIsSchoolOpen(!isSchoolOpen)}
              />
            ) : (
              <ChevronUpIcon
                className="w-6 h-6"
                onClick={() => setIsSchoolOpen(!isSchoolOpen)}
              />
            )}
          </div>
        )}

        {isSchoolOpen && user && user.role === "ADMIN" && (
          <>
         
          <form onSubmit={(e) => handleSubmit(e, 'school')}>
            <table className="w-full">
                <tbody>
                  <tr>
                    {/* First Column */}
                    <td className="px-4 py-2">
                      <div className="mb-4">
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          School Name
                          <span className="m-1 text-md font-bold text-red-400">
                            *
                          </span>
                        </label>
                        <input
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          type="text"
                          id="name"
                          name="name"
                          defaultValue={user && user?.school.name}
                          placeholder="Please enter School Name"
                          
                          onChange={(e) => handleChange(e, 'school')}
                        />
                      </div>

                      <div className="mb-4">
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700"
                        >
                          School Email
                          <span className="m-1 text-md font-bold text-red-400">
                            *
                          </span>
                        </label>
                        <input
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          type="text"
                          id="email"
                          name="email"
                          defaultValue={user && user?.school.email}
                          placeholder="Please enter School Email Address"
                          onChange={(e) => handleChange(e, 'school')}
                        />
                      </div>

                      <div className="mb-4">
                        <label
                          htmlFor="phoneNumber"
                          className="block text-sm font-medium text-gray-700"
                        >
                          School Contact Number
                          <span className="m-1 text-md font-bold text-red-400">
                            *
                          </span>
                        </label>
                        <input
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          type="text"
                          id="phoneNumber"
                          name="phoneNumber"
                          defaultValue={user && user?.school.phoneNumber}
                          placeholder="Please enter School Contact number"
                          onChange={(e) => handleChange(e, 'school')}
                        />
                      </div>

                      <div className="mb-4">
                        <label
                          htmlFor="website"
                          className="block text-sm font-medium text-gray-700"
                        >
                          School Website
                          <span className="m-1 text-md font-bold text-red-400">
                            *
                          </span>
                        </label>
                        <input
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          type="text"
                          id="website"
                          name="website"
                          defaultValue={user && user?.school.website}
                          placeholder="Please enter School Website"
                          onChange={(e) => handleChange(e, 'school')}
                        />
                      </div>
                    </td>

                    {/* Second Column */}
                    <td className="px-4 py-2">

                    <div className="mb-4">
                        <label
                          htmlFor="staffCount"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Staff Count
                          <span className="m-1 text-md font-bold text-red-400">
                            *
                          </span>
                        </label>
                        <input
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          type="text"
                          id="staffCount"
                          name="staffCount"
                          defaultValue={user && user?.school.staffCount}
                          readOnly
                        />
                      </div>

                      <div className="mb-4">
                        <label
                          htmlFor="missionStatement"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Mission Statement
                          <span className="m-1 text-md font-bold text-red-400">
                            *
                          </span>
                        </label>
                        <input
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          type="text"
                          id="missionStatement"
                          name="missionStatement"
                          defaultValue={user && user?.school.missionStatement}
                          placeholder="Please enter School Mission Staement"
                          onChange={(e) => handleChange(e, 'school')}
                        />
                      </div>

                      <div className="mb-4">
                        <label
                          htmlFor="totalStudent"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Total Student
                          <span className="m-1 text-md font-bold text-red-400">
                            *
                          </span>
                        </label>
                        <input
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          type="number"
                          id="totalStudent"
                          name="totalStudent"
                          defaultValue={user && user?.school.totalStudents}
                          readOnly
                          //onChange={handleChange}
                        />
                      </div>

                      <div className="mb-4">
                        <label
                          htmlFor="enrollmentCapacity"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Enrollment Capacity
                          <span className="m-1 text-md font-bold text-red-400">
                            *
                          </span>
                        </label>
                        <input
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          type="number"
                          id="enrollmentCapacity"
                          name="enrollmentCapacity"
                          defaultValue={user && user?.school.enrollmentCapacity}
                          placeholder="Please enter School Mission Statement"
                          onChange={(e) => handleChange(e, 'school')}
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="flex justify-end mt-4 mb-4 mr-4">
                <button
                  className="border-2 border-gray-800 bg-gray-800 text-white font-bold p-2 rounded-lg hover:bg-white hover:text-gray-800 flex items-center"
                  type="submit"
                >
                  {loading && <ButtonLoader />}
                  Submit
                </button>
              </div>
            </form>
          </>
        )}
      </div>

      <div>
        <div className="flex justify-between bg-gray-800 p-4 text-white text-lg font-bold mb-4 rounded-lg">
          <p>Edit User Info</p>
          {isOpen ? (
            <ChevronDownIcon
              className="w-6 h-6"
              onClick={() => setIsOpen(!isOpen)}
            />
          ) : (
            <ChevronUpIcon
              className="w-6 h-6"
              onClick={() => setIsOpen(!isOpen)}
            />
          )}
        </div>
        {isOpen && (
          <>
            <form onSubmit={(e) => handleSubmit(e, 'user')}>
              <UpdateProfilePicture />
              <table className="w-full">
                <tbody>
                  <tr>
                    {/* First Column */}
                    <td className="px-4 py-2">
                      <div className="mb-4">
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-medium text-gray-700"
                        >
                          First Name
                          <span className="m-1 text-md font-bold text-red-400">
                            *
                          </span>
                        </label>
                        <input
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          type="text"
                          id="firstName"
                          name="firstName"
                          defaultValue={user && user.firstName}
                          placeholder="Please enter your first name"
                          onChange={(e) => handleChange(e, 'userInfo')}
                        />
                      </div>

                      <div className="mb-4">
                        <label
                          htmlFor="lastName"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Last Name
                          <span className="m-1 text-md font-bold text-red-400">
                            *
                          </span>
                        </label>
                        <input
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          type="text"
                          id="lastName"
                          name="lastName"
                          defaultValue={user && user.lastName}
                          placeholder="Please enter your last name"
                          onChange={(e) => handleChange(e, 'userInfo')}
                        />
                      </div>

                      <div className="mb-4">
                        <label
                          htmlFor="phoneNumber"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Biography
                          <span className="m-1 text-md font-bold text-red-400">
                            *
                          </span>
                        </label>
                        <input
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          type="text"
                          id="bio"
                          name="bio"
                          defaultValue={user && user.bio}
                          placeholder="Please enter your biography"
                          onChange={(e) => handleChange(e, 'userInfo')}
                        />
                      </div>
                    </td>

                    {/* Second Column */}
                    <td className="px-4 py-2">
                      <div className="mb-4">
                        <label
                          htmlFor="idNumber"
                          className="block text-sm font-medium text-gray-700"
                        >
                          ID Number
                          <span className="m-1 text-md font-bold text-red-400">
                            *
                          </span>
                        </label>
                        <input
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          type="text"
                          id="idNumber"
                          name="idNumber"
                          defaultValue={user && user.idNumber}
                          placeholder="Please enter your ID number"
                          onChange={(e) => handleChange(e, 'userInfo')}
                        />
                      </div>

                      <div className="mb-4">
                        <label
                          htmlFor="phoneNumber"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Phone Number
                          <span className="m-1 text-md font-bold text-red-400">
                            *
                          </span>
                        </label>
                        <input
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          type="text"
                          id="phoneNumber"
                          name="phoneNumber"
                          defaultValue={user && user.phoneNumber}
                          placeholder="Please enter your phone number"
                          onChange={(e) => handleChange(e, 'userInfo')}
                        />
                      </div>

                      <div className="mb-4">
                        <label
                          htmlFor="gender"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Gender
                          <span className="m-1 text-md font-bold text-red-400">
                            *
                          </span>
                        </label>
                        <input
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          type="text"
                          id="gender"
                          name="gender"
                          defaultValue={user && user.gender}
                          readOnly
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="flex justify-end mt-4 mb-4 mr-4">
                <button
                  className="border-2 border-gray-800 bg-gray-800 text-white font-bold p-2 rounded-lg hover:bg-white hover:text-gray-800 flex items-center"
                  type="submit"
                >
                  {loading && <ButtonLoader />}
                  Submit
                </button>
              </div>
            </form>
          </>
        )}
      </div>

      <div className="flex justify-between bg-gray-800 p-4 text-white text-lg font-bold mb-4 rounded-lg">
        <p>Edit User Address</p>
        {isAddressOpen ? (
          <ChevronDownIcon
            className="w-6 h-6"
            onClick={() => setIsAddressOpen(!isAddressOpen)}
          />
        ) : (
          <ChevronUpIcon
            className="w-6 h-6"
            onClick={() => setIsAddressOpen(!isAddressOpen)}
          />
        )}
      </div>
      {isAddressOpen && (
        <>
          <form onSubmit={(e) => handleSubmit(e, 'address')}>
            <table className="w-full">
              <tbody>
                <tr>
                  {/* First Column */}
                  <td className="px-4 py-2">
                    <div className="mb-4">
                      <label
                        htmlFor="address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Address
                        <span className="m-1 text-md font-bold text-red-400">
                          *
                        </span>
                      </label>
                      <input
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        type="text"
                        id="address"
                        name="address"
                        defaultValue={user && user.address.address}
                        placeholder="Please enter your address"
                        onChange={(e) => handleChange(e, 'address')}
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-gray-700"
                      >
                        City
                        <span className="m-1 text-md font-bold text-red-400">
                          *
                        </span>
                      </label>
                      <input
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        type="text"
                        id="city"
                        name="city"
                        defaultValue={user && user.address.city}
                        placeholder="Please enter your city"
                        onChange={(e) => handleChange(e, 'address')}
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="stateProvince"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Province
                        <span className="m-1 text-md font-bold text-red-400">
                          *
                        </span>
                      </label>
                      <input
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        type="text"
                        id="stateProvince"
                        name="stateProvince"
                        defaultValue={user && user.address.stateProvince}
                        placeholder="Please enter your province"
                        onChange={(e) => handleChange(e, 'address')}
                      />
                    </div>
                  </td>

                  {/* Second Column */}
                  <td className="px-4 py-2">
                    <div className="mb-4">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Country
                        <span className="m-1 text-md font-bold text-red-400">
                          *
                        </span>
                      </label>
                      <input
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        type="text"
                        id="country"
                        name="country"
                        defaultValue={user && user.address.country}
                        placeholder="Please enter your country"
                        onChange={(e) => handleChange(e, 'address')}
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="postalCode"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Postal Code
                        <span className="m-1 text-md font-bold text-red-400">
                          *
                        </span>
                      </label>
                      <input
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        type="text"
                        id="postalCode"
                        name="postalCode"
                        defaultValue={user && user.address.postalCode}
                        placeholder="Please enter your postal code"
                        onChange={(e) => handleChange(e, 'address')}
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="faxNumber"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Fax Number
                        <span className="m-1 text-md font-bold text-red-400">
                          *
                        </span>
                      </label>
                      <input
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        type="text"
                        id="faxNumber"
                        name="faxNumber"
                        placeholder="Please enter your fax number"
                        defaultValue={user && user.address.faxNumber}
                        onChange={(e) => handleChange(e, 'address')}
        
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="flex justify-end mt-4 mb-4 mr-4">
              <button
                className="border-2 border-gray-800 bg-gray-800 text-white font-bold p-2 rounded-lg hover:bg-white hover:text-gray-800 flex items-center"
                type="submit"
              >
                {loading && <ButtonLoader />}
                Submit
              </button>
            </div>
          </form>
        </>
      )}

      <div className="flex justify-between bg-gray-800 p-4 text-white text-lg font-bold mb-4 rounded-lg">
        <p>Edit User Password</p>
        {isPasswordOpen ? (
          <ChevronDownIcon
            className="w-6 h-6"
            onClick={() => setIsPasswordOpen(!isPasswordOpen)}
          />
        ) : (
          <ChevronUpIcon
            className="w-6 h-6"
            onClick={() => setIsPasswordOpen(!isPasswordOpen)}
          />
        )}
      </div>
      {isPasswordOpen && (
        <>
          <form onSubmit={(e) => handleSubmit(e, 'password')}>
            <table className="w-full">
              <tbody>
                <tr>
                  {/* First Column */}
                  <td className="px-4 py-2">
                    <div className="mb-4">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Current Password
                        <span className="m-1 text-md font-bold text-red-400">
                          *
                        </span>
                      </label>
                      <input
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        type="password"
                        id="oldPassword"
                        name="oldPassword"
                        placeholder="Please enter your current password"
                        onChange={(e) => handleChange(e, 'password')}
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="newPassword"
                        className="block text-sm font-medium text-gray-700"
                      >
                        New Password
                        <span className="m-1 text-md font-bold text-red-400">
                          *
                        </span>
                      </label>
                      <input
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        type="password"
                        id="newPassword"
                        name="newPassword"
                        placeholder="Please enter your new password"
                        onChange={(e) => handleChange(e, 'password')}
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="confirmPassword"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Confirm Password
                        <span className="m-1 text-md font-bold text-red-400">
                          *
                        </span>
                      </label>
                      <input
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="Please confirm your password"
                        onChange={(e) => handleChange(e, 'password')}
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="flex justify-end mt-4 mb-4 mr-4">
              <button
                className="border-2 border-gray-800 bg-gray-800 text-white font-bold p-2 rounded-lg hover:bg-white hover:text-gray-800 flex items-center"
                type="submit"
              >
                {loading && <ButtonLoader />}
                Submit
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};
