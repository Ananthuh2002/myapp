import React, { useState,useEffect } from 'react'
import '../pages/Report.css';
import {useForm} from "react-hook-form";
import Axios from 'axios';
import Details from '../pages/Details';
// import Table from 'react-bootstrap/Table';
import swal from 'sweetalert';


const Form = () => {
  const[date,setDate]=useState("")
    const [des,setDes]=useState("")
    const [Time,setTime]=useState("")
    const [toTime,settoTime]=useState("")
    const [title,setTitle]=useState("")
    const [radio,setradio]=useState("")
    const[dis,setDis]=useState([])
    const[up,setUp]=useState("")

useEffect(()=>{
  Axios.get('http://localhost:7000/api/get').then((response)=>{
    // console.log(response.data);
    setDis(response.data)

  })
  
  // setTimeout(() => 
  //   setDis(),500);
},[])

    const onsub=()=>{
  
    
    Axios.post('http://localhost:7000/api/insert',{title:title,find:date,Totime:toTime,Fromtime:Time,Type:radio,Description:des,up:up})
    // .then(()=>{
    //   alert("sucess")
    // })

    setDis([...dis,{title:title,find:date,Totime:toTime,Fromtime:Time,Type:radio,Description:des},
    ])
    swal({
      title: "DATA ADDED SUCCESSFULLY",
      icon: "success",
      button: "OK!",
    });

     
    }

    const deleteitem=(title)=>{
      Axios.delete(`http://localhost:7000/api/delete/${title}`)

      swal({
        title: "DELETED SUCCESSFULLY",
        text: "PLEASE REFRESH THE PAGE!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })

 

    }
  return (
    <>
 
        <form onSubmit={onsub} >
            <div className='content'>
        
            
            <div className="date">
           Date:
            <input type="date" name='date'   onChange={(e)=>setDate(e.target.value)}  required  />
          </div>
          <div className="time">
            Start Time:
          <input type="time" name='Time' onChange={(e)=>setTime(e.target.value)}  required  />
          </div>
          <div className="toTime">
            End Time:
          <input type="time" name='Time' onChange={(e)=>settoTime(e.target.value)} required  />
          </div>
 
        </div>
            <div className="type">
            <div className="title">
              <label id="fname">Work Report Title:</label>
            <input type="text" id="fname" name="firstname" onChange={(e)=>setTitle(e.target.value)} required/>
             </div> 
     
            <div className="radio">
            <span> Work Type:</span> 
           <input type="radio" id="official" name="fav_language" value="official" onChange={(e)=>setradio(e.target.value)} required/>
            <label for="Official">Official</label>
            <input type="radio" id="others" name="fav_language" value="others" onChange={(e)=>setradio(e.target.value)} required />
              <label for="Others">Others</label>
             </div> 
          </div>        
             <div className='text-main'>
              <div className="text">
            <textarea  onChange={(e)=>setDes(e.target.value)}  rows="10" cols="100" className='text-box' required></textarea>    
            </div>        
            </div> 
          <div className="buttons">
           <button id='btn1' value="pending" onClick={(e)=>setUp(e.target.value)}>Save</button>
            
           <button id='btn2' type='reset'>Cancel</button>
     

          </div> 
       
         </form> 

         <div className="tables">
<table>
  <thead>{}
  <tr>
    <th>Title</th>
    <th>Date</th> 
    <th>Totime</th>
    <th>End Time</th>
    <th>Work Type</th>
  </tr>
  </thead>
  <tbody>
       {dis.map((obj)=>(
      
        <tr>
    <td>{obj.title}</td>
    <td>{obj.find}</td>
    <td>{obj.Totime}</td>
    <td>{obj.Fromtime}</td>
    <td>{obj.Type}</td>
    <td>  <button onClick={()=>{deleteitem(obj.title)}}>Delete</button></td>
    {/* <td>   <input type="text" id='upinput'  onChange={(e)=>setup(e.target.value)}/></td>
    <td>   <button onClick={()=>{update(obj.title)}}>Update</button></td> */}

   
  </tr>
))}
  </tbody>
 </table>
</div>

   {/* <Details dis={dis }/> */}
     </>
      
  )
}

export default Form