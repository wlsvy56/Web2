import React from "react";
import BoardForm from "./BoardForm";
import BoardWriteForm from "./BoardWriteForm";
import BoardDetail from "./BoardDetail";
import { Route } from "react-router-dom";
import $ from "jquery";
import {} from "jquery.cookie";
import Home from "./Home";

function Body(){

    let resultForm;
    function getResultForm() {
      // console.log($.cookie("login_id"));
      if ($.cookie("login_id")) {
        resultForm = <Route exact path="/" component={Home}></Route>;
        return resultForm;
      } else {
        resultForm = <Route exact path="/" component={Home}></Route>;
        return resultForm;
      }
    }
    getResultForm();
    return (
      <div>
        <Route path="/boardWrite" component={BoardWriteForm}></Route>
        <Route path="/board/detail" component={BoardDetail}></Route>
        <Route path="/boardForm" component={BoardForm}></Route>
        {resultForm}
      </div>
    );
  }


export default Body;
