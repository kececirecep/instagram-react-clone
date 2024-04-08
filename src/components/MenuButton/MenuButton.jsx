import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const MenuButton = ({ navlink = true, url, icon, text, onClick }) => {
  const Component = navlink ? NavLink : Link;

  return (
    <Component
      to={url}
      className='w-full flex items-center justify-center xl:justify-start gap-3 p-3 mt-1 mb-1 rounded-xl hover:bg-[#F2F2F2]'
      onClick={onClick}
    >
      {icon}
      {text && <h5 className='capitalize text-lg'>{text}</h5>}
    </Component>
  );
};

export default MenuButton;
