import React from "react";
import '../css/Style.css'
function ListOrganisme() {

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
                    <tr>
                        <td>Google</td>
                        <td>9518</td>
                        <td> <button className="btn btn-outline-danger" > <i className="bi bi-trash"></i></button> </td>
                        <td> <button className="btn  btn-outline-info"  ><i className="bi bi-pencil-square"></i> </button> </td>

                    </tr>
                    <tr>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}
export default ListOrganisme