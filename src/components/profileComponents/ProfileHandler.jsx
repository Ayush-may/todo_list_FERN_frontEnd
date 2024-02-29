import React from 'react'
import ProfileAddTodoMenu from './ProfileAddTodoMenu'
import ProfileTodoArea from './ProfileTodoArea'
import ProfileSmallCircle from './ProfileSmallCircle'

const ProfileHandler = () => {
    return (
        <>
            <div className='profileHandler px-4 px-md-0 ' >
                <div className='row gap-2' style={{ justifyContent: 'center' }} >
                    <ProfileAddTodoMenu />
                    <ProfileTodoArea />
                </div>
            </div>            
            <ProfileSmallCircle />
        </>
    )
}

export default ProfileHandler