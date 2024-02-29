import React from 'react'
import { CiMenuKebab } from "react-icons/ci";

const Todo = () => {
    return (
        <div className='todo rounded-4 bg-light shadow-sm text-black p-3 py-4' >
            <div className="todo-body h-100 w-100 ">
                <CiMenuKebab size={'1.4em'} className='menu-logo' />
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
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Todo