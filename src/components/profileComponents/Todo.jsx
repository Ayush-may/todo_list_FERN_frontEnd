import React from 'react'
import TodoMenu from './TodoMenu';

const Todo = () => {
    return (
        <div className='todo rounded-4 shadow-sm text-black p-3 py-4' style={{
            backgroundColor : '#A5DD9B'
        }} >
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