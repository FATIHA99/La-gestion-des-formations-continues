import React from "react";


function Organisme() {
    return (
        <div>
            <h1 className="text-center mt-5"> Organisme Form</h1>
            <form className="container w-25 mt-5">
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label" name='label'>Label</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label" name='compus'>Compus</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
             
                <button type="submit" className="btn btn-primary">Ajouter</button>
            </form>
        </div>
    )
}

export default Organisme