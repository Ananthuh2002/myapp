import React,{useState,useEffect} from 'react'
import './Taskform.css';
import Axios from 'axios';

const Taskform = () => {
    const[name,setName]=useState("")
    const [cate,setCate]=useState("")
    const [start,setStart]=useState("")
    const [end,setEnd]=useState("")
    const [pri,setPri]=useState("")
    const [des,setDes]=useState("")
    const [count,setCount]=useState("")
   




const onsubbmit=()=>{
  // e.preventDefault();
  Axios.post('http://localhost:7000/api/insert/tasklist',{name:name,cate:cate,start:start,end:end,pri:pri,des:des,count:count})

    //  swal({
    //   title: "DATA ADDED SUCCESSFULLY",
    //   icon: "success",
    //   button: "OK!",
    // });
}

  return (
    <>
  <div className='class1'>
  <form onSubmit={onsubbmit}>
    <label for="fname">Task Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.."  onChange={(e)=>setName(e.target.value)}/>

    <label for="lname">Category</label>
    <input type="text" id="lname" name="lastname" placeholder="Enter the category" onChange={(e)=>setCate(e.target.value)}/>

     <label for="lname">Task Start Date</label>
    <input type="Date" id="lname" name="lastname" placeholder="Task Start Date" onChange={(e)=>setStart(e.target.value)}/> 

     <label for="lname">Task End Date</label>
    <input type="Date" id="lname" name="lastname" placeholder="Task End Date"  onChange={(e)=>setEnd(e.target.value)}/>
 

<label for="country">Priority</label>
    <select id="country" name="country"  onChange={(e)=>setPri(e.target.value)}>
      <option value="Low">Low</option>
      <option value="Normal">Normal</option>
      <option value="Urgent">Urgent</option>
    </select>
    
    <label for="lname">Task Details</label>
  <textarea  placeholder="Task Deatails"  onChange={(e)=>setDes(e.target.value)}>
</textarea>

<label for="lname">Status</label>
    <input type="number" id="lname" name="number" placeholder="Enter the status" min="0" step="0"  onChange={(e)=>setCount(e.target.value)}/>


  
    <input type="submit" value="Submit"/>
  </form>
</div>
    </>
  )
}

export default Taskform