
import { useState } from 'react'
import {CreateTodo} from './components/CreateTodo'
import { Todos } from './components/Todos'



function App() {

  const [todo,setTodo]=useState([])

  fetch("http://localhost:3000/todos")
  .then(async function(res){
    const json=await res.json();
    console.log(json);
    setTodo(json.todos)
  })
 
  return(
    <div>
      <CreateTodo/>
      < Todos todos={todo} />
    </div>

        
   
  )
}

export default App
