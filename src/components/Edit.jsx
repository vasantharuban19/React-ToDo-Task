import React,{useState,useEffect} from 'react'
import { useNavigate,useParams } from 'react-router-dom'

const Edit=({todos,setTodos})=> {

  let params = useParams()

  let navigate = useNavigate()

  let [title, setName] = useState("");
  let [description, setDescription] = useState("");
  let [status, setStatus] = useState("");


  const findIndex = (id)=>{
    for(let i = 0; i<todos.length;i++)
    {
      if(id === todos[i].id)
        {return i}
    }
  }

 
  const handleEdit = ()=>{

    let id = Number(params.id)
    let index = findIndex(id)
    let newArray = [...todos]// deep copy Achieve Immutability
    newArray.splice(index,1,{
      id,
      title,
      description,
      status})
    setTodos(newArray)
    navigate('/display/all')
  }

  const getUserData = ()=>{
    let id = Number(params.id)
    let index = findIndex(id)
    setName(todos[index].title)
    setDescription(todos[index].description)
    setStatus(todos[index].status)

  }

useEffect(()=>{getUserData()},[])

return (
    <>
     <h1 className="text-center HeaderColor">Edit Todo</h1>
         <div className="container text-center">
           <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-sm-1 g-1">
             <div className="col col-md-6 mt-3">
               <div className="">
                 <input placeholder=" Todo Name" value={title} onChange={(e)=>{setName(e.target.value)}} type="text" />
               </div>
             </div>
             <div className="col col-lg-6 mt-3">
               <div className="">
                 <input placeholder="Todo Description" value={description} onChange={(e)=>{setDescription(e.target.value)}} type="text" />
               </div>
             </div>
             <div className="col col-lg-12 col-md-12 col-sm-12 mt-3">
               <div className="">
                 <button type="button" onClick={()=> handleEdit()} className="btn btn-info mt-3">Save Todo</button>
                 
               </div>
             </div>
           </div>
         </div>
    </>
   )
}

export default Edit