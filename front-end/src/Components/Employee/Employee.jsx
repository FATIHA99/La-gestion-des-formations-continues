import React, { useEffect, useState } from "react";
import '../css/Style.css'
import axios from 'axios'
import END_POINT from "../../config";
import { ToastContainer, toast } from 'react-toastify'
import { ObjectId } from 'bson';

function ListEmployee() {
    const [employee, setEmployee] = useState([])

    async function DisplayEmployee() {
        const employeeData = await axios.get(`${END_POINT}/employee/display`)
        setEmployee(employeeData.data)
    }

    const [organisme, setOrganisme] = useState([])

    async function DisplayOrganisme() {
        const organismeData = await axios.get(`${END_POINT}/organisme/display`)
        setOrganisme(organismeData.data)
    }

    const [formation, setFormation] = useState([])

    async function DisplayFormation() {
        const formationData = await axios.get(`${END_POINT}/formation/display`)
        setFormation(formationData.data)
    }
    const [infoEmployee, setChange] = useState({ organisme: new ObjectId(), formation: new ObjectId() });

    async function EditEmployee(id) {
        await axios.put(`${END_POINT}/employee/edit/${id}`, infoEmployee)
            .then((e) => {
                console.log(infoEmployee)
                toast.success('employee updated')
            })
    }


    useEffect(() => {
        DisplayEmployee()
        DisplayOrganisme()
        DisplayFormation()
        // EditEmployee()
    }, [employee, infoEmployee])




    return (
        <div>
            <ToastContainer autoClose={200} />
            <div className="container mt-5">
                <h1 className="text-light" >Staf List</h1>

                <table class="container">
                    <thead>
                        <tr>
                            <th><h1>uername</h1></th>
                            <th><h1>email</h1></th>
                            <th><h1>organisme</h1></th>
                            <th><h1>formaion</h1></th>
                            <th><h1>Action</h1></th>
                        </tr>
                    </thead>
                    <tbody>
                        {employee.map((e) => (
                            <tr key={e._id}>

                                <td>{e.username}</td>
                                <td>{e.email}</td>
                                <td>
                                    <select class="form-select" name="organisme" aria-label="Default select example" onChange={(e) => { setChange({ ...infoEmployee, [e.target.name]: e.target.value }) }} >
                                        {organisme.map((o) => (
                                            <option selected={e.organisme == o._id ? true : false} key={o._id} value={o._id}  >{o.label}</option>
                                        ))}
                                    </select>
                                </td>
                                <td>
                                    <select class="form-select" name='formation' aria-label="Default select example" onChange={(e) => { setChange({ ...infoEmployee, [e.target.name]: e.target.value }) }} >
                                  

                                        {formation.map((f) => (
                                            <option selected={e.formation == f._id ? true : false} value={f._id} key={f._id}  >{f.label} </option>
                                            
                                        ))}
                                    </select>
                                </td>
                                < td>
                                    <button className="btn btn-success m-5" onClick={() => { EditEmployee(e._id) }}>valid changes</button>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default ListEmployee