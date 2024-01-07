import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'
import Input from './components/Input'

function App() {

  const [cards,setCard] = useState([])

  useEffect(()=>{
      const getData = async()=>{
        try{
          const CardGetData = await fetch('http://localhost:3000/getCard',{
          method: "GET"
        });
        const CardData = await CardGetData.json();
        setCard(CardData.data);
        console.log(CardData);
        }
        catch(err){
          console.log(err);
          res.json({
            mssg: "error in data fetching from backend"
          })
        }
      }
      getData();
  },[cards])
 
  return (
    
    <>
      <Input/>
      <h1 className='m-2 my-4 text-4xl font-bold mb-2'>Your Cards</h1>
      <div className='flex flex-wrap'>
      {cards.map((c)=>{
        return (
          <Card fName = {c.fName} description = {c.description} interests = {c.interests} key={Math.random()}/>
        )
      })}
      </div>
    </>
  )
}

export default App
