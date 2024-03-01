import React, { useState } from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";
import ProfileTopDropDown from './ProfileTopDropDown'

const NavProfile = () => {
    const [isShow, setShow] = useState(false);
    return (
        <nav className='nav py-3 px-5 shadow-sm' >
            <div className='d-flex gap-4 align-items-center' >
                <input type="text" placeholder='Search todo' className='rounded-lg border py-4 px-3' />
                <div className='position-relative'>
                    <MdKeyboardArrowDown onClick={() => setShow(prev=>!prev)} size={'1.4em'} style={{ cursor: 'pointer' }} />
                    {
                        isShow && (<ProfileTopDropDown />)
                    }
                </div>
                <div className='img-container' >
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" />
                </div>
            </div>
        </nav>
    )
}

export default NavProfile