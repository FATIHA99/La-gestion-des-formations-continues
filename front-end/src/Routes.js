import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import Organisme from './Components/Organisme/Organisme'
import Formation from './Components/Formation/Formation'
import Sidebar from './Components/Side-bar'
import Login from './Components/Auth/Login'
import Register from './Components/Auth/Register'
import ListEmployee from './Components/Employee/Employee'



const Routs = () => {

    return (
      
            <Routes>
                <Route element={<Sidebar />}>

                    <Route path='/organisme' element={<Organisme />} />
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/formation' element={<Formation />} />
                    <Route path='/employee' element={<ListEmployee/>} />

                </Route>
                <Route path='/' element={<Login/>} />
                <Route path='/register' element={<Register/>} />
                
 
            </Routes>
    

    )
}

export default Routs