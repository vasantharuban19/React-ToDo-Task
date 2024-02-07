import React from 'react'
import Card from './Card'

const NotCompleted = ({todos,setTodos})=>{
  let c = todos.filter((e)=>e.status===false) 
  return <>
  {c.map((e,i)=>{
    return <Card data={todos} todos={e} setTodos={setTodos} key={i}/>
  })}
  </>
}

export default NotCompleted