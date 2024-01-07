import React from 'react'

const Card = (props) => {
  
  const fName = props.fName;
  const description = props.description;
  const interests = props.interests;
  const interestsArray = interests.split(',');
  console.log(fName,description,interests)
  

  return (
  <>
    <div className='h-full w-1/4 shadow-md p-3 m-2'>
        <h1 className='text-3xl font-bold mb-2'>{fName}</h1>
        <div>{description}</div>
        <h2 className='text-xl font-semibold mt-3 mb-2'>Interests</h2>
        <div className='mb-3'>
            <ul>
              {
                interestsArray.map((interest)=>{
                  return(
                    <li key={Math.random()}>{interest}</li>
                  )
                })
              }
               
            </ul>
        </div>
        <button className='p-2 bg-blue-500 rounded-md text-white'>Linkedin</button>
        <button  className='p-2 mx-3 bg-blue-500 rounded-md text-white'>Twitter</button>
    </div>
    </>
  )
}

export default Card
