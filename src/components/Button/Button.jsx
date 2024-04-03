import React from 'react'
import { Link } from 'react-router-dom'

const Button = (props) => {
    return (
        <Link to={props.url} className={`${props.bgColor} ${props.color} p-2 rounded-md ${props.custom}`} onClick={props.onClick}>
            <div className='flex items-center justify-center gap-2'>
                {props.icon}
                {props.text}
            </div>
        </Link>
    )
}

export default Button