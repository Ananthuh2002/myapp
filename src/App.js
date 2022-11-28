

import './App.css';

import { Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import User from './pages/User';
import First from './pages/First';
import Report from './pages/Report'
import Status from './pages/Status'
import Details from './pages/Details'
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import Admin from './pages/Admin';
import AdDash from './pages/AdDash';
import Team from './pages/Team';
import AdReport from './pages/AdReport';
import Task from './pages/Task';
import Taskform from './pages/Taskform';
import Tasklist from './pages/Tasklist';
import Adrlist from './pages/Adrlist'





function App() {
  return (
    <div className='app'>
{/* <Login/> */}
    <Router>
  
   <Routes>
   {/* <Route exact path='/' element={<First/>}/> */}
   <Route exact path='/' element={<First/>}/>
   
     <Route  path='/User' element={<User/>}>
      <Route  path='Dashboard' element={<Dashboard/>}/>
      <Route path='report' element={<Report/>}/>
      <Route path='Status' element={<Status/>}/>
    <Route path='Details' element={<Details/>}/>  
    <Route path='task' element={<Task/>}/>  
    {/* <Route path='/User' element={<User/>}/>   */}
   
     </Route>


     <Route  path='/Admin' element={<Admin/>}>
     <Route  path='AdDash' element={<AdDash/>}/>
     <Route  path='Team' element={<Team/>}/>
     <Route  path='AdReport' element={<AdReport/>}/>
     <Route  path='Adtask' element={<Tasklist/>}/>
     <Route  path='Adrlist' element={<Adrlist/>}/>
     
   </Route>
 
  
 </Routes>
   </Router>
    </div>
  );
}

export default App;
