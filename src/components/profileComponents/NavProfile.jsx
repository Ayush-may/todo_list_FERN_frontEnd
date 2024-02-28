import React from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";

const NavProfile = () => {
    return (
        <nav className='nav py-3 px-5 shadow-sm' >
            <div className='d-flex gap-4 align-items-center' >
                <input type="text" placeholder='Search todo' className='rounded-lg border py-4 px-3' />
                <div>
                    <MdKeyboardArrowDown onClick={() => { }} size={'1.4em'} style={{ cursor: 'pointer' }} />
                </div>
                <div className='img-container' >
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" />
                </div>
            </div>
        </nav>
    )
}

export default NavProfile