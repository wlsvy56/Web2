import React from "react";
import { Link,Route,BrowserRouter, Switch } from "react-router-dom";
import Distinguish_between_dogs_and_cats from "./Distinguish_between_dogs_and_cats";

const AI = () => {
    
  return (
    <BrowserRouter>
      <h3>C</h3>
      <p><Link to="/Distinguish_between_dogs_and_cats">개와 고양이 구별하기</Link></p>
      <Route path="/Distinguish_between_dogs_and_cats" component={Distinguish_between_dogs_and_cats}></Route>
    </BrowserRouter>
  )
}

export default AI