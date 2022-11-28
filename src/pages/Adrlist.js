import React, { useState,useEffect } from 'react'
import Axios  from 'axios'

function Adrlist() {
    const[addata,setAddata]=useState([])

    useEffect(()=>{
        Axios.get('http://localhost:7000/api/get').then((response)=>{
          // response.send(response.data);
          setAddata(response.data)
      
        })
      },[])

      const updateitems=(title)=>{
      

        Axios.patch('http://localhost:7000/api/stateupdate',{title:title}).then((response)=>{
        //  response.send("finisg")
       alert("hdf")
        
      })
    }

    const Rejectitems=(title)=>{
        
        Axios.patch('http://localhost:7000/api/statereject',{title:title}).then((response)=>{
        //  response.send("finisg")
       alert("hdf")
        
      })
    }
  return (
    <>
       <div className="tables">
    <table>
      <thead>{}
      <tr>
        <th>Title</th>
        <th>Date</th> 
        <th>Totime</th>
        <th>End Time</th>
        <th>Work Type</th>
        <th> status</th>
    
      </tr>
      </thead>
       <tbody>
           {addata.map((obj)=>(
          
            <tr>
        <td>{obj.title}</td>
        <td>{obj.find}</td>
        <td>{obj.Totime}</td>
        <td>{obj.Fromtime}</td>
        <td>{obj.Type}</td>
        <td><button  onClick={()=>{updateitems(obj.title)}}>Approve</button><button  onClick={()=>{Rejectitems(obj.title)}}>Reject</button></td>
         
      </tr>
    ))}
      </tbody> 
     </table>
    </div> 
    </>
  )
}

export default Adrlist;