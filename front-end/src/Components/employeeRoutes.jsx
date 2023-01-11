import { useState , useEffect } from "react";
import axios from "axios"
import { useNavigate, Outlet} from "react-router-dom";

const EmployeeRoutes = () => {
   const navigate=useNavigate()
   const [role,setRole]=useState("")

    const data= async ()=>{
     const user= await axios.post('http://localhost:3001/auth/decrybt/',{token:localStorage.getItem('token')})
     setRole(user.data.role)
    }
    useEffect(()=>{
     data()
    },[])
 
   return (
        (role==='employee') ? <Outlet/> : navigate('/profil')
   );
  };
  
  export default EmployeeRoutes;