import React from 'react'
import { RiHome2Line } from "react-icons/ri";
import { RiProfileLine } from "react-icons/ri";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

const SideMenuProfile = () => {
    return (
        <>
            <div className='sideMenuProfile shadow' >
                <ul className=' pt-5'>
                    <div className='' >
                        <li className='selected_li d-flex gap-2 align-items-center ' > <RiHome2Line size={'1.2em'} /> Overview </li>
                        <li className='not_selected_li d-flex gap-2 align-items-center ' > <RiProfileLine size={'1.2em'} /> Profile </li>
                    </div>
                    <li className='  not_selected_li d-flex gap-2 align-items-center ' > <RiLogoutBoxRLine size={'1.2em'} /> Log out </li>
                </ul>
            </div>
        </>
    )
}

export default SideMenuProfile