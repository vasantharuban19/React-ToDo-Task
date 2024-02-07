import React from 'react'
import Card from './Card'

const All = ({todos,setTodos})=>{

  return (
    <>
    {todos.map((e,i)=>{
      return <Card data={todos} todos={e} setTodos={setTodos} key={i}/>
    })}
    </>
  )
}

export default All