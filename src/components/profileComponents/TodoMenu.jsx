import React, { useRef, useState } from 'react'
import { CiMenuKebab } from "react-icons/ci";
import TodoMenuDropDown from './TodoMenuDropDown';


const TodoMenu = ({noteKey}) => {

    const [isShow, setShow] = useState(false);

    return (
        <div className='menu-logo' style={{
            placeSelf : "flex-end"
        }} >
            <CiMenuKebab size={'1.4em'} onClick={() => { setShow(prev => !prev) }} className='menu-logo ' />
            {isShow && (<TodoMenuDropDown noteKey={noteKey} />)}
        </div>
    )
}

export default TodoMenu