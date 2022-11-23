import React,{useEffect, useState} from 'react'
import Axios from 'axios';
import Popup from '../components/Popup';
import '../components/Details.css'
const Details=()=> {
  const [deta,setDeta]=useState([])
  const [pop,setPop]=useState(false);
  const[query,setQuery]=useState("")
// console.log(deta.filter(obj=>obj.title.toLowerCase().includes("ta")));
  useEffect(()=>{
    Axios.get('http://localhost:7000/api/get').then((response)=>{
      // response.send(response.data);
      setDeta(response.data)
  
    })
  },[])
    return (
      <>
    
 <div className='head'>
<h1>Report Details</h1>
</div>
<div className='search'>
        
        <input type="search" placeholder="search.." size="30"  onChange={e=>setQuery(e.target.value)}/>

      </div>
     <div className="tables">
    <table>
      <thead>{}
      <tr>
        <th>Title</th>
        <th>Date</th> 
        <th>Totime</th>
        <th>End Time</th>
        <th>Work Type</th>
        <th>Description</th>
      </tr>
      </thead>
       <tbody>
           {deta.filter((obj)=>obj.title.toLowerCase().includes(query)).map((obj)=>(
          
            <tr>
        <td>{obj.title}</td>
        <td>{obj.find}</td>
        <td>{obj.Totime}</td>
        <td>{obj.Fromtime}</td>
        <td>{obj.Type}</td>
        <td><button onClick={()=>setPop(true)}>view</button></td>
        <Popup trigger={pop} setTrigger={setPop}>
      {obj.Description}
 </Popup>

    
      </tr>
    ))}
      </tbody> 
     </table>
    </div> 
   
    </>
    
   
  
  )
}

export default Details