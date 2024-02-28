import React from 'react'

const ProfileHandler = () => {
    return (
        <>
            <div className='profileHandler px-4 px-md-0 ' >
                <div className='row gap-2' style={{ justifyContent: 'center' }} >
                    <div className='sideAddTodoRight col-12 col-md-3 order-md-1 
                        order-sm-2 ms-2-md'  >
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
                    <div className='sideAddTodoLeft col-12 col-md-8 order-md-2 order-sm-1' style={{ maxWidth: "800px", minWidth: "300px" }} >
                        <div className='todo' >
                            <div className="todo-body">
                                adsasd
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* small circle */}
            <div className='add-todo bg-danger shadow border' >+</div>
        </>
    )
}

export default ProfileHandler