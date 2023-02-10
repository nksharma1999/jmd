import  Axios from "axios";
import { useEffect, useRef } from "react";
import { Navigate, Outlet ,useNavigate} from "react-router-dom"
import {useAdminAuth} from '../context/Admin';
export const AdminLogin = ()=>{
    const {adminAuthUpdate} =useAdminAuth();
    const navigate = useNavigate();
    const phoneNumber = useRef<any>();
    const password = useRef<any>();

    const handleAdminLogin = () =>{
      if(phoneNumber.current.value==='' || password.current.value===''){
        alert("Please Enter phone number / password");
        return;
      }
      const adminData={
        phoneNumber:phoneNumber.current.value,
        password:password.current.value,
      }
      Axios.post('http://localhost:3002/admin/login',adminData).then(res=>{
        console.log(res.data);
        adminAuthUpdate({auth:true,username:res.data.username});
        navigate('home',{replace:true});
      }).catch(err=>console.log(err));
        
    }
    return <div className="container-fluid container-fluid-login">
    <div className="loginPage shadow-lg p-3 mb-5 bg-body rounded">
     
      <div className="mb-3  textAlignment">
        <label htmlFor="phoneNUmber" className="form-label">
          Phone Number
        </label>
        <input
          type="number"
          className="form-control"
          id="phoneNUmber"
          placeholder="Enter Phone Number"
          ref={phoneNumber}
        />
      </div>
      <div className="mb-3 textAlignment">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Password"
          ref={password}
        />
      </div>
        <button  className="btn-dark" onClick={handleAdminLogin}>
          login
        </button>
     
    </div>
  </div>
}