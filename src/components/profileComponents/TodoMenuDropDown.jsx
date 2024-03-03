import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../../features/todos/todoSlice'
import { ToastContainer, toast } from 'react-toastify';

const TodoMenuDropDown = ({ noteKey }) => {
    const dispatch = useDispatch();

    const removeSelectTodo = () => {
        dispatch(removeTodo(noteKey));
        toast('Removed !', {
            type: 'success',
            position: 'bottom-right'
        });
    }

    return (
        <>

            <div className='menu-logo-drop-down rounded-3 shadow-sm' >
                <button className='w-100 btn ' >Edit</button>
                <button className='w-100 btn btn-outline-danger' onClick={removeSelectTodo} >Remove</button>
            </div>
        </>
    )
}

export default TodoMenuDropDown