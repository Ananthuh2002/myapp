import React,{useEffect, useState} from 'react'
import  Axios  from 'axios'
const Tasklist = () => {
    const[list,setList]=useState([])



   useEffect(()=>{
    Axios.get('http://localhost:7000/api/list/task').then((response)=>{
      // response.send(response.data);
      setList(response.data)
  
    })
  },[])

  return (
    <>
    <div className="tables">
<table>
  <thead>{}
  <tr>
    <th>Task Name</th>
    <th>Category</th> 
    <th>Priority</th>
    <th>Status</th> 
     {/* <th>Action</th> */}
  </tr>
  </thead>
  <tbody>
       {list.map((obj)=>(
      
        <tr>
    <td>{obj.Taskname}</td>
    <td>{obj.category}</td>
    <td>{obj.priority}</td>
    <td>{obj.status}</td>
    </tr>
))}
  </tbody>
 </table>
</div>

    </>
  )
}

export default Tasklist