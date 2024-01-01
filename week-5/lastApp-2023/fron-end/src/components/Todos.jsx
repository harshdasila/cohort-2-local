export function Todos({todos}){
    
    return (
       
        <div>
            {todos.map(function (todo){
                return(!todo.completed && <div style={{
                    margin: "4px",
                    padding: "4px"
                }}>
                <div id={todo._id}>
                    {todo.title}
                </div>
                <div>
                    {todo.description}
                </div>
                {todo.completed==true}
                <button onClick={async()=>{
                    await fetch("http://localhost:3000/completed",{
                        method: "PUT",
                        body: JSON.stringify({
                            id: todo._id 
                        }),
                        headers: {
                            "Content-type": "application/json"
                        }
                    })
                }} style={{padding: "4px",marginTop: "4px"}}>Mark as Done</button>
                </div>)
            })}
        </div>
    )
}
