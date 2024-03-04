import React, { useEffect, useRef, useState } from 'react'
import { RiTodoLine } from "react-icons/ri";
import GithubAyush from './GithubAyush';
import { Link, useNavigate } from 'react-router-dom'
import FullWBtn from './smallComponents/FullWBtn'
import axios from 'axios'
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { setCurrentUserUID } from '../features/todos/todoSlice';

const LoginPage = () => {
    const ref = useRef();
    axios.defaults.baseURL = 'https://todo-list-fern-backend.onrender.com';
    // axios.defaults.baseURL = 'http://localhost:5000';

    const [tempData, setTempData] = useState([]);
    const navigate = useNavigate();
    const redOutline = '3px solid  #e74c3c';
    const greenOutline = '3px solid  #2ecc71';
    const regx = /^([a-zA-Z0-9\.-]+)@gmail\.com$/gi;
    const dispatch = useDispatch();

    useEffect(() => {
        try {
            axios({
                url: '/check_user',
                method: 'GET'
            })
                .then(e => { setTempData(e.data) })
        } catch (error) { }
    }, []);

    const checkForEmail = (e) => {
        const email = ref.current[0].value.toUpperCase();
        if (email === '') { ref.current[0].style.outline = 'none' }
        else {
            if (!regx.test(email)) {
                ref.current[0].style.outline = redOutline //red
            } else if (tempData.includes(email)) {
                ref.current[0].style.outline = redOutline //red
            } else {
                ref.current[0].style.outline = greenOutline //green
            }
        }
    }

    const handleForm = (e) => {
        const email = ref.current[0].value;
        const password = ref.current[1].value

        if (email === '' || password === '') {
            toast.error("Fill the form", {
                closeOnClick: true,
                pauseOnHover: false
            });
        }
        else {
            const id = toast.loading('Please wait');
            axios({
                url: '/createauthuser',
                method: 'POST',
                data: { email, password }
            }).then(e => {
                ref.current[0].value = ''
                ref.current[1].value = ''
                localStorage.setItem('uId', e.data.localId);
                dispatch(setCurrentUserUID(e.data.localId));
                toast.update(id, { render: 'Account is created !', type: 'success', isLoading: false, autoClose: true, closeOnClick: true });
                navigate('/sign_up/add_image', { state: { email, password } });
            }).catch(e => {
                toast.update(id, { render: 'Something went wrong !', type: 'error', isLoading: false, autoClose: true, closeOnClick: true });
            })
        }
    }

    return (
        <>
            <div className='loginPage' >
                <div className='loginCard shadow-sm mt-5 p-4' >
                    <div className='d-flex flex-column align-items-center' ><RiTodoLine size={'2em'} /></div>
                    <h3 className='fw-bold mt-3 text-center' >Sign up</h3>
                    <form ref={ref} action="">
                        <table className='mt-3 w-100'>
                            <tbody>
                                <tr>
                                    <td><label htmlFor="" className=''>Email</label></td>
                                    <td><input type="email" name='username' className='form-control' placeholder='Enter email' required onInput={(e) => { checkForEmail(e) }} onFocus={(e) => getUsers(e)} /></td>
                                </tr>
                                <tr >
                                    <td><label htmlFor="" className=''>Password</label></td>
                                    <td><input type="password" name='password' className=' form-control' placeholder='Enter password' required /></td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                    <div onClick={(e) => handleForm(e)} ><FullWBtn name={'Create account'} /></div>
                    <hr />
                    <Link to={'/'} > <button className='btn btn-success w-100 border mt-4' >Login</button> </Link>
                </div>
            </div>
            <GithubAyush />
        </>
    )
}

export default LoginPage