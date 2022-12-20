import React from "react";
import { Link,Route,BrowserRouter } from "react-router-dom";
import bertram from "./bertram";

const Web = () => {
    
  return (
    <BrowserRouter>
      <h3>Web</h3>
      <p><Link to="/bertram">성격 유형 검사 사이트</Link></p>
      <Route path="/bertram" component={bertram}></Route>
    </BrowserRouter>
  )
}

export default Web