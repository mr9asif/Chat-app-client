import React from 'react';
import { CiFaceSmile, CiMenuKebab } from "react-icons/ci";
import { IoIosShareAlt } from "react-icons/io";
import { MdDelete } from "react-icons/md";

const Chat = () => {
    return (
        <div className='bg-slate-300 '>
            <h3 className='text-center py-2 border rounded-md font-semibold'>today</h3>

             <div className='h-[calc(100vh-210px)] overflow-y-auto'>
                  <ul className='my-6 px-16'>
                     <li className='flex flex-start w-full '>
                         <div className='flex gap-3'>
                            <img className='w-[45px] border-2 h-[50px] rounded-[50%]' src="" alt="As" />
                            <div className='p-5 bg-gray-300 my-3 w-[80%] shadow-md font-semibold'>
                            <p className='text-[17px] text-gray-600'>Hey this is asif sdffffffdfdssfsssssssssssssssssssssssssssssssssssfsfsfs? how are you</p>
                            <div className='flex pt-3 justify-between items-center px-3'>
                                 <h1 className='text-[16px] font-semibold text-gray-500 '>12:30 pm</h1>
                                 <div className='flex items-center gap-4'>
                                 <IoIosShareAlt className='text-xl text-blue-500 cursor-pointer'/>
                                 <MdDelete className='text-xl text-blue-500 cursor-pointer'/>
                                 </div>
                              </div>
                            </div>
                         </div>
                     </li>
                     <li className='flex justify-end w-full my-8 '>
                         <div className='flex flex-row-reverse gap-3'>
                            <img className='w-[45px] border-2 h-[50px] rounded-[50%]' src="" alt="As" />
                            <div className='p-5 bg-gray-300 my-3 w-[80%] shadow-md font-semibold'>
                            <p className='text-[17px] text-gray-600'>Hey this is asif sdffffffdfdssfsssssssssssssssssssssssssssssssssssfsfsfs? how are you</p>
                            <div className='flex pt-3 justify-between items-center px-3'>
                                 <h1 className='text-[16px] font-semibold text-gray-500 '>12:30 pm</h1>
                                 <div className='flex items-center gap-4'>
                                 <IoIosShareAlt className='text-xl text-blue-500 cursor-pointer'/>
                                 <MdDelete className='text-xl text-blue-500 cursor-pointer'/>
                                 </div>
                              </div>
                            </div>
                         </div>
                     </li>
                     
                  </ul>
             </div>

             <div className='flex justify-center items-center w-full py-4 '>
              <div className='w-[15%] flex items-center gap-5 justify-center'>
              <CiMenuKebab className='text-2xl text-blue-800 cursor-pointer'/>
              <CiFaceSmile className='text-2xl text-blue-800 cursor-pointer' />
              </div>
              <form action="" className='flex items-center gap-2 w-[85%] '>
                  <input type="text" className='py-2 px-6 b outline-none w-[90%] border-2 border-blue-600  bg-slate-300 rounded-md ' placeholder='type your massege..' />
                  <button className='text-xl font-semibold border rounded-sm hover:bg-blue-700 text-white  bg-blue-500 p-2'>Sent</button>
              </form>
             </div>
        </div>
    );
};

export default Chat;