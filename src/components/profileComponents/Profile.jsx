import React from 'react'
import ProfileNav from './ProfileNav'
import SideMenuProfile from './SideMenuProfile'

const Profile = () => {
    return (
        <>
            <div className='profileAll d-flex flex-row' >
                <SideMenuProfile />
                <div className='bg-white w-100 px-3 py-3'>
                    <ProfileNav />
                </div>
            </div>
        </>
    )
}

export default Profile