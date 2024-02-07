import React,{useState} from 'react'
import All from './components/All'
import Card from './components/Card'
import Edit from './components/Edit'
import Title from './components/Title'
import Completed from './components/Completed'
import NotCompleted from './components/NotCompleted'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'


const App=() =>{
  let [todos,setTodos]=useState([
   {id:1,
     title:"Office Task-1",
     description:"This is The Description For My First Task",
     status:false},
   {id:1,
     title:"Office Task-2",
     description:"This is the Description For Second Task",
     status:true},
   {id:1,
     title:"Office Task-3",
     description:"This is The Description For My Third Task",
     status:false},
  ])
  return <>
  <div className='container-fluid mt- mb-5'>
    <BrowserRouter>
    <Routes>
      <Route path='card' element={<Card/>}></Route>
      <Route path='/title' element={<Title todos={todos} setTodos={setTodos}/>}>
        <Route path='all' element={<All todos={todos} setTodos={setTodos}/>}></Route>
        <Route path='completed' element={<Completed todos={todos} setTodos={setTodos}/>}></Route>
        <Route path='notcompleted'element={<NotCompleted todos={todos} setTodos={setTodos}/>}></Route>
      </Route>
    <Route path='/edit/:id' element={<Edit todos={todos} setTodos={setTodos}/>}/>
    <Route path='/*' element={<Navigate to='/title/all'/>}/>  
    </Routes>
    </BrowserRouter>
  </div>
  </>
}
export default App