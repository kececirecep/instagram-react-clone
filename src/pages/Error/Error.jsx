import React from 'react'
import Button from '../../components/Button/Button'

const Error = () => {
    return (
        <div className='flex justify-center overflow-y-auto flex-1 py-10 items-center'>
            <div className='flex items-center flex-col mb-12 w-[90%] sm:w-[500px]'>
                <h2 className='text-xl sm:text-3xl text-[#acacac] text-center'>The page you requested was not found..</h2>
                <Button url="/" text="Go Home" bgColor="bg-[#0095F6]" color="text-white" custom="px-12 py-3 mt-12" /> 
            </div>
        </div>
    )
}

export default Error