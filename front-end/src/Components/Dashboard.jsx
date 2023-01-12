import React from "react"
import './css/Style-Dashboard.css'
import { useEffect } from "react";
import { useState } from "react";
import END_POINT from "../config";
import axios from 'axios'
import { ObjectId } from 'bson';

function Dashboard() {
    const [employee, setEmployee] = useState([]);



    const fetchEmployee = async (id) => {
        // e.preventDefault()
        const One = await axios.get(`${END_POINT}/employee/user/${id}`)
        setEmployee((One.data.data));
        console.log(One.data.data)

    }
    const id = new ObjectId(localStorage.getItem('id'))
    useEffect(() => {
        fetchEmployee(id)
    
    }, [])
    return (
        <div>
            <div className="Box-header">
                <div className="Box-search">
                    {/* <svg className="icon-search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                        <link xmlns type="text/css" rel="stylesheet" id="dark-mode-custom-link" />
                        <link xmlns type="text/css" rel="stylesheet" id="dark-mode-general-link" />
                        <style xmlns lang="en" type="text/css" id="dark-mode-custom-style" dangerouslySetInnerHTML={{ __html: "" }} />
                        <style xmlns lang="en" type="text/css" id="dark-mode-native-style" dangerouslySetInnerHTML={{ __html: "" }} />
                        <style xmlns lang="en" type="text/css" id="dark-mode-native-sheet" dangerouslySetInnerHTML={{ __html: "" }} />
                        <g fill="none" fillRule="evenodd">
                            <path d="m0 0h32v32h-32z" />
                            <path d="m15 0c8.2842712 0 15 6.71572875 15 15 0 3.7823596-1.3999424 7.2377452-3.7099407 9.8762702l5.3667949 5.3663705-1.4142135 1.4142135-5.3663705-5.3667949c-2.638525 2.3099983-6.0939106 3.7099407-9.8762702 3.7099407-8.28427125 0-15-6.7157288-15-15 0-8.28427125 6.71572875-15 15-15zm0 2c-7.17970175 0-13 5.82029825-13 13 0 7.1797017 5.82029825 13 13 13 7.1797017 0 13-5.8202983 13-13 0-7.17970175-5.8202983-13-13-13z" fill="white" fillRule="nonzero" />
                        </g>
                    </svg> */}
                    {/* <input className="input-search" placeholder="Search" type="text" /> */}
                    <h4 className="m-3 text-light">{employee.email}</h4>
                </div>
                <div className="box-alert-infomation">
                    <div className="box-alert">
                        <div className="staus-box-alert" />
                        <svg className="icon-alert" xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width={512} height={512}>
                            <link xmlns type="text/css" rel="stylesheet" id="dark-mode-custom-link" />
                            <link xmlns type="text/css" rel="stylesheet" id="dark-mode-general-link" />
                            <style xmlns lang="en" type="text/css" id="dark-mode-custom-style" dangerouslySetInnerHTML={{ __html: "" }} />
                            <style xmlns lang="en" type="text/css" id="dark-mode-native-style" dangerouslySetInnerHTML={{ __html: "" }} />
                            <style xmlns lang="en" type="text/css" id="dark-mode-native-sheet" dangerouslySetInnerHTML={{ __html: "" }} />
                            <path d="M22.555,13.662l-1.9-6.836A9.321,9.321,0,0,0,2.576,7.3L1.105,13.915A5,5,0,0,0,5.986,20H7.1a5,5,0,0,0,9.8,0h.838a5,5,0,0,0,4.818-6.338ZM12,22a3,3,0,0,1-2.816-2h5.632A3,3,0,0,1,12,22Zm8.126-5.185A2.977,2.977,0,0,1,17.737,18H5.986a3,3,0,0,1-2.928-3.651l1.47-6.616a7.321,7.321,0,0,1,14.2-.372l1.9,6.836A2.977,2.977,0,0,1,20.126,16.815Z" />
                        </svg>
                    </div>
                    <div className="box-infomation">
                        <img className="info-avatar" src="https://cdn-icons-png.flaticon.com/512/149/149071.png" />
                        <div className="info-name">{employee.username}</div>
                    </div>
                </div>
            </div>
            <div className="Box-elements">
                <div className="box-element-flex">
                    <div className="chart-box">
                        <div className="title-element">Activities</div>
                        <div className="chart-box-main">
                            {/* <img src='data:image/jpeg;base64,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'></img> */}
                            <div />
                            
                        </div>
                    </div>
                    {/* <div className="box-travel">
                        <div className="title-element">Goals Budget</div>
                        <div className="box-chart-travel">
                            <div className="chart-back-1 chart-travel" />
                            <div className="chart-back-2 chart-travel" />
                            <div className="chart-travel-data chart-travel">
                                <div className="title-travel">Travel</div>
                                <div className="value-travel">$55/<span>$99</span></div>
                            </div>
                        </div>
                    </div> */}
                </div>
                <div className="box-element-flex">
                    <div className="transction">
                        <div className="box-trans-sub">
                        
                            <div className="info-trans-sub">
                                <h5>YOUCODE Staf</h5>
                                <div>Transfer</div>
                            </div>
                         
                        </div>
                        <div className="box-trans-sub ">
                           <img src="data:image/jpeg;base64,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" alt />
                            <div className="info-trans-sub ">
                                <h5>Youssef ouadid</h5>
                                <div>Administration</div>
                            </div>
                         
                        </div>
                        <div className="box-trans-sub ">
                           <img src="https://mymodernmet.com/wp/wp-content/uploads/2021/01/morphy-me-celebrity-face-mashups-15.jpg" alt />
                            <div className="info-trans-sub ">
                                <h5>Abelhafid belfqir</h5>
                                <div>Coach</div>
                            </div>
                          
                        </div>
                        <div className="box-trans-sub ">
                            <img src="https://mymodernmet.com/wp/wp-content/uploads/2021/01/morphy-me-celebrity-face-mashups-15.jpg" alt />
                            <div className="info-trans-sub ">
                                <h5>Ahmed Arrafi</h5>
                                <div>Coach</div>
                            </div>
                          
                        </div>
                    </div>
                    <div className="stocks ">
                        <div className="title-element">Our Speciality</div>
                        <div className="stocks-main">
                            <div className="sub-stocks">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" alt /> 
                                <div className="stocks-titles">Java Script</div>
                                <div className="stocks-number">98</div>
                                <div className="stocks-status">student</div>
                            </div>
                        </div>
                        <div className="stocks-main">
                            <div className="sub-stocks">
                            <img src="https://upload.wikimedia.org/wikipedia/fr/thumb/2/2e/Java_Logo.svg/1200px-Java_Logo.svg.png" alt />
                                <div className="stocks-titles">Java</div>
                                <div className="stocks-number">54</div>
                                <div className="stocks-status up-trans">student</div>
                            </div>
                        </div>
              
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Dashboard