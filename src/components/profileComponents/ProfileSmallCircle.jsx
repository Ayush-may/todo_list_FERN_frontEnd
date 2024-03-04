import React, { useState, useRef } from 'react';
import ColorScheme from './ColorScheme';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../features/todos/todoSlice';

const ProfileSmallCircle = () => {

    const [isShow, setShow] = useState(false);
    const [todo, setTodo] = useState('');
    const ref = useRef();
    const dispatch = useDispatch();

    const repeat = () => {
        ref.current.focus();
        dispatch(addTodo(todo));
        setTodo('')
    }

    const addTodoMethod_addBtn = (e) => { repeat(); }
    const addTodoMethod_enterKeyboard = (e) => { e.key == "Enter" ? repeat() : ''; }


    return (
        <>
            {/* small circle */}
            <div className='add-todo bg-danger shadow border' onClick={() => { setShow(true) }} >+</div>
            {
                isShow && (
                    <>
                        <div className='px-3 position-absolute w-100 h-100 top-0' style={{
                            zIndex: "99999999",
                            backgroundColor: "rgba(0,0,0,0.5)",
                            display: "grid",
                            gridTemplateColumns: "minmax(300px,1000px)",
                            justifyContent: "center",
                            alignItems: 'center'
                        }}>
                            <div>
                                <div className='fw-bold  d-flex justify-content-end' style={{
                                    fontSize: '1rem'
                                }} ><span className='border bg-white rounded-4 px-3' style={{ width: '30px', display: 'grid', placeContent: 'center', cursor: 'pointer' }} onClick={() => {
                                    setShow(prev => false)
                                }} >X</span></div>
                                <div className='card border-success'>
                                    <div className="card-header fw-bold ">
                                        Add Note/Todo
                                    </div>
                                    <div className="card-body">
                                        <input
                                            type="text"
                                            ref={ref}
                                            name='input'
                                            className='form-control'
                                            placeholder='Enter Todo'
                                            onKeyDown={addTodoMethod_enterKeyboard}
                                            value={todo}
                                            onChange={(e) => { setTodo(e.target.value) }}
                                        />
                                        <ColorScheme />
                                        <button className='btn btn-outline-warning w-100 mt-2 fw-bold' onClick={addTodoMethod_addBtn} >Add</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </>
                )
            }
        </>
    )
}

export default ProfileSmallCircle