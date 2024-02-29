import React from 'react'
import Todo from './Todo'

const ProfileTodoArea = () => {
    return (
        <div className='sideAddTodoLeft col-12 col-md-8 order-md-2 order-sm-1' style={{ maxWidth: "800px", minWidth: "300px" }} >
            <Todo />
        </div>
    )
}

export default ProfileTodoArea