import React from 'react'

const ProfileAddTodoMenu = () => {
    return (
        <div className='sideAddTodoRight col-12 col-md-3 order-md-1 order-sm-2 ms-2-md'  >
            <div className="card shadow-sm">
                <div className="card-body">
                    <input type="text" className='form-control' placeholder='Enter Todo' />
                    <div className='todo-color-scheme'>
                        <div className='color-red'>
                            <div classsName='color-circle bg-danger'></div>
                            Red
                        </div>
                    </div>
                    <button className='btn btn-danger w-100 mt-2 fw-bold' >Add</button>
                </div>
            </div>
        </div>
    )
}

export default ProfileAddTodoMenu