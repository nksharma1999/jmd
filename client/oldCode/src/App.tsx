import React, { useState } from 'react';
import {Route,Routes} from 'react-router-dom';
import './App.css';
import { Details } from './componets/Details';
import { Home } from './componets/Home';
import { Login } from './componets/Login';
import { NavBar } from './componets/NavBar';
import { PageNotFound } from './componets/PageNotFound';
import { Redirect } from './componets/Redirect';

function App() {
  const [showHome, setHome] = useState(false);
  const changeHomePage = (element: boolean) => {
    setHome(element);
  };
  return (
    <>
    <NavBar />
      <Routes>
          <Route path='/' element={<Redirect/>} />
          <Route
          path=":location"
          element={<Home showHome={showHome} changeHomePage={changeHomePage} />}
        >
          <Route
            path=":type"
            element={<Details changeHomePage={changeHomePage} />}
          />
        </Route>
          <Route path='login' element={<Login />} />
        <Route path='*' element={<PageNotFound />}/>
      </Routes>
    </>
  );
}

export default App;
