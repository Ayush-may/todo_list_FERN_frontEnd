import React, { useEffect, useRef, useState } from 'react'
import { RiClosedCaptioningLine, RiTodoLine } from "react-icons/ri";
import GithubAyush from './GithubAyush';
import { Link, useNavigate } from 'react-router-dom'
import FullWBtn from './smallComponents/FullWBtn';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { setCurrentUserUID, fetchTodoFromCurrentUser } from '../features/todos/todoSlice';
import 'bootstrap/dist/css/bootstrap.min.css';
axios.defaults.baseURL = 'https://todo-list-fern-backend.onrender.com';

const createUserInFirebaseDatabase = async (userID) => {
    const user = await axios({
        url: "",
        method: "POST",
        data: { userID }
    });

    return user;
}

const LoginPage = () => {
    const ref = useRef();
    const btnRef = useRef();
    const inpRef = useRef();
    const navigate = useNavigate();
    const redOutline = '3px solid  #e74c3c';
    const greenOutline = '3px solid  #2ecc71';
    const regx = /^([a-zA-Z0-9\.-]+)@gmail\.com$/gi;
    const dispatch = useDispatch();

    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    useEffect(() => {
        if (localStorage.getItem('uId') != null) {
            navigate('/profile');
        }
    }, []);

    const handleChanges = (e) => {
        // Destructuring the value
        const { name, value } = e.target;
        setUser(prev => ({ ...prev, [name]: value }));

        if (user.email == '') { inpRef.currenfeatt.style.outline = 'none' }
        else {
            if (!regx.test(user.email)) {
                inpRef.current.style.outline = redOutline //red
            } else {
                inpRef.current.style.outline = greenOutline //red
            }
        }
    }

    const handleLogin = (e) => {
        const id = toast.loading('Please wait');
        const userData = {
            method: 'POST',
            url: "/signinuser",
            data: { email: user.email, password: user.password }
        }
        try {
            axios(userData)
                .then(e => {
                    if (e.data.error) {
                        // Error
                        toast.update(id, { render: 'Something went wrong !', type: 'error', isLoading: false, autoClose: true, closeOnClick: true });
                    } else {
                        // Success
                        const UID = e.data.localId;
                        localStorage.setItem('uId', UID);
                        dispatch(setCurrentUserUID({ UID }));
                        dispatch(fetchTodoFromCurrentUser());
                        navigate('/profile', {
                            state: e.data
                        });
                        toast.update(id, { render: 'Successfully logged in !', type: 'success', isLoading: false, autoClose: true, closeOnClick: true });
                    }
                }).catch(e => { })
        } catch (error) { }
    }

    return (
        <>
            <div className='loginPage' >
                <div className='loginCard shadow-sm mt-5  p-4' >
                    <div className='d-flex flex-column align-items-center' ><RiTodoLine size={'2em'} /></div>
                    <h3 className='fw-bold mt-3 text-center' >Sign in</h3>
                    <form ref={ref}>
                        <table className='mt-3 w-100'>
                            <tbody>
                                <tr>
                                    <td><label htmlFor="" className=''>Email</label></td>
                                    <td><input ref={inpRef} name='email' type="text" className=' form-control' onChange={handleChanges} onFocus={handleChanges} placeholder='Enter email' /></td>
                                </tr>
                                <tr >
                                    <td><label htmlFor="" className=''>Password</label></td>
                                    <td><input name='password' type="text" className=' form-control' onChange={handleChanges} placeholder='Enter password' /></td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                    <div ref={btnRef} onClick={handleLogin} ><FullWBtn name={'Sign In'} /></div>
                    <hr />
                    <Link to={'/sign_up'} > <button className='btn btn-danger w-100 border mt-4' >Create new account ?</button> </Link>
                </div>
            </div>
            <GithubAyush />
        </>
    )
}

export default LoginPage