import React from "react";
import { Link,Route,BrowserRouter,Switch } from "react-router-dom";
import {Row,Col, Container } from "react-bootstrap";
import C from "./C";
import profile from "./profile";
import C2 from "./C2";
import Java from "./Java";
import Web from "./Web";
import AI from "./AI";
const Home = () => {
    
  return (
    <BrowserRouter>
    <Row>
      <Col sm={2}>
        <ol>
        <h3>목록</h3>
      <li><Link to ="/C">C</Link></li>
      <li><Link to="/C2">C++</Link></li>
      <li><Link to="/Java">JAVA</Link></li>
      <li><Link to="/web">WEB</Link></li>
      <li><Link to="/AI">AI</Link></li>
        </ol>
      </Col>
      <Switch> 
        <Col sm={10}>
        <Route path="/" exact component={profile}></Route>
        <Route path="/C" component={C}></Route>
        <Route path="/C2" component={C2}></Route>
        <Route path="/Java" component={Java}></Route>
        <Route path="/Web" component={Web}></Route>
        <Route path="/AI" component={AI}></Route>
        </Col>
      </Switch> 
    </Row>
    </BrowserRouter>
  )
}

export default Home