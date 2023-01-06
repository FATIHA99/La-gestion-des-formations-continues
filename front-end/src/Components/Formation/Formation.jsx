import React from "react";

import ListFormation from "../Formation/List-Formation";

import Modal from './Modal-Add-Formation'


function Formation() {

    return (
        <div className="  ">
            <div className="">
                <h1 className="text-center mt-5 text-light ">formation Form</h1>
               <Modal/>
            </div>
            <ListFormation />

        </div>
    )
}

export default Formation