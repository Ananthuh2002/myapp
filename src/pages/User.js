import React from 'react'
import { Route,BrowserRouter as Router, Routes, Outlet } from 'react-router-dom';
import Dashboard from './Dashboard'
import Report from './Report'
import Status from './Status'
import Details from './Details'
import Navbar from '../components/Navbar';

const User = () => {
  return (
    <div>
     <nav>
     <Navbar title="User"/>
  
      </nav>
      <Outlet/>
      
    </div>
       
  )
}

export default User