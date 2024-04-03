import React from 'react'
import Post from '../../components/Post/Post'

const Home = () => {
    return (
        <div className='flex flex-1 overflow-y-auto items-center flex-col'>
            <Post />
        </div>
    )
}

export default Home