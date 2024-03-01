import React from 'react'
import TodoMenu from './TodoMenu';
import { useSelector } from 'react-redux'
import Type from './Type';

const Todo = () => {
    const color = useSelector(state => state.color.colors);
    let random = Math.floor(Math.random() * color.length);

    return (
        <div className={`todo w-100 rounded-4 shadow-sm text-black p-3 py-4 `} style={{ border: `1px solid ${color[random]}`, }} >
            <div className="todo-body">
                <Type type={'Todo'} />
                <TodoMenu />
                <h3>Sample Todo</h3>
                <table>
                    <tbody className='mt-2'>
                        <tr className='d-flex align-items-center' >
                            <td> <input type="checkbox" className='me-2' /> </td>
                            <td> sample 1 </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Todo