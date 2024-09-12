import React from 'react'
import Todo from './Components/Todo'
import Addtodo from './Components/addtodo'
function App() {
  return (
   <>
    <div className='text-4xl'>App</div>
    <Addtodo/>
    <Todo/>
   </>
  )
}

export default App