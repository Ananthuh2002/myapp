import React,{useState,useEffect} from 'react'
import  Axios  from 'axios';
import './Aslist.css'
import Viewteam from '../pages/Viewteam';
const Aslist = ({getdata}) => {
  const [data,setData]=useState([]);
  // const [sin,setSin]=useState([]);
  // const [si,setSi]=useState("");
  // console.log(sin);
  useEffect(()=>{
    Axios.get('http://localhost:7000/api/list/admin').then((response)=>{
      // response.send(response.data);
      setData(response.data)
  
    })
  },[])


  const fetch= async(fname)=>{
    const res=await Axios.get(`http://localhost:7000/api/single${fname}`)
      //  console.log(res.data);
      const b=res.data
//  console.log(b);
  
      
     
     

      alert("ADDED sucessfully")

      {b.map(({
     fname,Email,school
      }
      )=>{
        
      const name=fname;
      const mail=Email;
       const sett=school;
      console.log(fname);

       Axios.post('http://localhost:7000/api/insert/selist',{name:name,email:mail,set:sett})
    
      })}

 
    }

   
    

  return (
    <>

    
    

<div className="sub">
<h2>SELECT REPORTING PERSON:</h2>
<div className="tables">
<table>
  <thead>{}
  <tr>
    <th>Name</th>

  </tr>
  </thead>
  <tbody>
       {data.map(({
        fname
       })=>(
      
        <tr>
    <td>{fname}</td>
    <td><button onClick={()=>{fetch(fname)}}>submit</button></td>


   
  </tr>
))}
  </tbody>
 </table>
</div>
       
</div>


    </>
  )
}

export default Aslist