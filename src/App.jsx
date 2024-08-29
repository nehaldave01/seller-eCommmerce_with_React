import React from 'react'
import Router from './Router'
import Sidebar from './Component/Sidebar'
import { useLocation } from 'react-router-dom'

const App = () => {
 const location = useLocation()
 const showSidebar = location.pathname !== '/login' && location.pathname !== '/signup';

 return (
<div className='row'>
   {showSidebar ? (
    <>
    <div className='col-3'><Sidebar/></div>
    <div className='col-9'><Router/></div>
    </>
   ):(
    <div className='col-12'><Router/></div>
   )}
</div>
 );
};

export default App      