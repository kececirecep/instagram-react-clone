import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import { loginAsync } from '../../redux/loginSlice';
import { useDispatch } from 'react-redux';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

     
    const handleClick = () => {
        dispatch(loginAsync({email,password}))

        
    };

    return (
        <div className='flex justify-center items-center overflow-y-auto flex-1'>
            <div className='flex flex-col w-[90%] sm:w-[350px] items-center gap-8 border border-gray-300 bg-white p-8'>
                <img src="images/logo.png" className='w-[200px]' alt="" />
                <form className='flex flex-col gap-2 w-full'>

                    <input onChange={(e)=>setEmail(e.target.value)}
                     type="text" placeholder='Email' className='p-2 outline-none border border-[#E8E8E8] bg-[#fafafa]' />
                    <input onChange={(e)=>setPassword(e.target.value)}
                     type="password" placeholder='Password' className='p-2 outline-none border border-[#E8E8E8] bg-[#fafafa]' />

                    <Button text="Login" bgColor="bg-[#0095f6]" color="text-white" custom="mt-2" onClick={handleClick} />
                </form>
            </div>
        </div>
    );
};

export default Login;
