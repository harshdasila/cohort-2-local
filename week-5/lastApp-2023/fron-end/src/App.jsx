import { useEffect, useState } from 'react'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {

  const [todos,setTodos] = useState([]);

  useEffect(()=>{
    const getData = async()=>{
      try{
        const todos = await fetch("http://localhost:3000/todos",{
          method: "GET"
        });
        const data = await todos.json();
        console.log(data.allTodos)
        setTodos(data.allTodos);
      }
      catch(err){
        console.log("some error in feching data from backend");
      }
    }
    getData();
    
  },[todos])
  return (
    <>
      <CreateTodo/>
      <Todos todos={todos}/>
    </>
  )
}

export default App
