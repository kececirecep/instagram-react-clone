import React, { useState } from 'react'
import Button from '../../components/Button/Button'

import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, firestore } from '../../firebase/firebase'
import { addDoc, getDocs,  collection, where, query } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'

const Register = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState();
    const [userName, setUserName] = useState();
    const [name, setName] = useState();
    const [password, setPassword] = useState();
    const [passwordAgain, setPasswordAgain] = useState();
    const [error, setError] = useState(null);

    const handleClick = async () => {
        setError({ message: "" })
        if (password !== passwordAgain) {
            setError({ message: "Şifreler Eşleşmiyor" })
            return;
        }
        try {
            const usersCollectionRef = collection(firestore, "users")
            const q = query(usersCollectionRef, where("username", "==", userName))
            const querySnapShot = await getDocs(q)

            if (!querySnapShot.empty) {
                setError({ message: "Bu kullanıcı adı zaten kullanılıyor." })
                return;
            }

            //Register
            const createUser = await createUserWithEmailAndPassword(auth, email, password)
            // await setDoc(doc(firestore, "users", createUser.user.uid), {
            //     username: userName,
            //     uid: createUser.user.uid,
            //     bio: "",
            //     name: name,
            //     profileImage: "https://i.stack.imgur.com/l60Hf.png",
            //     followers: []
            // })

             await addDoc(usersCollectionRef, {
                 username: userName,
                 uid: createUser.user.uid,
                 bio: "",
                 name: name,
                 profileImage: "https://i.stack.imgur.com/l60Hf.png",
                 followers: []
             })

            navigate("/login")


        } catch (error) {
            setError(error)
        }
    }





    return (
        <div className='flex justify-center items-center overflow-y-auto flex-1'>
            <div className='flex flex-col w-[350px] items-center gap-8 border border-gray-300 bg-white p-8'>
                <img src="images/logo.png" className='w-[200px]' alt="" />
                <form className='flex flex-col gap-2 w-full'>

                    <input onChange={(e) => setEmail(e.target.value)}
                        type="email" placeholder='Email' className='p-2 outline-none border border-[#E8E8E8] bg-[#fafafa]' />
                    <input onChange={(e) => setUserName(e.target.value)}
                        type="text" placeholder='Username' className='p-2 outline-none border border-[#E8E8E8] bg-[#fafafa]' />
                    <input onChange={(e) => setName(e.target.value)}
                        type="text" placeholder='Name' className='p-2 outline-none border border-[#E8E8E8] bg-[#fafafa]' />
                    <input onChange={(e) => setPassword(e.target.value)}
                        type="password" placeholder='Password' className='p-2 outline-none border border-[#E8E8E8] bg-[#fafafa]' />
                    <input onChange={(e) => setPasswordAgain(e.target.value)}
                        type="password" placeholder='Password Again' className='p-2 outline-none border border-[#E8E8E8] bg-[#fafafa]' />

                    <Button onClick={() => handleClick()} text="Register" bgColor="bg-[#0095f6]" color="text-white" custom="mt-2" />
                    {error && (<span className='text-red-500 text-center font-medium'>{error.message}</span>)}
                </form>
            </div>
        </div>
    )
}

export default Register