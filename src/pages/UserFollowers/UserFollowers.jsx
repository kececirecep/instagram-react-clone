import React from 'react' 
import UserCard from '../../components/UserCard/UserCard'

const UserFollowers = () => {
    return (
        <div className='flex flex-wrap overflow-y-auto py-10'>
            <div className='w-full block text-xl p-4'>
                <h2><span className='font-semibold text-[#0095F6]'>r.kececi</span> takipçileri</h2>
            </div>
            <UserCard/>
        </div >
    )
}

export default UserFollowers