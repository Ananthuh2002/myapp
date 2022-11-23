import React, { useState,useEffect } from 'react'
import { Button } from 'react-bootstrap';
import Form  from '../components/Form';
import Submit from '../components/Submit';
import DatePicker from '../components/Date'
import Database from  '../components/database'


function Report() {
    const [finish,setFinish]=useState([])
     // const[fun,setFun]=useState([])
     const onForm=(data)=>{
    setFinish([...finish,data])
     }
   
     const deleteContact=(id)=>{
      let newWork=finish.filter((obj)=>{
        return obj.id !==id;
       
      })

      setFinish(newWork)
     }

    //  useEffect(()=>{
    //   const forms=JSON.parse(localStorage.getItem("user"))
    
    //  })


    //  useEffect(()=>{
    //  localStorage.setItem("user",JSON.stringify(finish))
    //  },[finish])


          

  return (
    <>
    <Form getData={onForm}/>
   {/* <Submit finish={finish} deleteContact={deleteContact}/> */}

   {finish.map((obj)=>{
    return   <Database finish={obj}/>
   })}
  
 
    </> 
   
 
  )
}

export default Report