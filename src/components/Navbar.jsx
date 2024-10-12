
import { GoPlus } from "react-icons/go";
import { IoEyeOutline } from "react-icons/io5";
import { FaPowerOff } from "react-icons/fa6";
import { FaCircleQuestion } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate =useNavigate();
    const handleInvite = () => { 
        navigate('/')
     }
    return (
        <div id="welcome" className="mt-1 m-auto" >
            <nav className="top-0 flex items-center justify-between p-4 px-6 max-lg:p-1 max-sm:grid max-sm:grid-cols-[25%,75%] max-sm:text-xs max-sm:h-[30vh] ">
            <div><h1 onClick={handleInvite} className="cursor-pointer text-lg mr-1 max-sm:text-sm">Dashoard</h1></div>
                <div className="flex gap-7 items-center ml-2 max-lg:gap-2 max-lg:grid max-lg:grid-cols-2 max-lg:flex-none  max-[353px]:grid-cols-1">
                    
                    <div className="flex items-center gap-1">
                        <GoPlus className="bg-gray-200 w-7 h-7 rounded-full p-[5px] cursor-pointer hover:w-[29px] hover:h-[29px]" />
                        <p className="font-extralight text-gray-600">Create course</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <IoEyeOutline className="bg-gray-200 w-7 h-7 rounded-full p-[5px] cursor-pointer hover:w-[29px] hover:h-[29px]" />
                        <p className="font-extralight text-gray-600">Preview home page</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <IoEyeOutline className="bg-gray-200 w-7 h-7 rounded-full p-[5px] cursor-pointer hover:w-[29px] hover:h-[29px]" />
                        <p className="font-extralight text-gray-600">Preview after login page</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <FaPowerOff className="bg-gray-200 w-7 h-7 rounded-full p-[6px] cursor-pointer hover:w-[29px] hover:h-[29px]" />
                        <p className="font-extralight text-gray-600">View welcome screen</p>
                    </div>
                </div>
                <div className="help flex items-center gap-1 mr-2 max-sm:text-sm">
                    <FaCircleQuestion className="text-teal-400 w-6 h-6 cursor-pointer max-sm:w-3 max-sm:h-3"/>

                    <p className="font-extralight text-gray-600">Help</p>
                </div>
            </nav>
            <div className="h-1 bg-slate-100"></div>
        </div>
    );
};

export default Navbar;
