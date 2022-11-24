import React, { useState,useEffect } from 'react'
import Adpop from '../components/Adpop'
import Adpop1 from '../components/Adpop1'
import Taskform from './Taskform'
import Axios  from 'axios'
import './usertask.css'
import swal from 'sweetalert';


const Usertask = () => {
  const[task,setTask]=useState("")
  const[display,setDisplay]=useState([])

  useEffect(()=>{
    Axios.get('http://localhost:7000/api/list/task').then((response)=>{
      // response.send(response.data);
      setDisplay(response.data)
  
    })
  },[])

  const deleteitems=(Taskname)=>{
    Axios.delete(`http://localhost:7000/api/deletelist/${Taskname}`)

    swal({
      title: "DELETED SUCCESSFULLY",
      text: "PLEASE REFRESH THE PAGE!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })

  
  }


  return (
<div className='task'>

 <div className="tables">
<table>
  <thead>{}
  <tr>
    <th>Task Name</th>
    <th>Category</th> 
    <th>Priority</th>
    <th>Action</th>
  </tr>
  </thead>
  <tbody>
       {display.map((obj)=>(
      
        <tr>
    <td>{obj.Taskname}</td>
    <td>{obj.category}</td>
    <td>{obj.priority}</td>
    <td>  <button onClick={()=>{deleteitems(obj.Taskname)}}>Delete</button></td>
    {/* <td>   <input type="text" id='upinput'  onChange={(e)=>setup(e.target.value)}/></td>
    <td>   <button onClick={()=>{update(obj.title)}}>Update</button></td> */}

  </tr>
))}
  </tbody>
 </table>
</div>
<div className='add'>
<button onClick={()=>setTask(true)}>Add Task</button>
<Adpop1 trigger={task} setTrigger={setTask}>
   <Taskform/>
 </Adpop1>
 </div>
</div>
  )
}

export default Usertask