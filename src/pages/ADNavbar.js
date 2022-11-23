import React, { useState } from 'react'
import * as FaIcons from "react-icons/fa";
import * as BsIcons from "react-icons/bs";
import {Link} from "react-router-dom";
import {AdminDetails} from './AdminDetails'
import '../components/Navbar.css'


function ADNavbar() {

    const [sidebar,setSidebar]=useState(false)

    const showSidebar=()=>setSidebar(!sidebar)
  return (
    <>
    <div className="navbar">
        <Link to ="#" className="menu-bar">
            <FaIcons.FaBars onClick={showSidebar}/>

        </Link>
        <h4></h4>
    </div>
    <nav className={sidebar ? 'nav-menu active': 'nav-menu'}>
        <ul className='nav-menu-items'onClick={sidebar}>
            {/* <li className='navbar-toggle'>
                <Link to="#" className='menu-bar'>
                    <AiIcons.AiOutlineClose />
                </Link>
            </li> */}
            {
                AdminDetails.map((props,index,)=>{
               
                    return(
                        <li key={index} className={props.cName}>
                            <Link to={props.path}>
                                {props.icon}
                                <span style={{display:sidebar? "block":"none"}}>{props.title}</span>
                            </Link>
                        </li>
                    )
                })
            }
            <div style={{display:sidebar? "":"block"}} className='social'>

           <li >
            <Link to="#" className='insta' style={{lineHeight:sidebar? "":"50px",marginLeft:sidebar? "":"10px"}}>
            <BsIcons.BsInstagram/>
            </Link>
            </li>
            
            <li>
            <Link to="#" className='fb'style={{lineHeight:sidebar? "":"20px",marginLeft:sidebar? "":"10px"}}>
            <BsIcons.BsFacebook/> 
            </Link>
            </li>
            <li>
            <Link to="#" className='fb'style={{lineHeight:sidebar? "":"50px",marginLeft:sidebar? "":"10px"}}>
            <BsIcons.BsTwitter/>
            </Link>
           </li> 
           </div>
           
        </ul>
       
    </nav>
  
</>
  )
}

export default ADNavbar