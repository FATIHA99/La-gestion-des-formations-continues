import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import END_POINT from "../../config";
import '../css/Login.css'
import ls from 'local-storage'
// import jwt from 'jwt-decode'
// import user from "../../../../back-end/models/user";
import image_youcode from '../../assets/youcode.png'

function Login() {

  const navigate = useNavigate()
  const [userInfo, setInfo] = useState()
  function handleInput(e) {
    setInfo({ ...userInfo, [e.target.name]: e.target.value })
  }

  function handleForm(e) {
    e.preventDefault()
    axios.post(`${END_POINT}/auth/login`, userInfo)
      .then((e) => {
        const tkn = e.data.token
        if (e.data.response === 'login sucess') {
          // console.log(e)
           localStorage.setItem('token', tkn)
  localStorage.setItem('id',e.data.id )
          if (e.data.role === 'admin') {
            navigate('/dashboard')
          } else if (e.data.role === 'employee') {
            navigate('/Profil')
          }
          else {
            navigate('/notfound')
          }
        }
        else {
          toast.warning(e.data.response)
        }

      })
      .catch((e) => {
        console.log(e)
      })
  }

  return (
    <div  className=" align  " >
    <div className="">
      <ToastContainer autoClose={200} />
      {/* <h3 className="text-light ">Login Here</h3> */}
      <img className="logo-login" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjGk-jm8w8TnBmkvCuRyJSNYMk-Z9YYmMwQw&usqp=CAU'></img>
      <div className="grid">
        <form onSubmit={handleForm} action="" method="POST" className="form login">
          <div className="form__field">
            <label htmlFor="login__username"><svg className="icon">
              <use xlinkHref="#icon-user" />
            </svg><span className="hidden">Email </span></label>

            {/* email */}
            <input onChange={handleInput} autoComplete="username" id="login__username" type="email" name="email" className="form__input" placeholder="Email" required />

          </div>
          <div className="form__field">
            <label htmlFor="login__password"><svg className="icon">
              <use xlinkHref="#icon-lock" />
            </svg><span className="hidden">Password</span></label>
            {/* password */}

            <input onChange={handleInput} id="login__password" type="password" name="password" className="form__input" placeholder="Password" required />


          </div>
          <div className="form__field">

            <input type="submit" defaultValue="Sign In" />
          </div>
        </form>
        <p className="text--center">Not a member? <Link to={"/register"}>Sign up now</Link> <svg className="icon">
          <use xlinkHref="#icon-arrow-right" />
        </svg></p>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" className="icons">
        <symbol id="icon-arrow-right" viewBox="0 0 1792 1792">
          <path d="M1600 960q0 54-37 91l-651 651q-39 37-91 37-51 0-90-37l-75-75q-38-38-38-91t38-91l293-293H245q-52 0-84.5-37.5T128 1024V896q0-53 32.5-90.5T245 768h704L656 474q-38-36-38-90t38-90l75-75q38-38 90-38 53 0 91 38l651 651q37 35 37 90z" />
        </symbol>
        <symbol id="icon-lock" viewBox="0 0 1792 1792">
          <path d="M640 768h512V576q0-106-75-181t-181-75-181 75-75 181v192zm832 96v576q0 40-28 68t-68 28H416q-40 0-68-28t-28-68V864q0-40 28-68t68-28h32V576q0-184 132-316t316-132 316 132 132 316v192h32q40 0 68 28t28 68z" />
        </symbol>
        <symbol id="icon-user" viewBox="0 0 1792 1792">
          <path d="M1600 1405q0 120-73 189.5t-194 69.5H459q-121 0-194-69.5T192 1405q0-53 3.5-103.5t14-109T236 1084t43-97.5 62-81 85.5-53.5T538 832q9 0 42 21.5t74.5 48 108 48T896 971t133.5-21.5 108-48 74.5-48 42-21.5q61 0 111.5 20t85.5 53.5 62 81 43 97.5 26.5 108.5 14 109 3.5 103.5zm-320-893q0 159-112.5 271.5T896 896 624.5 783.5 512 512t112.5-271.5T896 128t271.5 112.5T1280 512z" />
        </symbol>
      </svg>
     
    </div>
    {/* <div>
       <img src={image_youcode}></img>
    </div> */}
</div>
  )
}

export default Login