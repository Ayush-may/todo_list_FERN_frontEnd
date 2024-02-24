import React, { useRef, useState } from 'react'
import { RiTodoLine } from "react-icons/ri";
import GithubAyush from './GithubAyush';
import { Link } from 'react-router-dom'
import FullWBtn from './smallComponents/FullWBtn'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';

const LoginPage = () => {
    const ref = useRef();
    axios.defaults.baseURL = 'https://todo-list-fern-backend.onrender.com';
    // axios.defaults.baseURL = 'http://localhost:5000';

    const [tempData, setTempData] = useState('');

    const checkForEmail = (e) => {
        const email = ref.current[0].value.toUpperCase();
        if (email === '') { ref.current[0].style.outline = 'none' }
        else {
            axios({
                url: '/check_user',
                method: 'GET',
            })
                .then(e => {
                    const data = e.data;
                    if (data.includes(email)) {
                        ref.current[0].style.outline = '3px solid  #e74c3c' //red
                    } else {
                        ref.current[0].style.outline = '3px solid  #2ecc71' //green
                    }
                })
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
            document.body.style.cursor = 'loading';
            axios({
                url: '/create_user',
                method: 'POST',
                data: { email, password }
            }).then(e => {
                document.body.style.cursor = 'default';
                notify();
                ref.current[0].value = ''
                ref.current[1].value = ''
            }).catch(e => {
                toast.error("Something went wrong !");
            })
        }
    }

    const notify = () => {
        toast.success("User is created successfully !");
    };

    return (
        <>
            <ToastContainer theme="colored" closeOnClick={true} pauseOnFocusLoss={false} />
            <div className='loginPage' >
                <div className='loginCard shadow-sm  p-4' >
                    <div className='d-flex flex-column align-items-center' ><RiTodoLine size={'2em'} /></div>
                    <h3 className='fw-bold mt-3 text-center' >Sign up</h3>
                    <form ref={ref} action="">
                        <table className='mt-3 w-100'>
                            <tbody>
                                <tr>
                                    <td><label htmlFor="" className=''>Email</label></td>
                                    <td><input type="email" name='username' className='form-control' placeholder='Enter email' required onInput={(e) => { checkForEmail(e) }} /></td>
                                </tr>
                                <tr >
                                    <td><label htmlFor="" className=''>Password</label></td>
                                    <td><input type="password" name='password' className=' form-control' placeholder='Enter password' required /></td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                    <div onClick={(e) => handleForm(e)} ><FullWBtn name={'Sign Up'} /></div>
                    <hr />
                    <Link to={'/'} > <button className='btn btn-success w-100 border mt-4' >Login</button> </Link>
                </div>
            </div>
            <GithubAyush />
        </>
    )
}

export default LoginPage