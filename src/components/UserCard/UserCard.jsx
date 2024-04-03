import React from 'react'
import { Link } from 'react-router-dom'

const UserCard = () => {
    return (
        <Link className='flex gap-4 bg-white border border-gray-100 m-2 py-3 px-6 items-center w-[90%] sm:w-[300px]'>
            <div className='w-12 h-12 rounded-full'>
                <img src="images/user.jpeg" className='w-full h-full rounded-full' alt="" />
            </div>
            <span className='font-semibold tracking-wide'>r.kececi</span>
        </Link>
    )
}

export default UserCard