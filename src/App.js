
import MainPage from './MyComponents/MainPage';
import Login from './MyComponents/Login';
import React, { useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  let [redirect,setRedirect] = useState("/Login")

   const Loggedin = () => {
     setRedirect(redirect="/user/home")
   }
  return (
    <>
     <Router>
      <Switch>
          <Route  path="/user">
    <>
   
    <MainPage/>
    </>
    </Route>
      <Route exact path="/Login">
     <Login Loggedin = {Loggedin} />
    </Route>
    </Switch>
     <Redirect to={redirect} /> 
    </Router>
    </>
  );
}

export default App;
