import React from 'react'
import Todo from './Todo'

const ProfileTodoArea = () => {
    return (
        <div className='sideAddTodoLeft col-12 col-md-8 order-md-2 order-sm-1 d-flex gap-3 flex-wrap justify-content-start' style={{ maxWidth: "800px", minWidth: "300px" }} >
            <Todo />
            <Todo />
            <Todo />
        </div>
    )
}

export default ProfileTodoArea