import React, { useState, useEffect } from 'react'
import MenuButton from '../MenuButton/MenuButton'
import { Link } from 'react-router-dom'

import { GoHome } from "react-icons/go";
import { CiLogout } from "react-icons/ci";

import { FaInstagram } from "react-icons/fa";

const menuList = [
    {
        text: 'Home',
        icon: <GoHome size={30} color='black' />,
        url: '/home'
    },
    {
        text: 'Home',
        icon: <GoHome size={30} color='black' />,
        url: '/xs'
    }
]

const Aside = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='border-r-2 border-gray-300 h-[100vh] flex flex-col px-3 py-6 w-[100px] xl:w-[335px] duration-300 ' id='sidebar'>
            <Link to="/" className='p-3 mb-6'>
                {
                    windowWidth >= 1280 ? (
                        <img src="/images/logo.png" className='w-[123px]' alt="" />
                    ) : (

                        <div className='flex justify-center'>
                            <FaInstagram size={30} />
                        </div>
                    )
                }
            </Link>
            <div className='flex flex-col justify-between h-full'>
                <div>
                    {
                        menuList.map((index) => {
                            if (windowWidth >= 1280) {
                                return (
                                    <MenuButton text={index.text} icon={index.icon} url={index.url} />
                                )
                            } else {
                                return (
                                    <MenuButton icon={index.icon} url={index.url} />
                                )
                            }
                        })
                    }
                </div>
                {
                    windowWidth >= 1280 ? (
                        <MenuButton
                            text="Logout"
                            icon={<CiLogout size={30} color='black' />}
                            url="/test"
                        />
                    ) : (
                        <MenuButton
                            icon={<CiLogout size={30} color='black' />}
                            url="/test"
                        />
                    )
                }

            </div>
        </div>
    )
}

export default Aside