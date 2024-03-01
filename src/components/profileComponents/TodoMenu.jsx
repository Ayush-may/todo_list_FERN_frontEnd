import React, { useRef, useState } from 'react'
import { CiMenuKebab } from "react-icons/ci";
import TodoMenuDropDown from './TodoMenuDropDown';


const TodoMenu = () => {

    const [isShow, setShow] = useState(false);

    return (
        <div className='menu-logo' style={{
            placeSelf : "flex-end"
        }} >
            <CiMenuKebab size={'1.4em'} onClick={() => { setShow(prev => !prev) }} className='menu-logo ' />
            {isShow && (<TodoMenuDropDown />)}
        </div>
    )
}

export default TodoMenu