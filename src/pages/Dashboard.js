import React from 'react';
import '../components/Dashboard.css'
import Navbar from '../components/Navbar';
import OverviewTab from '../components/OverviewTab';

 const Dashboard = () => {
  return (
    <>
    <div className='main'>
      <div className="heading">
      <h5>Overview</h5>
      </div>
      <OverviewTab/>
      </div>
   
    </>
  )
}

export default Dashboard