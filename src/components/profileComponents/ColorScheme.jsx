import React from 'react'
import { useSelector } from 'react-redux'

const ColorScheme = () => {
    const color = useSelector(state => state.color.colors);

    return (
        <div className='todo-color-scheme gap-2 d-flex pt-2'>
            {
                color.map(element => (
                    <div className='color-circle' style={{
                        backgroundColor: `${element}`
                    }} ></div>
                ))
            }
        </div>
    )
}

export default ColorScheme