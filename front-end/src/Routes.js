import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import Organisme from './Components/Organisme/Organisme'
import Formation from './Components/Formation/Formation'
import Sidebar from './Components/Side-bar'
import Login from './Components/Auth/Login'
import Register from './Components/Auth/Register'
import ListEmployee from './Components/Employee/Employee'
import Profil from './Components/Profil'
import NotFound from './Components/Auth/NotFound'
import EmployeeRoutes from './Components/employeeRoutes'
import AdminRoutes from './Components/adminRoutes'


const Routs = () => {

    return (

        <Routes>
            <Route element={<AdminRoutes />}>
                <Route element={<Sidebar />}>

                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/formation' element={<Formation />} />
                    <Route path='/organisme' element={<Organisme />} />
                    <Route path='/employee' element={<ListEmployee />} />
                </Route>

            </Route>

            
            <Route element={< EmployeeRoutes />}>
                <Route path='/Profil' element={<Profil />} />
            </Route>


            <Route path='/' element={<Login />} />
            <Route path='/register' element={<Register />} />





        </Routes>


    )
}

export default Routs