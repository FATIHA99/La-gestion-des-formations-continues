import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import END_POINT from "../config";
import './css/Profil.css'
import { ObjectId } from 'bson';

function Profil() {

    const [employee, setEmployee] = useState([]);
    const [form, setFormation] = useState([]);
    const [org, setOrganisme] = useState([]);


    const fetchEmployee = async (id) => {
        // e.preventDefault()
        const One = await axios.get(`${END_POINT}/employee/user/${id}`)
        setEmployee((One.data.data));
        // console.log(One.data.data)

    }
    const id = new ObjectId(localStorage.getItem('id'))


    const getformation = async () => {

        const i = employee.formation
        console.log('formation id  ' + i)
        const id = new ObjectId('63bae34d69adeb4799ac750c')
        const formation = await axios.get(`${END_POINT}/employee/user/formation/${id}`)
        setFormation(formation.data.data);

    }


    const getorganisme = async () => {
        const i = employee.organisme[0]
        console.log('63bc9f74fbac1246ff3b6b6b    -'+ i)
        const id_org = new ObjectId('63bc9f74fbac1246ff3b6b6b')
        const organisme = await axios.get(`${END_POINT}/employee/user/organisme/${id_org}`)
        setOrganisme(organisme.data.label);
        console.log(organisme.data.label)

    }



    useEffect(() => {
        fetchEmployee(id)
        getformation()
        getorganisme()
    }, [])

    return (
        <>
            <div className="main">
                <div className="phone">

                    <div className="phone_main">

                        <div className="phone_main_body">
                            <div id="Profil" className="tabcontent">
                                <div className="user_header">
                                    <div className="user_titel">
                                        <h3>Profile</h3>

                                        <button className="btn btn-secondary">Logout</button>
                                    </div>
                                    <div className="user_image"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAB8CAMAAACcwCSMAAAAY1BMVEUAAAD////m5ubr6+v4+PiZmZn8/PxCQkLz8/PLy8tmZmY4ODioqKjT09O7u7uFhYUODg6fn59XV1fe3t59fX2MjIxgYGBKSkpzc3O1tbUcHBxubm7BwcEYGBghISEwMDApKSkxyKUzAAAEGklEQVRogeWb65qiMAyGUQ4iAiKCiujI/V/l4rizIzQhh1Jmn93vP7y2pGn6pXorjYJtUye7j6L4eJT79OarXrJaefJH1um58AYqHmG2CDw73T1IZR64hmcnkPyp880pPNjj6KeStTt4VkyzezWu4AcS3auNnMCJKf/SWRB3XHh04bE9bxPPDmez+7Gz6Ux4xWf3S5773XnwVML2vMuc8KOM7XnpfPBgI4V7vGzDgbMW+FCnueBrOrGZYuV5BrxVsL0NJ+JpuGrgvKHT8FrFZi12Gg7XDrSOM8C3SrYXzgBXzrrn7WaAd1r4lU40FDzQsjnxTsEzPfxgDRfuZ++i9zYKro63PslZw0VVxFCdNVxQPo11/0k4nTz/VfjVGm4RcA9reKiHn63hjR6+t4aLq+Zv0fUzGZJ6+NYeftayO/rIRsIVRftLJcmm4eqPzjAp6DS007EZhQwDrtzRW5rNgMcfKjijcuYcl1RJLmGwOfBY89VZZ2TOETmXs+nUyoXLz6l3nivDgsdXIZzpQfMMIWGmYVoyXCtM9NlrJpttAgpSTcVl871XNr3iW79845c587xFJoXzoo4ba1L4KiLX+0bWapD1WG7TmTaVOP1i+Co+PDDyvRK318StrTgFR9/VwuaOCt4rC0dV5WNPV6paeBQbExpl+aGu2raqw2YLlKk+q9tAwI959ZrlvWBWs+T5RHGub8RDU3D/8NY0LWpm28h/O9hey2ZqCnB4XI+Ktx1ro2xG2+8uxX80Cm+AupEevJ+YT23QaETgAfCS51omjD1k98HyPQz30dLlNBFDGZr/kDYjCJ/09yu4Io+mutsIHYL7aAp9qWyMdb8+EKfZBEr7ADwop9/Tq2jTY/D7dVGQhXCEDAR9dwDObBd7m0u131ct90iRc+A35svEMkPVgEedK7jZ6DPgFt4XJSPZGHB3bNMDH8MdDtwc+ggeu2QbnuQIrvaeeMqm4BGdX6xUTcEtzE6WOn8Czk1uauU4PJLfTxAqweGuZ70vqmIUbtHB4ypD4Y5j/akQhXfu4SUGP+puR4jUYXCF2SdWcUTgFk1bvnIEvkC8DSPuHa7ztoW6wPBoCfagz/gGd5/fPgXD1TdiZApAuEXnUqIjCHdcxXxpC8Kd1o7fykG480ripRSE29xQEOgAwhlHzTkUgvCpw71z+CKp/X+G13/fyH804Czu40gEJ5mF0usNhP/orrZeBr4C4S7tmG+VCHyRba1B4EvUUXcfga+cH89HxsgA7sz5/KNijcLdb+nDq99D+Fp7mZ2pkec/8uEcT/zIeB7bn06dkXFvzDB+HdKNvpxp9m8dfXegsQ+0OXzVH1coQQ1BsLW1VV98xNSC/TCko5hVMzoFjxq5HIf2UqMsr5Pd1cqgKq6bS5jj1/J+AbJVM+U4i0mXAAAAAElFTkSuQmCC" alt /></div>
                                </div>
                                <div className="user_main">
                                    <div className="user_name">
                                        <h2 className="text-dark">{employee.username}</h2>
                                        <span className="status">{employee.email}</span>
                                        <div className="posts">
                                            <div className="post_card" >
                                                <div className="subject">  CURRENT FORMATION :<span className="text-danger">{form.label}</span></div>
                                                <div className="subject">  ORGANISME : <span className="text-danger">{org}</span></div>
                                                <div className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque incidunt officia numquam vel facilis?...</div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Profil