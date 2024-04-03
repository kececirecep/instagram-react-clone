import React, { useState, useEffect } from 'react'
import MenuButton from '../MenuButton/MenuButton'
import { Link } from 'react-router-dom'

import { GoHome } from "react-icons/go";
import { CiLogout } from "react-icons/ci";

import { FaInstagram } from "react-icons/fa";

 
import { VscDiffAdded } from "react-icons/vsc";
import { PiUserSquare } from "react-icons/pi";

import { IoSearchOutline } from "react-icons/io5";

const menuList = [
    {
        text: 'Home',
        icon: <GoHome size={30} color='black' />,
        url: '/home'
    },
    {
        text: 'Search',
        icon: <IoSearchOutline size={30} color='black' />,
        url: '/search'
    },{
        text: 'Create',
        icon: <VscDiffAdded size={30} color='black' />,
        url: '/create'
    },{
        text: 'Profile',
        icon: <PiUserSquare size={30} color='black' />,
        url: '/profile'
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
        <div className='border-r-2 border-gray-300 h-[100vh] flex flex-col px-3 py-6 w-[100px] xl:w-[335px] duration-300 bg-white' id='sidebar'>
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
