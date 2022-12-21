import React from "react";
import { Link,Route,BrowserRouter } from "react-router-dom";
import stack1 from "./stack1";

const C = () => {
    
  return (
    <BrowserRouter>
      <h3>C</h3>
      <p><Link to="/stack1">스택으로 십진수를 이진수로 바꾸기</Link></p>
      <Route path="/stack1" component={stack1}></Route>
    </BrowserRouter>
  )
}

export default C