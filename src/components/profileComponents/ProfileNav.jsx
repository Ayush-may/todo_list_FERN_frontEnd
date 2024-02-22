import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";

const ProfileNav = () => {
    return (
        <>
            <nav className='profileNav'>
                <div >
                    <IoIosSearch />
                    <input type='text' placeholder='search' />
                </div>
            </nav>
        </>
    )
}

export default ProfileNav