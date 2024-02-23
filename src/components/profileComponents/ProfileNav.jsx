import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";

const ProfileNav = () => {
    return (
        <>
            <nav className='profileNav d-flex flex-row gap-2'>
                <div className='d-flex align-items-center gap-1 ' >
                    <IoIosSearch  size={'1.5em'} />
                    <input type='text' placeholder='search' className='form-control p-2' style={{
                        fontSize : '1.2rem'
                    }}/>
                </div>

                <div >
                    <img className='rounded-full' src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" style={{
                        width : '40px',
                        borderRadius : '100%'
                    }} />
                </div>
            </nav>
        </>
    )
}

export default ProfileNav