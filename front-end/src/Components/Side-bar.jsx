import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import './css/Style-Dashboard.css'
import { Link, Outlet } from 'react-router-dom'

function Sidebar() {
    return (
      
        <div>
            <div>
                <div className="Side-bar">
                    <div className="Box-logo">G-For..tions</div>
                    <div className="Box-menu">
                        <ul className="ul-menu">
                            <li className="li-mneu Active-menu">

                                <div className="title-menu"> <Link className="nav-link  text-light px-2" to={'/dashboard'}>
                                    <i class="bi bi-house fs-5"></i> <span className="ms-1 d-none d-sm-inline">Home</span>
                                </Link></div>
                            </li>
                            <li className="li-mneu Active-menu">

                                <div className="title-menu">
                                    <Link className="nav-link  text-light px-2" to={'/organisme'}>
                                        <i class="bi bi-building fs-5 "></i> <span className="ms-1 d-none d-sm-inline">Organisme</span>
                                    </Link>
                                </div>
                            </li>
                            <li className="li-mneu Active-menu">

                                <div className="title-menu">      <Link className="nav-link  text-light px-2" to={'/formation'}>
                                    <i class="bi bi-mortarboard-fill fs-5"></i> <span className="ms-1 d-none d-sm-inline">formation</span>
                                </Link></div>
                            </li>


                            <li className="li-mneu logout Active-menu">
                                <svg className="icon-menu" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={512} height={512}>
                                    <link xmlns type="text/css" rel="stylesheet" id="dark-mode-custom-link" />
                                    <link xmlns type="text/css" rel="stylesheet" id="dark-mode-general-link" />
                                    <style xmlns lang="en" type="text/css" id="dark-mode-custom-style" dangerouslySetInnerHTML={{ __html: "" }} />
                                    <style xmlns lang="en" type="text/css" id="dark-mode-native-style" dangerouslySetInnerHTML={{ __html: "" }} />
                                    <style xmlns lang="en" type="text/css" id="dark-mode-native-sheet" dangerouslySetInnerHTML={{ __html: "" }} />
                                    <path d="M11.476,15a1,1,0,0,0-1,1v3a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2H7.476a3,3,0,0,1,3,3V8a1,1,0,0,0,2,0V5a5.006,5.006,0,0,0-5-5H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H7.476a5.006,5.006,0,0,0,5-5V16A1,1,0,0,0,11.476,15Z" />
                                    <path d="M22.867,9.879,18.281,5.293a1,1,0,1,0-1.414,1.414L21.13,10.97,6,11a1,1,0,0,0,0,2H6l15.188-.03-4.323,4.323a1,1,0,1,0,1.414,1.414l4.586-4.586A3,3,0,0,0,22.867,9.879Z" />
                                </svg>
                                <div className="title-menu"><Link  className='text-light ' to={'/'}>Logout</Link></div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="Page">
                    <Outlet />
                </div>
            </div>

        </div>
    )
}
export default Sidebar;
