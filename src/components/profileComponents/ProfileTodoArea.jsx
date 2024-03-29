import React from 'react'
import Todo from './Todo'
import Note from './Note'
import { useSelector } from 'react-redux'
import { selectedSearchQuery } from '../../features/todos/todoSlice'

const ProfileTodoArea = () => {
    const todo = useSelector(selectedSearchQuery);

    return (
        <div className='sideAddTodoLeft order-md-2 order-sm-1 px-3 gap-3 d-flex align-items-center justify-content-center flex-wrap ' style={{ maxWidth: "1200px", minWidth: "400px" }} >
            {
                todo.length <= 0 ? <div className='fw-light display-4' style={{marginTop : "2rem"}} >No Todo.</div> :
                todo.map(e => <Note key={e.id} noteKey={e.id} todo={e.text} date={e.date} time={e.time} />)
            }
        </div>
    )
}

export default ProfileTodoArea