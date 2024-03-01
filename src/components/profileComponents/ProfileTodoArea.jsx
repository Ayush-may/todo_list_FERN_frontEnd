import React from 'react'
import Todo from './Todo'
import Note from './Note'

const ProfileTodoArea = () => {
    const note = "heyy"
    return (
        <div className='sideAddTodoLeft order-md-2 order-sm-1 px-3 gap-3 d-flex align-items-center justify-content-center flex-wrap ' style={{ maxWidth: "1200px", minWidth: "400px" }} >
            <Todo />
            <Note note={"lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem "} />
            <Note note={note} />
            <Note note={'adsadsade'} />
        </div>
    )
}

export default ProfileTodoArea