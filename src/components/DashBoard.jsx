import React from 'react'
import { SlCalender } from "react-icons/sl";
import { FaCaretDown } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { GrPowerCycle } from "react-icons/gr";
import { AiOutlineShopping } from "react-icons/ai";
import { LuTimer } from "react-icons/lu";
import { MdOutlineTableChart } from "react-icons/md";
import { IoPricetagsOutline } from "react-icons/io5";
import Modal from './Modal.jsx';
import { useNavigate } from 'react-router-dom'; 
const DashBoard = () => {
    const navigate = useNavigate();  


  const handleInvite = () => {
    navigate('/next-page');  
  };
  return (
    <div id='welcome' className='main-db'>
    <div className='top-db grid grid-cols-[56%,44%] font-light text-gray-600 text-sm m-2 mt-6 max-lg:grid-cols-1 max-sm:grid-cols-1 max-[375px]:grid-cols-1'>
        <nav className='flex items-center justify-between h-6 mb-[10vh] max-sm:mt-[5vh] max-[375px]:flex-col max-[375px]:items-start '>
            <div className='flex items-center gap-2 ml-4'>
                <SlCalender className='cursor-pointer hover:text-teal-400' />
                <p className='cursor-pointer'>Your school</p>
            </div>
            <div className='flex gap-4 items-center max-sm:grid max-sm:grid-cols-2 max-[375px]:grid-cols-1 max-[375px]:gap-2  max-sm:mt-10'>
                <p className='cursor-pointer hover:text-teal-400 '>New signups</p>
                <p className='cursor-pointer hover:text-teal-400'>Revenue</p>
                <p className='cursor-pointer hover:text-teal-400'>Product sales</p>
                <p className='cursor-pointer hover:text-teal-400'>Active learners</p>
                <div className='bg-gray-200 p-1 px-6 rounded-full flex items-center gap-2 cursor-pointer max-[375px]:px-4'>
                    <p>last 7 days</p>
                    <FaCaretDown className='cursor-pointer hover:text-purple-700' />
                </div>
            </div>
        </nav>
        <div className='information grid grid-cols-3 text-gray-600 gap-6 max-[375px]:grid-cols-2 max-sm:mt-16 max-[375px]:gap-4'>
            <div className='mb-6 flex flex-col justify-center items-center'>
                <FaRegUser className='text-2xl mb-2 max-sm:text-base max-[375px]:text-xl' />
                <p className='font-light text-gray-600 text-sm max-sm:text-xs max-[375px]:text-xs'>All users</p>
                <p className='font-light text-gray-600 text-lg max-sm:text-xs max-[375px]:text-base'>1</p>
            </div>
            <div className='mb-6 flex flex-col justify-center items-center'>
                <GrPowerCycle className='text-2xl mb-2 max-sm:text-base max-[375px]:text-xl' />
                <p className='font-light text-gray-600 text-sm max-sm:text-xs max-[375px]:text-xs'>Conversions</p>
                <p className='font-light text-gray-600 text-lg max-sm:text-xs max-[375px]:text-base'>0%</p>
            </div>
            <div className='mb-6 flex flex-col justify-center items-center'>
                <AiOutlineShopping className='text-2xl mb-2 max-sm:text-base max-[375px]:text-xl' />
                <p className='font-light text-gray-600 text-sm max-sm:text-xs max-[375px]:text-xs'>30 days sales</p>
                <p className='font-light text-gray-600 text-lg max-sm:text-xs max-[375px]:text-base'>0</p>
            </div>
            <div className='mb-6 flex flex-col justify-center items-center'>
                <LuTimer className='text-2xl mb-2 max-sm:text-base max-[375px]:text-xl' />
                <p className='font-light text-gray-600 text-sm max-sm:text-xs max-[375px]:text-xs'>Avg time</p>
                <p className='font-light text-gray-600 text-lg max-sm:text-xs max-[375px]:text-base'>0 min</p>
            </div>
            <div className='mb-6 flex flex-col justify-center items-center'>
                <MdOutlineTableChart className='text-2xl mb-2 max-sm:text-base max-[375px]:text-xl' />
                <p className='font-light text-gray-600 text-sm max-sm:text-xs max-[375px]:text-xs'>Courses</p>
                <p className='font-light text-gray-600 text-lg max-sm:text-xs max-[375px]:text-base'>0</p>
            </div>
            <div className='mb-6 flex flex-col justify-center items-center'>
                <IoPricetagsOutline className='text-2xl mb-2 max-sm:text-base max-[375px]:text-xl' />
                <p className='font-light text-gray-600 text-sm max-sm:text-xs max-[375px]:text-xs'>Course categories</p>
                <p className='font-light text-gray-600 text-lg max-sm:text-xs max-[375px]:text-base'>0</p>
            </div>
        </div>
    </div>
    <div className="h-1 bg-slate-100 "></div>
    <div className='m-auto w-10 mt-6'>
        <a onClick={handleInvite} className='p-3 px-5 rounded-2xl bg-green-300 m-auto cursor-pointer hover:bg-green-400 max-[375px]:px-4'>Invite</a>
    </div>
</div>

  )
}

export default DashBoard