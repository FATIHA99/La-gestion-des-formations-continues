import React from "react";

import '../css/Style.css'
function ListFormation() {

    return (

        <div className="container ">

           


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
                    <tr>
                        <td>img</td>
                        <td>JS</td>
                        <td>Google BLA BLA</td>
                        <td>2021</td>
                        <td>2033</td>
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
export default ListFormation