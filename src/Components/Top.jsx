import React, { useState } from 'react';
import { CiMenuKebab } from "react-icons/ci";
import { Link } from "react-router-dom";

const Top = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Toggle dropdown visibility
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    // Toggle modal visibility
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
        setIsDropdownOpen(false); // Close dropdown when opening the modal
    };

    return (
        <div className="flex justify-between items-center px-6 py-4 bg-blue-500 relative">
            <div className="flex items-center justify-center gap-8">
                {/* Profile Picture */}
                <Link to='/profile'>
                    <img
                        className='w-[40px] h-[40px] cursor-pointer rounded-full'
                        src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt="Profile"
                    />
                </Link>
                <div className="flex flex-col items-center">
                    <h1 className="font-bold text-white text-xl">Asif Khan</h1>
                    <p className="text-white">Developer</p>
                </div>
            </div>

            {/* Menu Icon to open dropdown */}
            <div onClick={toggleDropdown} className="cursor-pointer text-white">
                <CiMenuKebab />
            </div>

            {/* Dropdown */}
            {isDropdownOpen && (
                <div className="absolute top-full right-6 mt-2 bg-gray-300 rounded-md shadow-lg p-2 w-32 z-10">
                    <h1
                        className="text-[14px] text-black font-bold cursor-pointer hover:bg-gray-200 p-2 rounded"
                        onClick={toggleModal}
                    >
                        Profile
                    </h1>
                    {/* Add more dropdown items here if needed */}
                </div>
            )}

            {/* Profile Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-md shadow-lg w-[90%] max-w-md">
                        <h2 className="text-xl font-bold mb-4">Profile Details</h2>
                        <p className="mb-2">Name: Asif Khan</p>
                        <p className="mb-2">Role: Developer</p>
                        <p className="mb-2">Email: asif@example.com</p>
                        <button
                            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                            onClick={toggleModal}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Top;
