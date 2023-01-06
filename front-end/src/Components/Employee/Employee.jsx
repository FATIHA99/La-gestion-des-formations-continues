import React from "react";
import '../css/Style.css'
function ListEmployee() {

    return (
        <div>

            <div className="container mt-5">
                <h1 className="text-light" >Staf List</h1>
                <table class="container">
                    <thead>
                        <tr>
                            <th><h1>uername</h1></th>
                            <th><h1>email</h1></th>
                            <th><h1>organisme</h1></th>
                            <th><h1>formaion</h1></th>


                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>hafid</td>
                            <td>hafid@gmail.com</td>
                            <td>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected> select  the formation</option>
                                    <option value="1">JavaSript</option>
                                    <option value="2">Java</option>
                                  
                                </select>
                            </td>
                            <td>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>select thr organisme</option>
                                    <option value="1">Safi</option>
                                    <option value="2">Youssoufia</option>
                                  
                                </select>

                            </td>
                        </tr>
                        <tr>
                            <td>ilyas</td>
                            <td>ilyas@gmail.com</td>
                            <td>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected> select  the formation</option>
                                    <option value="1">JavaSript</option>
                                    <option value="2">Java</option>
                                  
                                </select>
                            </td>
                            <td>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>select thr organisme</option>
                                    <option value="1">Safi</option>
                                    <option value="2">Youssoufia</option>
                                  
                                </select>

                            </td>
                        </tr>
                        <tr>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default ListEmployee