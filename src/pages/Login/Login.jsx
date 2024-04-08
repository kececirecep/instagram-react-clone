import React, { useState } from 'react';
import Button from '../../components/Button/Button'; 

import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase/firebase'
import { useNavigate } from 'react-router-dom'; 

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

     

    const navigate = useNavigate()


    const handleClick = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
            navigate("/")
        } catch (error) {
            setError(error)
        }
    };

    return (
        <div className='flex justify-center items-center overflow-y-auto flex-1'> 
            <div className='flex flex-col w-[90%] sm:w-[350px] items-center gap-8 border border-gray-300 bg-white p-8'>
                <img src="images/logo.png" className='w-[200px]' alt="" />
                <form className='flex flex-col gap-2 w-full'>

                    <input onChange={(e) => setEmail(e.target.value)}
                        type="text" placeholder='Email' className='p-2 outline-none border border-[#E8E8E8] bg-[#fafafa]' />
                    <input onChange={(e) => setPassword(e.target.value)}
                        type="password" placeholder='Password' className='p-2 outline-none border border-[#E8E8E8] bg-[#fafafa]' />

                    <Button text="Login" bgColor="bg-[#0095f6]" color="text-white" custom="mt-2" onClick={handleClick} />
                    {error && (<span className='text-red-500 text-center'>{error.message}</span>)}
                </form>
            </div>

        </div >
    );
};

export default Login;
