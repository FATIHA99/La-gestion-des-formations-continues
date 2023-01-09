import React from "react";
import ListOrganisme from "./List-Organisme";


import Modal from './Modal-Add-Organisme'


function Organisme() {
    const inputs = [
        {
            id: 1,
            type: 'text',
            name: 'label',
            label: 'organisme name',
            placeholder: 'enter a name',
        },
        {
            id: 2,
            type: 'text',
            name: 'compus',
            label: 'organisme compus',
            placeholder: 'enter a compus name',
        },
    ]
    return (
        <div className="  ">
            <div className="">
                <h1 className="text-center mt-5 text-light "> Organisme Form</h1>
                <Modal />

            </div>
            <ListOrganisme />

        </div>
    )
}

export default Organisme