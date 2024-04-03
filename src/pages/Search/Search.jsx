import React from 'react' 
import UserCard from '../../components/UserCard/UserCard'

const Search = () => {
    return (
        <div className='flex flex-wrap overflow-y-auto py-10'>
            <div className='block text-md ml-2 mb-4 w-full'>
                <input type="text" placeholder='Search user' className='outline-none px-6 p-2 border-b border-gray-400 rounded-md w-[90%] sm:w-[300px]' />
            </div>
            <UserCard/>
        </div>
    )
}

export default Search