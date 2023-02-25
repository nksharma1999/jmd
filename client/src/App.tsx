import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Details } from "./componets/Details";
import { Home } from "./componets/Home";
import { LoginSignUp } from "./componets/LoginSignUp";
import { NavBar } from "./componets/NavBar";
import { PageNotFound } from "./componets/PageNotFound";
import { Redirect } from "./componets/Redirect";
import { AllServices } from "./componets/AllServices";
import { LiveTrack } from "./componets/LiveTrack";
import { AuthRequired } from "./componets/AuthRequired";
import {Quote} from './Admin/Quote';
import {AdminAuth} from './Admin/AdminAuth';
import {AdminLogin} from './Admin/AdminLogin';
// import { AdminProvider } from "./context/Admin";
import { AdminHome } from "./Admin/AdminHome";
import { ViewCart } from "./componets/ViewCart";
import { OtpBasedLogin } from "./componets/OTPLogin";
import { Footer } from "./componets/Footer";
function App() {
  const [showHome, setHome] = useState(false);
  const changeHomePage = (element: boolean) => {
    setHome(element);
  };
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Redirect />} />
        <Route
          path=":location"
          element={<Home showHome={showHome} changeHomePage={changeHomePage} />}
        >
          <Route
            path=":type"
            element={<Details changeHomePage={changeHomePage} />}
          />
          <Route
            path="all-service"
            element={<AllServices changeHomePage={changeHomePage} />}
          />
        </Route>
        <Route
          path="live-track"
          element={
            <AuthRequired>
              <LiveTrack />
            </AuthRequired>
          }
        />
        <Route path="viewcart" element={<ViewCart />}></Route>
        
        <Route path="admin" element={<AdminLogin />} />
        <Route path="admin/home" element={<AdminAuth><AdminHome/></AdminAuth>}>
          <Route index element={<Quote/>}/>
          <Route path="quote" element={<Quote />} />
          <Route path="open" element={<h1>Open Section</h1>}/>
          <Route path="decline" element={<h1>Decline Section</h1>}/>
          <Route path="accepted" element={<h1>Accepted Section</h1>}/>

        </Route>
        <Route path="login" element={<OtpBasedLogin />} />
        <Route path="signup" element={<LoginSignUp />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
