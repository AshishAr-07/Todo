import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../Feature/todo/todoSlice';


function Addtodo() {
const [input,setInput]=useState('');
const dispatch=useDispatch()

const addTodoHandler =(e) =>{
    e.preventDefault()
    dispatch(addTodo(input))
    setInput('')
}


  return (
   <>
   <form onSubmit={addTodoHandler}>
<input value={input}  onChange={(e) => setInput(e.target.value)}  >  
</input>
<button>
  Add Todo
</button>

   </form>
   </>
  )
}

export default Addtodo