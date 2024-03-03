import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchQuery } from '../../features/todos/todoSlice';

const NavSearch = () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const refine = (e) => { dispatch(searchQuery(value)); }

    return (
        <input
            onChange={(e) => { setValue(e.target.value); }}
            onKeyUp={refine}
            value={value}
            type="text"
            placeholder='Search todo'
            className='rounded-lg border py-4 px-3'
        />
    )
}

export default NavSearch