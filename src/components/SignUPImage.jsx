import React, { useEffect, useRef, useState } from 'react'
import FullWBtn from './smallComponents/FullWBtn'
import GithubAyush from './GithubAyush'
import { useLocation, useNavigate } from 'react-router';


const SignUPImage = () => {
    const ref = useRef();
    const location = useLocation();
    const navigate = useNavigate();
    const [load, setLoad] = useState(false);
    const [name, setName] = useState('');
    
    useEffect(() => {
        try {
            if (location.state == null) {
                navigate('/sign_up');
            } else {
                setName(location.state.email);
                setLoad(true);
            }
        } catch (error) { }
    }, []);

    const handle = (e) => {
        const file = e.target.files[0];
        // second approach
        const reader = new FileReader();
        reader.readAsDataURL(file)
        reader.onload = (e) => {
            const src = reader.result;
            ref.current.src = src;
        }
    }

    return (
        <>
            {
                load && (
                    <>
                        <div className='loginPage' >
                            <div className="signUPImage shadow-sm p-4 ">
                                <div className='imageSection border-dark' >
                                    <img ref={ref} src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" />
                                </div>
                                <div>
                                    <p className='text-center fs-5 mt-1 fw-bold' >{name}</p>
                                    <input type="file" accept='image/png' className='mt-4 form-control' onInput={(e) => handle(e)} />
                                    <FullWBtn name={'Continue'} />
                                    <button className='btn btn-danger border  mt-4 form-control d-flex justify-content-center' >Skip</button>
                                </div>
                            </div>
                        </div>
                        <GithubAyush />
                    </>
                )
            }

        </>
    )
}

export default SignUPImage



// First approach
// const url = URL.createObjectURL(file)
// console.log(url)
// ref.current.src = url;

