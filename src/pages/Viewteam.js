import React, { useState,useEffect } from 'react'
import  Axios  from 'axios'
import Aslist from '../components/Aslist'

const Viewteam = () => {
  const[list,setList]=useState([])
  useEffect(()=>{
    Axios.get('http://localhost:7000/api/list/report').then((response)=>{
      // response.send(response.data);
      setList(response.data)
  
    })
  },[])

  return(
      <>
     <div className="tables">
<table>
  <thead>{}
  <tr>
    <th>Name</th>
    <th>Email</th> 
    <th>school</th>
   
  </tr>
  </thead>
  <tbody>
       {list.map((obj)=>(
      
        <tr>
    <td>{obj.name}</td>
    <td>{obj.email}</td>
    <td>{obj.school}</td>
   
    </tr>
))}
  </tbody>
 </table>
</div>
     

    </>
  )
}

export default Viewteam