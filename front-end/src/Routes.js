import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import Organisme from './Components/Organisme/Organisme'
import Formation from './Components/Formation/Formation'
import Sidebar from './Components/Side-bar'
import Login from './Components/Auth/login'



const Routs = () => {

    return (
      
            <Routes>
                <Route element={<Sidebar />}>

                    <Route path='/organisme' element={<Organisme />} />
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/formation' element={<Formation />} />

                </Route>
                <Route path='/' element={<Login/>} />

            </Routes>
    

    )
}

export default Routs