import React from "react";
import { Link,Route,BrowserRouter, Switch } from "react-router-dom";
import loto from "./loto";
import Digital_Image_Processing from "./Digital_Image_Processing";

const C2 = () => {
    
  return (
    <BrowserRouter>
      <h3>C++</h3>
      <p><Link to="/loto">loto</Link></p>
      <Route path="/loto" component={loto}></Route>
      <p><Link to="/Digital_Image_Processing">디지털 영상 처리</Link></p>
      <Route path="/Digital_Image_Processing" component={Digital_Image_Processing}></Route>
    </BrowserRouter>
  )
}

export default C2