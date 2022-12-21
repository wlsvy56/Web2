import React from "react";
import { Link,Route,BrowserRouter, Switch } from "react-router-dom";
import javaCrud from "./javaCrud";

const Java = () => {
    
  return (
    <BrowserRouter>
      <h3>Java</h3>
      <p><Link to="/javaCrud">JAVA로 만드는 CRUD 프로그램</Link></p>
      <Route path="/javaCrud" component={javaCrud}></Route>
      </BrowserRouter>
  )
}

export default Java