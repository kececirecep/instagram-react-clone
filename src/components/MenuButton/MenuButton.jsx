import React from 'react';

import { NavLink } from 'react-router-dom';

const MenuButton = (props) => {
  return (
    <NavLink to={props.url} className='w-full flex items-center justify-center xl:justify-start gap-3 p-3 mt-1 mb-1 rounded-xl hover:bg-[#F2F2F2]' >
      {props.icon}
      {props.text ? <h5 className='capitalize text-lg' >{props.text}</h5> : ''}
    </NavLink>
  )
}

export default MenuButton;
