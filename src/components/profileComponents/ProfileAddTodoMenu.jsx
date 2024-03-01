import React from 'react'
import ColorScheme from './ColorScheme'

const ProfileAddTodoMenu = () => {
    return (
        <div className='sideAddTodoRight col-12 col-md-6 order-lg-2 order-md-2 order-sm-2 ms-2-md' style={{
            maxWidth: '500px',
            minWidth: '400px'
        }} >
            <div className="card shadow-sm">
                <div className="card-body">
                    <input type="text" className='form-control' placeholder='Enter Todo' />
                    <ColorScheme />
                    <button className='btn btn-outline-warning w-100 mt-2 fw-bold' >Add</button>
                </div>
            </div>
        </div>
    )
}

export default ProfileAddTodoMenu