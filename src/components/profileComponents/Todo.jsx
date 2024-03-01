import React from 'react'
import TodoMenu from './TodoMenu';
import { useSelector } from 'react-redux'

const Todo = () => {
    const color = useSelector(state => state.color.colors);
    let random = Math.floor(Math.random() * color.length);
    console.log(random)

    return (
        <div className={`todo rounded-4 shadow-sm text-black p-3 py-4 `} style={{ backgroundColor: `${color[random]}` }} >
            <div className="todo-body h-100 w-100 ">
                <TodoMenu />
                <h3>Sample Todo</h3>
                <table>
                    <tbody className='mt-2'>
                        <tr>
                            <td> <input type="checkbox" name="" id="" /> </td>
                            <td> sample 1 </td>
                        </tr>
                        <tr>
                            <td> <input type="checkbox" name="" id="" /> </td>
                            <td> sample 1 </td>
                        </tr>
                        <tr>
                            <td> <input type="checkbox" name="" id="" /> </td>
                            <td> sample 1 </td>
                        </tr>
                        <tr>
                            <td> <input type="checkbox" name="" id="" /> </td>
                            <td> sample 1 </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Todo