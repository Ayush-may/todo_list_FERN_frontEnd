import React from 'react'
import { useSelector } from 'react-redux'
import TodoMenu from './TodoMenu';
import Type from './Type';

const Note = ({ noteKey, todo, date, time }) => {
    const color = useSelector(state => state.color.colors);
    let random = Math.floor(Math.random() * color.length);

    return (
        <>
            <div className='note position-relative shadow-sm rounded-4 px-3 py-4' style={{
                border: `1px solid ${color[random]}`,
                display: "grid",
                cursor: 'pointer',
                userSelect: "none"
            }}>
                <div className='note-body' style={{
                    display: 'grid',
                    alignContent: 'flex-start',
                    height: '100%'
                }}>
                    <Type type={'Note'} />
                    <TodoMenu noteKey={noteKey} />
                    <h2 className=''
                        style={{
                            minWidth: '350px',
                            textWrap: 'wrap'
                        }}
                    >{todo}</h2>
                    <h6 style={{
                        placeSelf: 'end',
                        fontSize: '1rem'
                    }} >{time} {date}</h6>
                </div>
            </div >
        </>
    )
}

export default Note