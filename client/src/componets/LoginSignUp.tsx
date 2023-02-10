import { useContextData } from "../context/context";
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import  Axios from "axios";
export const LoginSignUp = () => {
  const navigate = useNavigate();
  // const param = useParams();
  const pathname = window.location.pathname;
  const { updateAuth } = useContextData();
  const [showLogin, setLogin] = useState<boolean>(true);
  const phoneNumber = useRef<any>();
  const userName = useRef<any>();
  const password = useRef<any>();
  const confirm_password = useRef<any>();
  
  useEffect(() => {
    if (pathname === "/signup") {
      setLogin(false);
    } else {
      setLogin(true);
    }
  }, [pathname]);
  const handleLogin = () => {
    // updateAuth({ auth: true, username: "xyz" });
    if(phoneNumber.current.value===''){
      alert("Please Enter Phone Number");
      return ;
    }
    if(password.current.value===''){
      alert("Please Enter Password!");
      return;
    }
    const authData ={
      phoneNumber:phoneNumber.current.value,
      password:password.current.value
    }
    Axios.post('http://localhost:3002/user/login',authData).then((res)=> {
      // console.log(res.data);
      updateAuth({ auth: true, username: res.data.username });
      navigate("/live-track");
    }).catch(err=> console.log(err));
    
  };
  const handleSignUp = () => {
    // updateAuth({ auth: true, username: "xyz" });
    if(password.current.value!==confirm_password.current.value || password.current.value==='' || confirm_password.current.value===''){
      alert("Password not match!");
      return ;
    }
    if(userName.current.value===''){
      alert("Please Enter UserName");
      return ;
    }
    if(phoneNumber.current.value===''){
      alert("Please Enter Phone Number");
      return ;
    }
    const signUpData={
      username:userName.current.value,
      password:password.current.value,
      phoneNumber:phoneNumber.current.value
    }
    Axios.post('http://localhost:3002/user/newUser',signUpData).then((res)=>{
      // console.log(res.data.msg);
      updateAuth({ auth: true, username: userName.current.value });
      navigate("/live-track");
    }).catch(err=>{
      console.log(err)
    })
    
  };
  const renderPage = (setPage: boolean) => {
    setLogin(setPage);
    if (setPage) navigate("/login");
    else navigate("/signup");
  };
  return (
    <div className="container-fluid container-fluid-login">
      <div className="loginPage shadow-lg p-3 mb-5 bg-body rounded">
        <div
          className="row"
          style={{
            marginTop: "-16px",
            marginRight: "-16px",
            marginLeft: "-16px",
            marginBottom: "10px"
          }}
        >
          <div
            className="col-6 loginSignUp"
            style={{
              padding: "15px",
              backgroundColor: showLogin ? "white" : "blue",
              color: showLogin ? "black" : "white"
            }}
            onClick={() => renderPage(true)}
          >
            Login
          </div>
          <div
            className="col-6 loginSignUp"
            style={{
              padding: "15px",
              backgroundColor: !showLogin ? "white" : "blue",
              color: !showLogin ? "black" : "white"
            }}
            onClick={() => renderPage(false)}
          >
            SignUp
          </div>
        </div>
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
        {!showLogin && (
          <div className="mb-3 textAlignment">
            <label htmlFor="password" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Name"
              ref={userName}
            />
          </div>
        )}
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
        {!showLogin && (
          <div className="mb-3 textAlignment">
            <label htmlFor="password" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="c-password"
              placeholder="Confirm Password"
              ref={confirm_password}
            />
          </div>
        )}
        {showLogin ? (
          <button onClick={handleLogin} className="btn-dark">
            login
          </button>
        ) : (
          <button onClick={handleSignUp} className="btn-dark">
            SignUp
          </button>
        )}
        <br />
        <div className="homePageLink">
          <Link to="/">Home Page</Link>
        </div>
      </div>
    </div>
  );
};
