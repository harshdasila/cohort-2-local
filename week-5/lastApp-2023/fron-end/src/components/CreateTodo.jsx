import { useState } from "react"

export function CreateTodo(){
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    return (<div>
        <input  style={{margin: "5px",padding: "10px"}} type="text" placeholder="title" onChange={(e)=>{setTitle(e.target.value)}} required></input>
        <input required style={{margin: "5px",padding: "10px"}} type="text" placeholder="desc" onChange={(e)=>{setDescription(e.target.value)}}></input><br></br>
        <button style={{margin: "5px",padding: "10px"}} onClick={
            async ()=>{
                const res = await fetch("http://localhost:3000/todo",{
                    method: "POST",
                    body: JSON.stringify({
                        title: title,
                        description: description,
                        completed: false
                    }),
                    headers: {
                        "Content-type": "application/json"
                    }
                })
                if(!res.ok){
                    throw new Error("Some error in putting data");
                }
                else{
                    const json = await res.json();
                    alert("added");
                }
            }
                
            }
        >ADD TODO</button>
        
    </div>)
}