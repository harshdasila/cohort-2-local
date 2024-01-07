
import { useEffect, useState } from 'react';
import './App.css'
import Header from './components/Header'
import Todo from './components/Todo';
let cnt=4;
function App() {

  
  
  useEffect(function(){
    setInterval(()=>{
      console.log("interval")
      console.log("trggered")
    },1000)
    
  },[])

  const [name,setName] = useState ("");
  function handleNameChange(){
    setName(Math.random(1,100));
  }
  const [todo,setTodo] = useState([{
    id: 1,
    title:"harsh",
    description:"oansdanda"
  },
  {
    id: 2,
    title:"amit",
    description:"oanasdasdsdanda"
  },
  {
    id: 3,
    title:"pankaj",
    description:"oasdasdaansdanda"
  }])

  function addTodo(){
    setTodo([...todo,{
      id: cnt++,
      title: "ranasdomdao",
      description: "dlsnjksndk"
    }])
   
    console.log(cnt)
  }
  return (
    
    <>
     {/* { 
     <div>
     {todo.map(function(todo){
      return (
        <Todo key={todo.id} title={todo.title} description={todo.description}/>
      )
     })}
    </div>
    <button onClick={addTodo}>Add todo</button> 
    } */}
    </>
    // { <button onClick={handleNameChange}>Change title</button> }
    // <Header title={name}/>
    // <Header title="Amit"/>
    // <Header title="Amasdasdit"/> 
    
    
  )
}

export default App
