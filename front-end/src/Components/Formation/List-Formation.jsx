import React, { useEffect, useState } from "react";
import END_POINT from "../../config";
import axios from 'axios'
import '../css/Style.css'
import { ToastContainer, toast } from 'react-toastify'
import UpdateModal from './Modal-Update-Formation'

// import { useEffect, useState } from "react";
function ListFormation() {
    // to dispaly  data 
    const [formation, setFormation] = useState([])
    async function DisplayFormation() {
        const formationData = await axios.get(`${END_POINT}/formation/display`)
        setFormation(formationData.data)

    }
    useEffect(() => {
        DisplayFormation()
    }, [formation])
    // to delete organisme 

    const deleteFormation = (e, id) => {
        e.preventDefault();
        axios.delete(`${END_POINT}/formation/delete/${id}`)
            .then((e) => {
                toast.success('formation deleted')
            })
    }

    return (

        <div className="container ">
            <ToastContainer  autoClose={200}/>
            <table class="container">
                <thead>
                    <tr>
                        <th><h1>image</h1></th>
                        <th><h1>label</h1></th>
                        <th><h1>description</h1></th>
                        <th><h1>start date</h1></th>
                        <th><h1>end date</h1></th>
                        <th><h1>edit</h1></th>
                        <th><h1>delete</h1></th>

                    </tr>
                </thead>
                <tbody>
                    {formation.map((f) => (
                        <tr key={f._id}>
                            <td>img</td>
                            <td>{f.label}</td>
                            <td>{f.description}</td>
                            <td>{f.start_date}</td>
                            <td>{f.end_date}</td>
                            <td> <button className="btn btn-outline-danger" onClick={(e) => { deleteFormation(e, f._id) }} > <i className="bi bi-trash"></i></button> </td>
                            <td><UpdateModal id={f._id}/> </td>
                        </tr>

                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default ListFormation