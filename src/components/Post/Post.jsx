import React from 'react'
import { Link } from 'react-router-dom'
import { GoHeart } from "react-icons/go";
import { IoChatbubblesOutline } from "react-icons/io5";

const Post = () => {
    return (
        <div className="flex flex-col w-[90%] sm:w-[470px] border border-gray-200 bg-white my-4">
            <div className="flex items-center p-3">
                <Link className='flex items-center gap-2 '>
                    <img src="/images/user.jpeg" alt="" className="w-10 h-10 rounded-full" />
                    <h4 className="text-sm font-bold tracking-wider">r.kececi</h4>
                </Link>
            </div>
            <Link className="w-full h-96">
                <img src="/images/leo.jpg" alt="" className="w-full h-full object-cover" />
            </Link>
            <div className='px-3 py-4'>
                <div className="flex items-center gap-2">
                    <GoHeart size={28} />
                    <Link><IoChatbubblesOutline size={28} /></Link>
                </div>
                <div className='my-2 flex items-center gap-2 text-[#636363]'>
                    <Link className="font-semibold text-sm">36 likes</Link>
                    <span>-</span>
                    <Link className="font-semibold text-sm">12 Comments</Link>
                </div>
                <div className="flex gap-2">
                    <Link className="text-sm font-bold tracking-wider pt-[2px]">r.kececi:</Link>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid cum beatae quam reiciendis dolore ullam eligendi quis sapiente id nesciunt?</p>
                </div>
            </div>
        </div>
    )
}

export default Post