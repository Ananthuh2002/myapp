import React, { useState,useEffect } from 'react'
import './Adreport.css';
import  Axios  from 'axios';

const AdReport = () => {
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [school,setSchool]=useState("")
  const [display,setDisplay]=useState([])



  useEffect(()=>{
    Axios.get('http://localhost:7000/api/list/admin').then((response)=>{
      // response.send(response.data);
      setDisplay(response.data)
  
    })
  },[])


const onsub=(e)=>{
  e.preventDefault();
  Axios.post('http://localhost:7000/api/insert/admin',{fname:name,Email:email,school:school})

  setDisplay([...display,{fname:name,Email:email,school:school},
  ])
        alert("Report Added Sucessfully")
}

 return (
    <>
 <div className="heading2">
   <h1>ADDING NEW</h1> 
  </div>
    <form onSubmit={onsub}>
 <div className='cen'>
 
    <div className="na1">
    Name:
   <input type="text" placeholder='Name' onChange={(e)=>setName(e.target.value)}/>
   </div>
   <div className="email">
    Email:
    <input type="text" placeholder='abc123@gmail.com'onChange={(e)=>setEmail(e.target.value)}/>
    </div>
    <div className="school">
    Choose a school:
   <select onChange={(e)=>setSchool(e.target.value)}>
   <option value="pick one" selected>pick</option>
  <option value="Amritapuri">Amritapuri</option>
  <option value="Amrita Bangalore">Amrita Bangalore</option>
  <option value="Amrita Kochi">Amrita Kochi</option>
  <option value="Amrita Coimbatore">Amrita Coimbatore</option>
</select>
</div>
<button>submit</button>
  
    </div>
    </form>
    <div className="heading">
    <h1>ADDED EMPLOYEES</h1>
    </div>
    <div className="tables">
<table>
  <thead>{}
  <tr>
    <th>NAME</th>
    <th>EMAIL</th> 
    <th>SCHOOL</th>
  </tr>
  </thead>
  <tbody>
       {display.map((obj)=>(
      
        <tr>
    <td>{obj.fname}</td>
    <td>{obj.Email}</td>
    <td>{obj.school}</td>
  

    </tr>
))}
  </tbody>
 </table>
 </div>
    </>
  )
}

export default AdReport