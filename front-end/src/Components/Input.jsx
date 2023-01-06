import React from "react";


function Input(props) {
    const { name, type, placeholder, label } = props
    return (

        <div className="m-3">
            <label for="exampleInputEmail1" className="form-label" name='label'>{label}</label>
            <input className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" type={type} name={name} placeholder={placeholder}></input>

        </div>

    )
}

export default Input