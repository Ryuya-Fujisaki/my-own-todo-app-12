import { Task } from '@/types'
import React from 'react'
import Todo from './Todo';

interface TodoListProps {
    todos: Task[];
}
const TodoList = ({ todos }: TodoListProps) => {
    return (
        <ul className='space-y-3'>
            {todos.map((todo) => (
                <Todo key={todo.id} todo={todo} />
            ))}
            {/* <li className='flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow'>
                <span>散歩</span>
                <div>
                    <button className='text-green-500 mr-3'>Edit</button>
                    <button className='text-red-500'>Delete</button>
                </div>
            </li>
            <li className='flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow'>
                <span>散歩</span>
                <div>
                    <button className='text-green-500 mr-3'>Edit</button>
                    <button className='text-red-500'>Delete</button>
                </div>
            </li> */}
        </ul>
    )
}

export default TodoList
