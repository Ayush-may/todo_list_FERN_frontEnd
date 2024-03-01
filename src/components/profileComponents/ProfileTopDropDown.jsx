import React, { useState } from 'react'

const TodoMenuDropDown = () => {
    return (
        <div className='profile-menu-logo-drop-down rounded-3 shadow-sm' style={style} >
            <button className='btn btn-outline-primary' >Edit_Profile</button>
            <button className='btn btn-outline-danger w-100' >LogOut</button>
        </div>
    )
}

export default TodoMenuDropDown

let style ={
    position: "absolute",
    zIndex : "99999",
    backgroundColor : "white",
    right : '10px'
}