import React from 'react'
import Button from '../../components/Button/Button'

const Register = () => {
    return (
        <div className='flex flex-col w-[350px] items-center gap-8 border border-gray-300 bg-white p-8'>
            <img src="images/logo.png" className='w-[200px]' alt="" />
            <form className='flex flex-col gap-2 w-full'>

                <input type="text" placeholder='Username' className='p-2 outline-none border border-[#E8E8E8] bg-[#fafafa]' />
                <input type="text" placeholder='Name' className='p-2 outline-none border border-[#E8E8E8] bg-[#fafafa]' /> 
                <input type="text" placeholder='Surname' className='p-2 outline-none border border-[#E8E8E8] bg-[#fafafa]' /> 
                <input type="password" placeholder='Password' className='p-2 outline-none border border-[#E8E8E8] bg-[#fafafa]' />
                <input type="password" placeholder='Password Again' className='p-2 outline-none border border-[#E8E8E8] bg-[#fafafa]' />

                <Button text="Register" bgColor="bg-[#0095f6]" color="text-white" custom="mt-2" />
            </form>
        </div>
    )
}

export default Register