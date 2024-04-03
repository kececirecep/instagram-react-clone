import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='h-[70px] w-full border-b border-gray-300 pr-4 flex items-center justify-end bg-white shadow-sm'>
            <Link className='flex items-center gap-3 justify-end'>
                <img src="/images/user.jpeg" className='w-[38px] h-[38px] object-cover rounded-full' alt="" />
                <span className='font-semibold'>r.kececi</span>
            </Link>
        </div>
    )
}

export default Header