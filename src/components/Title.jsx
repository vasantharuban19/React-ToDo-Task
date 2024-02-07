import React,{useState} from 'react'
import { Link,useNavigate,Outlet } from 'react-router-dom';

const Title=({todos,setTodos})=> {
  let [title, setName] = useState("");
  let [description, setDescription] = useState("");
  let [status, setStatus] = useState(false);
  let [color, setColor] = useState("");
  let [option, setOption] = useState("All");

  let navigate = useNavigate()

  const handleCreate = ()=>{
    let id = todos.length ? todos[todos.length -1].id+1 : 1 
    let newArray = [...todos]
    newArray.push({
      id,
      title,
      description,
      status
    })
    setTodos(newArray)
    navigate('/title/all')
  }

  return <>
  <h1 className="title">My Todo</h1>
  <br></br>
  <div className="col col-md-5 ">
 <div className="row row-cols-1 row-cols-md-3 g-4">

 <div className="col justify-content-start mt-6 text-align-center"  >
   <div className=" text-center">
     <input type="text" placeholder="Todo Name" onChange={(e)=>{setName(e.target.value)}}></input>
   </div>
 </div>
<br></br>
 <div className="col justify-content-end  ml-5">
   <div className=" text-center ">
 <input type="text" placeholder="Todo Description" onChange={(e)=>{setDescription(e.target.value)}}></input>
   </div>
 </div>
 <br></br>
 <div className="col">
   <div className=" text-center">
     <button type="submit "onClick={()=>{handleCreate()}} className="add">Add Todo</button>
   </div>
 </div>

 </div>

 <div className="d-flex justify-content-between p-5">
         <h2 className="todo">My Todos</h2>
         <div>
           <h3>
           <div id='status' className="card-text d-flex gap-2">
             Status Filter :{" "}
             <span>
             {" "}            
                 <div className="dropdown">
                      <button className={`btn btn-success dropdown-toggle ${color}`} type="button" data-bs-toggle="dropdown" aria-expanded="false">{option}</button>
                      <ul className="dropdown-menu">
                        <li><Link to={'all'}           className="dropdown-item" onClick={()=>{setOption("All");          setColor("bg-info");  }} >All</Link></li>
                        <li><Link to={'completed'}     className="dropdown-item" onClick={()=>{setOption("Completed");    setColor("bg-success");}} >Completed</Link></li>
                        <li><Link to={'notcompleted'}  className="dropdown-item" onClick={()=>{setOption("NotCompleted"); setColor("bg-danger"); }} >Not Completed</Link></li>                         
                      </ul>
                 </div>
             </span>
             </div>
           </h3>
         </div>
         </div>
       </div> 

       <div className="container">
       <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-sm-2 g-4">
          <Outlet></Outlet>       
       </div>
       </div>
  
  </>
}

export default Title