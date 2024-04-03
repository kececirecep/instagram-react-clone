import React from 'react'
import { Link } from 'react-router-dom'
import { GoHeart } from "react-icons/go";

const PostDetail = () => {
    return (
        <div className='flex justify-center overflow-y-auto flex-1 py-6 mb-4'>
            <div className="flex xl:border border-gray-200 bg-white flex-col xl:flex-row w-[90%] 2xl:w-[1280px]">
                <div className="min-w-[50%]">
                    <img src="/images/leo.jpg" className='w-full h-full object-cover' alt="" />
                </div>
                <div className="bg-white flex flex-col">
                    <div className="border-b flex items-center p-2">
                        <Link className="flex items-center gap-2">
                            <img src="/images/user.jpeg" alt="" className="w-12 h-12 rounded-full" />
                            <span className='font-medium tracking-wide'>fenerbahcesk</span>
                        </Link>
                    </div>

                    <div className='p-4 '>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam consequuntur ratione voluptatibus nihil ea cumque, ipsam iusto a aspernatur omnis saepe voluptate sapiente nostrum corrupti in perspiciatis dolores harum nemo!
                    </div>

                    <div className="overflow-y-scroll flex-1">
                        <div className="flex p-2 gap-4 border-b border-gray-100 py-3">
                            <img src="/images/user.jpeg" alt="" className="w-12 h-12 rounded-full" />
                            <div>
                                <Link className='font-medium tracking-wide'>r.kececi</Link>
                                <p className='flex-1'>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, molestias!qwewqe qwe wqewqe </p>
                            </div>

                        </div>
                    </div>

                    <div className="post-footer border-t border-gray-300 p-2">
                        <div className="icons flex items-center gap-2 mt-2">
                            <GoHeart size={28} />

                        </div>
                        <div className='flex gap-1 my-3'>
                            <span className="font-semibold">122 Likes</span>
                            <span>-</span>
                            <span className="font-semibold">122 Comments</span>
                        </div>
                        <form className='flex gap-2'>
                            <input type="text" placeholder='Add a comment...' className="w-full outline-none py-2" />
                            <button className="  bg-transparent text-blue-500 font-semibold text-md cursor-pointer">Post</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default PostDetail