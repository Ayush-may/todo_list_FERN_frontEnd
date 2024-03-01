import React from 'react'
import { useSelector } from 'react-redux'
import TodoMenu from './TodoMenu';
import Type from './Type';

const Note = ({ todo }) => {
    const color = useSelector(state => state.color.colors);
    let random = Math.floor(Math.random() * color.length);

    return (
        <>
            <div className='note position-relative shadow-sm rounded-4 px-3 py-4' style={{
                border: `1px solid ${color[random]}`,
                display: "grid",
                // justifyContent: "center",
            }}>
                <div className='note-body' style={{
                    display: 'grid',
                    alignContent: 'flex-start',
                    height: '100%'
                }}>
                    <Type type={'Note'} />
                    <TodoMenu />
                    <h2 className='' >{todo}</h2>
                </div>
            </div >
        </>
    )
}

export default Note