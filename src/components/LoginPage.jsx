import React, { useEffect, useRef } from 'react'
import { RiTodoLine } from "react-icons/ri";
import GithubAyush from './GithubAyush';
import { Link } from 'react-router-dom'
import FullWBtn from './smallComponents/FullWBtn';

const LoginPage = () => {
    const ref = useRef();
    const handleLogin = (e) => {
        
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
                                <td><input name='email' type="text" className=' form-control' placeholder='Enter email' /></td>
                            </tr>
                            <tr >
                                <td><label htmlFor="" className=''>Password</label></td>
                                <td><input name='password' type="text" className=' form-control' placeholder='Enter password' /></td>
                            </tr>
                        </table>
                    </form>
                    <div onClick={(e)=>{ handleLogin(e) }} ><FullWBtn name={'Sign In'} /></div>
                    <hr />
                    <Link to={'/sign_up'} > <button className='btn btn-danger w-100 border mt-4' >Create new account ?</button> </Link>
                </div>
            </div>
            <GithubAyush />
        </>
    )
}

export default LoginPage