import React from 'react'
import Button from '../../components/Button/Button'

const ProfileUpdate = () => {
    return (
        <div className='flex justify-center overflow-y-auto flex-1 py-10'>
            <div className='flex flex-col w-[70%] sm:w-[400px]'>
                <input type="text" placeholder='Name' className='outline-none my-2 p-2 border-b border-gray-300 rounded-md' />
                <textarea type="text" placeholder='Bio' className='outline-none my-2 p-2 border-b border-gray-300 rounded-md resize-none' />

                <Button
                    text="Update"
                    bgColor="bg-[#0095F6]"
                    color="text-white"
                    custom="mt-2"
                />
            </div>
        </div>
    )
}

export default ProfileUpdate