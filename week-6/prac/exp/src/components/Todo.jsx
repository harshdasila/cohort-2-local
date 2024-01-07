import React from 'react'

const Todo = ({title,description}) => {
    
  return (
    <div>
      <div>{title}</div>
      <div>{description}</div>
    </div>
  )
}

export default Todo
