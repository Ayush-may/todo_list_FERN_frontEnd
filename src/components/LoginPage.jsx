import React, { useEffect, useRef, useState } from 'react'
import { RiTodoLine } from "react-icons/ri";
import GithubAyush from './GithubAyush';
import { Link } from 'react-router-dom'
import FullWBtn from './smallComponents/FullWBtn';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const LoginPage = () => {
    const ref = useRef();
    const btnRef = useRef();
    const inpRef = useRef();
    const redOutline = '3px solid  #e74c3c';
    const greenOutline = '3px solid  #2ecc71';
    const regx = /^([a-zA-Z0-9\.-]+)@gmail\.com$/gi;

    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    useEffect(() => {

    }), [];

    const handleChanges = (e) => {
        // Destructuring the value
        const { name, value } = e.target;
        setUser(prev => ({ ...prev, [name]: value }));

        if (user.email == '') { inpRef.current.style.outline = 'none' }
        else {
            if (!regx.test(user.email)) {
                inpRef.current.style.outline = redOutline //red
            } else {
                inpRef.current.style.outline = greenOutline //red
            }
        }
    }

    const handleLogin = (e) => {
        const userData = {
            method: 'POST',
            url: "",
            data: { email: user.email, password: user.password }
        }
        /*
            create a  conection to API for sign in the user with its UiD
            So the user( current ) can access its data 
        */
        const res = toast.promise(axios(userData), {
            pending: 'Loading...',
            success: 'Logged in ',
            error: 'Something went wrong'
        })
        console.log(res)
    }
    return (
        <>
            <div className='loginPage' >
                <div className='loginCard shadow-sm  p-4' >
                    <div className='d-flex flex-column align-items-center' ><RiTodoLine size={'2em'} /></div>
                    <h3 className='fw-bold mt-3 text-center' >Sign in</h3>
                    <form ref={ref}>
                        <table className='mt-3 w-100'>
                            <tr>
                                <td><label htmlFor="" className=''>Email</label></td>
                                <td><input ref={inpRef} name='email' type="text" className=' form-control' onChange={handleChanges} onFocus={handleChanges} placeholder='Enter email' /></td>
                            </tr>
                            <tr >
                                <td><label htmlFor="" className=''>Password</label></td>
                                <td><input name='password' type="text" className=' form-control' onChange={handleChanges} placeholder='Enter password' /></td>
                            </tr>
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