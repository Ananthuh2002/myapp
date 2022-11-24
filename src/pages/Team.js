import React,{useState,useEffect} from 'react'
import './Team.css';
import Adpop from '../components/Adpop';
import Assign from '../components/Assign';
import Aslist from '../components/Aslist';
import Viewteam from './Viewteam';
import Adpop1 from '../components/Adpop1';
import Task from './Task';
const Team = () => {
  const [tpop,setTPop]=useState(false);
  const [assi,setAssi]=useState(false);
  const [task,setTask]=useState(false);


  return (
    <>
  <div className="sub">
  <table>
  <thead>{}
  <tr>
    <th>EMP.ID</th>
    <th>NAME</th>
    <th>REPORTING</th>
    <th>ACTIONS</th>
  </tr>
  </thead>
       <tbody>
    
        
     
  <tr>
    <td>1011</td>
    <td>Mr.jenny</td>
    <td><button id='bt1'onClick={()=>setTPop(true)}>VIEW</button></td>
    <Adpop trigger={tpop} setTrigger={setTPop}>
     <Viewteam/>
 </Adpop>
    <td><button id='bt2'onClick={()=>setAssi(true)}>ASSIGN</button> <button id='bt3'onClick={()=>setTask(true)}>ADD TASK</button></td>
    <Adpop trigger={assi} setTrigger={setAssi}>
       <Aslist/>
 </Adpop>
 <Adpop trigger={task} setTrigger={setTask}>
   <Task/>
 </Adpop>



  </tr>
  <tr>
    <td>1012</td>
    <td>Mr.jpohn</td>
    <td><button id='bt1'>VIEW</button></td>
    <td><button  id='bt2'>ASSIGN</button></td>
  </tr>
  <tr>
    <td>1013 </td>
    <td>jennifer</td>
    <td><button id='bt1'>VIEW</button></td>
    <td><button  id='bt2'>ASSIGN</button></td>
  </tr>
  <tr>
    <td>1014</td>
    <td>Helen Bennett</td>
    <td><button id='bt1'>VIEW</button></td>
    <td><button  id='bt2'>ASSIGN</button></td>
  </tr>
  <tr>
    <td>1015</td>
    <td>Yoshi Tannamuri</td>
    <td><button id='bt1'>VIEW</button></td>
    <td><button  id='bt2'>ASSIGN</button></td>
  </tr>
  <tr>
    <td>1016</td>
    <td>Giovanni Rovelli</td>
    <td><button id='bt1'>VIEW</button></td>
    <td><button  id='bt2'>ASSIGN</button></td>
  </tr> 
    
  </tbody> 
</table>
  </div>
    </>
  )
}

export default Team