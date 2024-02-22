import React from 'react'
import { RiTodoLine } from "react-icons/ri";
import GithubAyush from './GithubAyush';
import { Link } from 'react-router-dom'
import FullWBtn from './smallComponents/FullWBtn'


const LoginPage = () => {
    return (
        <>
            <div className='loginPage' >
                <div className='loginCard shadow-sm  p-4' >
                    <div className='d-flex flex-column align-items-center' ><RiTodoLine size={'2em'} /></div>
                    <h3 className='fw-bold mt-3 text-center' >Sign up</h3>
                    <table className='mt-3 w-100'>
                        <tr>
                            <td><label htmlFor="" className=''>Email</label></td>
                            <td><input type="text" className=' form-control' placeholder='Enter email' /></td>
                        </tr>
                        <tr >
                            <td><label htmlFor="" className=''>Password</label></td>
                            <td><input type="text" className=' form-control' placeholder='Enter password' /></td>
                        </tr>
                    </table>
                    <FullWBtn name={'Sign Up'} />
                    <hr />
                    <Link to={'/'} > <button className='btn btn-success w-100 border mt-4' >Login</button> </Link>
                </div>
            </div>
            <GithubAyush />
        </>
    )
}

export default LoginPage