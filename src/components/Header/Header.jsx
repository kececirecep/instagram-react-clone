import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'

import { IoMdLogIn } from "react-icons/io";
import { LuUserPlus2 } from "react-icons/lu";

import { useSelector } from 'react-redux';



const Header = () => {
    const currentUser = useSelector(state => state.auth.currentUser)



    return (
        <div className='h-[70px] w-full border-b border-gray-300 pr-4 flex items-center justify-end bg-white shadow-sm'>
            {
                currentUser ?
                    <Link className='flex items-center gap-3 justify-end'>
                        <img src="/images/user.jpeg" className='w-[38px] h-[38px] object-cover rounded-full' alt="" />
                        <span className='font-semibold'>r.kececi</span>
                    </Link>
                    :
                    <>
                        <Button url="/Login" text="Login" bgColor="bg-[#0095f6]" color="text-white" custom="mx-2" icon={<IoMdLogIn size={20} fontWeight={600} />} />
                        <Button url="/register" text="Register" bgColor="bg-[#0095f6]" color="text-white" custom="mx-2" icon={<LuUserPlus2 size={20} fontWeight={600} />} />
                    </>

            }
        </div>
    )
}

export default Header