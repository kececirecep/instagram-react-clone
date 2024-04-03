import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button/Button'

const Profile = () => {
    return (
        <div className='flex justify-center overflow-y-auto flex-1 py-10'>
            <div>
                <div className="flex justify-center flex-col items-center sm:flex-row gap-12 text-center sm:text-start">
                    <div className='w-32 h-32'>
                        <img src="/images/user.jpeg" className='w-full rounded-full' alt="" />
                    </div>
                    <div>
                        <div className='flex items-center gap-4 justify-center sm:justify-start'>
                            <h2 className='text-xl'>r.kececi</h2>
                             <Button text="Edit Profile" bgColor="bg-[#efefef]" custom="px-4 py-2 rounded-xl font-medium text-sm" />
                            {/* <Button text="Follow" bgColor="bg-[#0095F6]" color="text-white" custom="px-4 py-2 rounded-xl font-medium text-sm" /> */}
                            {/* <Button text="Unfollow" bgColor="bg-[#f63100]" color="text-white" custom="px-4 py-2 rounded-xl font-medium text-sm" /> */}
                        </div>

                        <div className="flex items-center gap-4 py-4">
                            <p><b>0</b> Posts</p>
                            <p><b>0</b> Followers</p>
                            <p><b>0</b> Following</p>
                        </div>

                        <h2 className='font-medium tracking-wide'>Recep Kececi</h2>
                        <p className='text-sm'>Bio Text</p>
                    </div>
                </div>

                <div className='flex flex-wrap md:w-[700px] xl:w-[964px] gap-4 justify-center mt-20 pb-2'>
                    <div className='sm:w-[310px] w-[90%] h-[310px] cursor-pointer hover:scale-95 duration-300 hover:opacity-80'>
                        <img src="images/leo.jpg" className='w-full h-full object-cover rounded-sm' alt="" />
                    </div>
                    <div className='sm:w-[310px] w-[90%] h-[310px] cursor-pointer hover:scale-95 duration-300 hover:opacity-80'>
                        <img src="images/user.jpeg" className='w-full h-full object-cover rounded-sm' alt="" />
                    </div>
                    <div className='sm:w-[310px] w-[90%] h-[310px] cursor-pointer hover:scale-95 duration-300 hover:opacity-80'>
                        <img src="images/leo.jpg" className='w-full h-full object-cover rounded-sm' alt="" />
                    </div>
                    <div className='sm:w-[310px] w-[90%] h-[310px] cursor-pointer hover:scale-95 duration-300 hover:opacity-80'>
                        <img src="images/leo.jpg" className='w-full h-full object-cover rounded-sm' alt="" />
                    </div>
                    <div className='sm:w-[310px] w-[90%] h-[310px] cursor-pointer hover:scale-95 duration-300 hover:opacity-80'>
                        <img src="images/leo.jpg" className='w-full h-full object-cover rounded-sm' alt="" />
                    </div>
                    <div className='sm:w-[310px] w-[90%] h-[310px] cursor-pointer hover:scale-95 duration-300 hover:opacity-80'>
                        <img src="images/leo.jpg" className='w-full h-full object-cover rounded-sm' alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile