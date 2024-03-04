import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router';
import ProfileNav from './NavProfile'
import ProfileHandler from './ProfileHandler'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

const Profile = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [userUID, setUserUID] = useState();
    const dispatch = useDispatch();

    useEffect(() => {
        if (localStorage.getItem('uId') != null) {
            setUserUID(localStorage.getItem('uId'));

            // axios({
            //     url: '',
            //     method: 'GET',
            //     data: { userUID }
            // })
            // .then(e=>{
            //     dispatch(e);
            // })
        } else {
            navigate('/');
        }
    }, []);

    return (
        <>
            <div className='profile' >
                <ProfileNav />
                <ProfileHandler />
            </div>
        </>
    )
}

export default Profile