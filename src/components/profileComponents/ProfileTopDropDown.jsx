import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux';
import { resetTodoState } from '../../features/todos/todoSlice';
import { persistor } from '../../app/store';

const TodoMenuDropDown = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogOut = () => {
        localStorage.removeItem('uId');
        dispatch( resetTodoState() );
        persistor.purge();
        navigate('/');
    }

    return (
        <div className='profile-menu-logo-drop-down rounded-3 shadow-sm' style={style} >
            <button className='btn btn-outline-primary' >Edit_Profile</button>
            <button className='btn btn-outline-danger w-100' onClick={handleLogOut} >LogOut</button>
        </div>
    )
}

export default TodoMenuDropDown

let style = {
    position: "absolute",
    zIndex: "99999",
    backgroundColor: "white",
    right: '10px'
}