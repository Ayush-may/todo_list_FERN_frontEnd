import React, { useEffect, useState } from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";
import { useLocation, useNavigate } from 'react-router';

const Profile = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [userData, setUserData] = useState();

    useEffect(()=>{
        if(location.state == "" || location.state == undefined){
            navigate('/');
        }else{
            setUserData(location.state);
        }
    },[]);

    return (
        <>
            <div className='profile' >
                <nav className='nav py-3 px-5 shadow-sm' >
                    <div className='d-flex gap-4 align-items-center' >
                        <input type="text" placeholder='Search todo' className='rounded-lg border py-4 px-3' />
                        <div>
                            <MdKeyboardArrowDown onClick={() => { }} size={'1.4em'} style={{ cursor: 'pointer' }} />
                        </div>
                        <div className='img-container' >
                            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" />
                        </div>
                    </div>
                </nav>

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
            </div>
        </>
    )
}

export default Profile