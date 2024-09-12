import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo ,updateTodo} from '../Feature/todoSlice'


export default function Todos() {
  const todos = useSelector(state => state.todos)
  console.log(todos)
  const dispatch = useDispatch()

  return (
    <div className='w-full min-h-screen  py-8 px-4'>
      <div className='max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden'>
        <h2 className='text-2xl font-bold text-center py-4 bg-blue-500 text-white'>My Todo List</h2>
        <ul className='divide-y divide-gray-200'>
          { todos.map((todo) => (
            <li key={todo.id} className='flex justify-between items-center p-4 hover:bg-gray-50'>
              <div className='text-gray-800 break-words w-3/4'>{todo.text}</div>
              <button 
                onClick={() => dispatch(removeTodo(todo.id))}
                className='text-red-500 hover:text-red-700 transition-colors duration-200'
              >
                Remove
              </button>
              <button 
                onClick={() => dispatch(updateTodo(todo.text))}
                className='text-red-500 hover:text-red-700 transition-colors duration-200'
              >
                Update
              </button>
            </li>
          ))}
        </ul>
       
      </div>
    </div>
  )
}