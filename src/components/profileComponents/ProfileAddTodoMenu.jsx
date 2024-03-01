import React, { useRef } from 'react'
import ColorScheme from './ColorScheme'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../../features/todos/todoSlice';

const ProfileAddTodoMenu = () => {
    const ref = useRef();
    const dispatch = useDispatch();
    console.log(useSelector(state => state.todo.todos))
    const addTodoMethod = () => {
        const todo = ref.current.childNodes[0].value;
        dispatch(addTodo(todo));
    }

    return (
        <div className='sideAddTodoRight col-12 col-md-6 order-lg-2 order-md-2 order-sm-2 ms-2-md' style={{
            maxWidth: '500px',
            minWidth: '400px'
        }} >
            <div className="card shadow-sm">
                <div className="card-header fw-bold text-center">
                    Add Todo
                </div>
                <div className="card-body" ref={ref}>
                    <input type="text" name='input' className='form-control' placeholder='Enter Todo' />
                    <ColorScheme />
                    <button className='btn btn-outline-warning w-100 mt-2 fw-bold' onClick={addTodoMethod} >Add</button>
                </div>
            </div>
        </div>
    )
}

export default ProfileAddTodoMenu