import React from 'react';
import { FaArrowLeft } from "react-icons/fa6";

const Header = () => {
    return (
        <div className='flex justify-start bg-slate-50 py-[13px] items-center border pl-8 gap-8 px-6'>
            <div className=''>
            <FaArrowLeft className='text-2xl text-blue-600 cursor-pointer '/>
            </div>
            <div>
            <div className="flex items-center justify-center gap-8">
            <div>
            <img className='w-[40px] h-[40%] cursor-pointer rounded-[50%]' src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
            </div>

             <div className="flex flex-col items-center ">
             <h1 className="font-bold text-black text-xl">Asif khan</h1>
             <p>Developer</p>
             </div>
            
        </div>
            </div>
        </div>
    );
};

export default Header;