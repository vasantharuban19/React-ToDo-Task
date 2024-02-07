import React, {useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

const allCards = ({data,todos,setTodos})=>{
    let empty = todos.status
    let [state,setState]=useState(todos.status)
    let [color,setColor]=useState("")
    let [option,setOption]=useState("")

    let navigate = useNavigate()

    useEffect(()=>{
      state ? `${setOption("Completed"),setColor("bg-success")}` : `${setOption("Not Completed"),setColor("bg-danger")}`
    },[])

    let handleDelete = (id)=>{
      let index;
      for(let i=0;i<data.length;i++){
        if(data[i].id===id){
          index = i
          break;
        }
      }
      let newArray = [...data]
      newArray.splice(index,1)
      setTodos(newArray)
    }

    let handleCompleted= (id,state)=>{
      let index;
      for(let i=0;i<data.length;i++){
        if(data[i].id === id){
        index=i
        break;
      }
    }
    let newArray = [...data];
    newArray[index].status=state
}


  return (
   <>
    <div className="col">
            <div className="card">
              <div className="card-body">

                <p className="card-text">Title : {todos.title}</p>
                <p className="card-text">Description : {todos.description}</p>
                <div className="card-text d-flex gap-1">
                  Status :{" "}   
                  <span> {" "}           
                  <div className="dropdown">
                       <button className={`btn btn-secondary dropdown-toggle ${color}`} type="button" data-bs-toggle="dropdown" aria-expanded="false">{option}</button>
                       <ul className="dropdown-menu">
                         <li><a className="dropdown-item" onClick={()=>{setOption("Completed"); setColor("bg-success"); handleCompleted(todos.id, true) }} >Completed</a></li>
                         <li><a className="dropdown-item" onClick={()=>{setOption("NotCompleted"); setColor("bg-danger"); handleCompleted(todos.id,false)}} >Not Completed</a></li>                         
                       </ul>
                  </div>
                  </span> 
                </div>

                <div className="justify-content-end d-flex mt-3">
                <button type="button" className="btn btn-info" onClick={()=>{navigate(`/edit/${todos.id}`)}} >Edit</button> &nbsp; 
                <button type="button" className="btn btn-danger" onClick={()=>handleDelete(todos.id)} >Delete</button>
                </div>
              </div>

            </div>
          </div>
   </>
  )
}

export default allCards