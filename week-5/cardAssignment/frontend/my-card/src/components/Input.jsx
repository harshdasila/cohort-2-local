import React, { useState } from 'react'
const Input = () => {
    const [name,setName] = useState("");
    const [description,setDescription] = useState("");
    const [interests,setInterests] = useState("");

    async function handleAddCard(){
        const res = await fetch("http://localhost:3000/card",{
            method: "POST",
            body: JSON.stringify({
                fName: name,
                description: description,
                interests: interests
            }),
            headers: {
                "Content-type": "application/json"
            }
        })
        if(!res.ok){
            throw new Error("Some error in putting data")
        }
        else{
            const json = await res.json();
            alert("added card")
        }
    }
  return (
    <div className='flex flex-col'>
      <input onChange={(e)=>{setName(e.target.value)}} className='p-2 m-2 w-1/6 shadow-lg' type='text' placeholder='Name'/>
      <input  onChange={(e)=>{setDescription(e.target.value)}} className='p-2 m-2 w-1/6 shadow-lg' type='text' placeholder='Description'/>
      <input  onChange={(e)=>{setInterests(e.target.value)}} className='p-2 m-2 w-1/6 shadow-lg' type='text' placeholder='Interests (seperate my comma)'/>
      <button onClick={handleAddCard} className='p-2 bg-blue-500 rounded-md text-white w-1/12 m-2 shadow-lg'>Add Card</button>
    </div>
  )
}

export default Input
