import React,{useEffect} from 'react'
import './Submit.css';
// import { useEffect } from 'react';


const Submit = ({finish,deleteContact}) => {

  
return(

<>


 <div className="tables">
<table>
  <thead>{}
  <tr>
    <th>Date</th>
    <th>Start Time</th> 
    <th>End Time</th>
    <th>work Title</th>
    <th>Work Type</th>
  </tr>
  </thead>
  <tbody>
       {finish.map((obj)=>(
      
        <tr>
    <td>{obj.date}</td>
    <td>{obj.Time}</td>
    <td>{obj.toTime}</td>
    <td>{obj.title}</td>
    <td>{obj.radio}</td>
    <td> <button onClick={()=>{deleteContact(obj.id)}}>Delete</button></td>
 
  </tr>
))}
  </tbody>
 </table>
</div>

</>
)
}




 
export default Submit