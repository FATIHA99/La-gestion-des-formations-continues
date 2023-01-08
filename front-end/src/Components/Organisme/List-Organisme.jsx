import React, { useState, useEffect } from "react";
import '../css/Style.css'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import END_POINT from '../../config'
import 'react-toastify/dist/ReactToastify.css';

import UpdateModal from './Modal-Update-Organisme'

function ListOrganisme() {
    // to dispaly  data 
    const [organisme, setOrganisme] = useState([])
    async function DisplayOrganisme() {
        const organismeData = await axios.get(`${END_POINT}/organisme/display`)
        setOrganisme(organismeData.data)
      
    }
    useEffect(() => {
        DisplayOrganisme()
    }, [])
    // to delete organisme 

  const deleteOrganisme=(e,id)=>{
    e.preventDefault();
    axios.delete(`${END_POINT}/organisme/delete/${id}`)
    .then((e)=>{
        toast.success('organisme deleted')
    })
  }

    return (

        <div className="container ">


            <table class="container">
                <thead>
                    <tr>
                        <th><h1>label</h1></th>
                        <th><h1>compus</h1></th>
                        <th><h1>delete</h1></th>
                        <th><h1>update</h1></th>
                    </tr>
                </thead>
                <tbody>
                    {organisme.map((org) => (
                        <tr key={org._id}>
                            <td>{org.label}</td>
                            <td>{org.compus}</td>
                            <td> <button  onClick={(e)=>{deleteOrganisme(e,org._id)}} className="btn btn-outline-danger" > <i className="bi bi-trash"></i></button> </td>
                            <td><UpdateModal id={org._id}/> </td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default ListOrganisme