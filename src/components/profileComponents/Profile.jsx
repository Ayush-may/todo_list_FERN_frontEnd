import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router';
import ProfileNav from './NavProfile'
import ProfileHandler from './ProfileHandler'

const Profile = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [userData, setUserData] = useState();

    useEffect(() => {
        if (location.state == "" || location.state == undefined) {
            navigate('/');
        } else {
            setUserData(location.state);
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