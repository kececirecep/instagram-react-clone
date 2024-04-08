import React, { useState, useEffect } from 'react'
import MenuButton from '../MenuButton/MenuButton'
import { Link, useNavigate } from 'react-router-dom'

import { GoHome } from "react-icons/go";
import { CiLogout } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

import { VscDiffAdded } from "react-icons/vsc";
import { PiUserSquare } from "react-icons/pi";
import { IoSearchOutline } from "react-icons/io5";

import { logout } from '../../firebase/firebase';
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from '../../redux/authSlice';


const Aside = () => {
    const [menuList, setMenuList] = useState(
        [
            {
                text: 'Home',
                icon: <GoHome size={30} color='black' />,
                url: '/',
                special: false,
            }, {
                text: 'Search',
                icon: <IoSearchOutline size={30} color='black' />,
                url: '/search',
                special: false,
            }, {
                text: 'Create',
                icon: <VscDiffAdded size={30} color='black' />,
                url: '/post-share',
                special: true,
            }, {
                text: 'Profile',
                icon: <PiUserSquare size={30} color='black' />,
                url: '/profile',
                special: true,
            }
        ]
    );

    const currentUser = useSelector(state => state.auth.currentUser)

    useEffect(() => {
        if (currentUser) {
            // Update the URL of the "Profile" menu item when currentUser exists
            setMenuList(prevMenuList => {
                const updatedMenuList = [...prevMenuList];
                updatedMenuList[3].url = `/profile/${currentUser.uid}`;
                return updatedMenuList;
            });
        }
    }, [currentUser]);


    const navigate = useNavigate()
    const dispacth = useDispatch()

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



    const logoutHandle = async () => {
        const logoutState = await logout()
        if (logoutState) {
            navigate('/login')
            console.log(true, "true");
            dispacth(setCurrentUser(null))
        } else {
            console.log(false, "false");
        }
    }



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
                        menuList.map((item, index) => {
                            if (windowWidth >= 1280) {
                                if (item.special && !currentUser) return null;

                                return (
                                    <MenuButton
                                        key={index}
                                        text={item.text}
                                        icon={item.icon}
                                        url={item.url}
                                    />
                                );
                            } else {
                                if (item.special && !currentUser) return null;

                                return (
                                    <MenuButton
                                        key={index}
                                        icon={item.icon}
                                        url={item.url}
                                    />
                                );
                            }
                        })
                    }
                </div>
                {
                    currentUser &&
                    <>
                        {
                            windowWidth >= 1280 ? (
                                <MenuButton
                                    navlink={false}
                                    onClick={() => logoutHandle()}
                                    text="Logout"
                                    icon={<CiLogout size={30} color='black' />}
                                />
                            ) : (
                                <MenuButton
                                    navlink={false}
                                    onClick={() => logoutHandle()}
                                    icon={<CiLogout size={30} color='black' />}
                                />
                            )
                        }
                    </>
                }

            </div>
        </div>
    )
}

export default Aside
