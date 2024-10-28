import React, { useState } from 'react';
import { FaUsers } from "react-icons/fa";
import { IoChatboxEllipsesOutline } from "react-icons/io5";

const Buttom = () => {
    // State to keep track of the active tab
    const [activeTab, setActiveTab] = useState(1);

    // Function to handle tab click
    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
    };

    return (
        <div>
            <div role="tablist" className="tabs tabs-bordered py-2">
                <a
                    role="tab"
                    className={`tab ${activeTab === 1 ? 'tab-active' : ''}`}
                    onClick={() => handleTabClick(1)}
                >
                    <div className='flex justify-center items-center gap-2 text-xl font-semibold'>
                    <IoChatboxEllipsesOutline className='text-2xl text-blue-500' />
                    <h1>Chat list</h1>
                    </div>
                </a>
                <a
                    role="tab"
                    className={`tab ${activeTab === 2 ? 'tab-active' : ''}`}
                    onClick={() => handleTabClick(2)}
                >
                <div className='flex justify-center items-center gap-2 text-xl font-semibold'>
                <FaUsers className='text-2xl text-blue-500' />
                <h1>User list</h1>
                </div>
                </a>
               
            </div>

            {/* Content for each tab */}
            <div >
                {activeTab === 1 &&  <div>
                   <div className='flex justify-start cursor-pointer mb-2 pl-7  pb-3 border-gray-400 items-start gap-4 px-4'>
                      <div className='w-[45px] h-[50px] rounded-[50%] border bg-slate-700'>
                        A
                      </div> 
                      <div>
                        <h1 className='text-xl font-bold'>Asif khan</h1>
                         <p className='text-[12px] font-semibold'>asif@gmai.com</p>
                      </div>
                  </div>
                   <div className='flex justify-start cursor-pointer pl-7 border-b-2 pb-3 border-gray-400 items-start gap-4 px-4'>
                      <div className='w-[45px] h-[50px] rounded-[50%] border bg-slate-700'>
                        A
                      </div> 
                      <div>
                        <h1 className='text-xl font-bold'>Asif khan</h1>
                         <p className='text-[12px] font-semibold'>asif@gmai.com</p>
                      </div>
                  </div>
              </div>}
                {activeTab === 2 && <div>
                  <div className='flex justify-start cursor-pointer mb-2 pl-7  pb-3 border-gray-400 items-start gap-4 px-4'>
                  <div className='w-[45px] h-[50px] rounded-[50%] border bg-slate-700'>
                    A
                  </div> 
                  <div>
                    <h1 className='text-xl font-bold'>Asif khan</h1>
                     <p className='text-[12px] font-semibold'>asif@gmai.com</p>
                  </div>
              </div>
                  </div>}
               
            </div>
        </div>
    );
};

export default Buttom;
