import React from 'react'
import Todo from './Todo'
import Note from './Note'
import { useSelector } from 'react-redux'

const ProfileTodoArea = () => {
    const note = "heyy"
    const todo = useSelector(state => state.todo.todos);
    console.log(todo)
    return (
        <div className='sideAddTodoLeft order-md-2 order-sm-1 px-3 gap-3 d-flex align-items-center justify-content-center flex-wrap ' style={{ maxWidth: "1200px", minWidth: "400px" }} >
            {/* <Todo /> */}
            {
                todo.map(e => <Note key={e.id} todo={e.text} date={e.date} time={e.time}/>)
            }
        </div>
    )   
}

export default ProfileTodoArea