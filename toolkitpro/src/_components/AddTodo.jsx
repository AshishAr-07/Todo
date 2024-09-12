import React, { useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { addTodo } from '../Feature/todoSlice'


export default function AddTodo() {
 const [title,setTitle] =useState("")
const dispatch= useDispatch()

 const addTodoHandler = (e) => {
     e.preventDefault()
     dispatch(addTodo(title))
     setTitle("")
 }
  return (
<>
<h1 className='flex  justify-center text-4xl mt-[50px] py-4'>What To Do</h1>
    <div className="flex  justify-center ">
      
      <div className="w-full max-w-md p-4 bg-white rounded-lg shadow">
        <form onSubmit={addTodoHandler} className="flex mb-4">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Add a task"
            className="flex-grow p-2 border rounded-l"
          />
          <button type="submit" className="px-4 bg-blue-500 text-white rounded-r hover:bg-blue-600">
            Add todo
          </button>
         
        </form>
      </div>
    </div>
</>
  )
}
