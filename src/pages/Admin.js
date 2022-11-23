import React from 'react'
import { Outlet } from 'react-router-dom'
import ADNavbar from './ADNavbar'


function Admin() {

  return (
    <div>
    
  
        <nav>
         <ADNavbar /> 
         </nav>
         <Outlet/>

  
      {/* <AdDashboard/> */}
   
        


         
    </div>
  )
}

export default Admin
