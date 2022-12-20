import React, { useState, useEffect } from "react";
import { Navbar, Button, Image,Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import axios from "axios";
import $ from "jquery";
import {} from "jquery.cookie";
import SignUpModal from "./modals/SignUpModal";
import SignInModal from "./modals/SignInModal";
axios.defaults.withCredentials = true;
const headers = { withCredentials: true };

function Header(){
  const [signUpModalOn, setSignUpModalOn] = useState(false);
  const [signInModalOn, setSignInModalOn] = useState(false);
  const [buttonDisplay, setButtonDisplay] = useState("none");
  const [buttonDisplay2, setButtonDisplay2] = useState("block");
  useEffect(() => {
    getButtonStyle();
  }, []);

  function getButtonStyle(){
    if ($.cookie("login_id")) {
      setButtonDisplay("block");
      setButtonDisplay2("none");
    } else {
      setButtonDisplay("none");
      setButtonDisplay2("block");
    }
  }
  

  function logout(){
    axios
      .get("http://localhost:8080/member/logout", {
        headers
      })
      .then(returnData => {
        if (returnData.data.message) {
          $.removeCookie("login_id");
          alert("로그아웃 되었습니다!");
          window.location.href = "/";
        }
      });
  };

  const buttonStyle = {
    margin: "0px 5px 0px 10px",
    display: buttonDisplay
  };
  const buttonStyle2 = {
    display: buttonDisplay2
  };
  return (
    <div>
      <SignUpModal
        show={signUpModalOn}
        onHide={() => setSignUpModalOn(false)}/>
      <SignInModal
        show={signInModalOn}
        onHide={() => setSignInModalOn(false)}/>
      <Navbar>
        <Navbar.Brand href="/">JinStory</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link>
                  <Button style={buttonStyle2}
                    variant="primary"
                    onClick={() => setSignInModalOn(true)}
                  >
                    Sign In
                  </Button>
                </Nav.Link>
                <Nav.Link>
                  <Button style={buttonStyle2}
                    variant="secondary"
                    onClick={() => setSignUpModalOn(true)}
                  >
                    Sign Up
                  </Button>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          {/* <NavLink to="/mypage">
            <Button style={buttonStyle} variant="primary">
              회원정보 수정
            </Button>
          </NavLink> */}
          <NavLink to="/boardForm">
            <Button style={buttonStyle} variant="primary">
              글목록
            </Button>
          </NavLink>
          <NavLink to="/boardWrite">
            <Button style={buttonStyle} variant="primary">
              글쓰기
            </Button>
          </NavLink>
          <Button style={buttonStyle} onClick={logout} variant="primary">
            로그아웃
          </Button>
        </Navbar.Collapse>
      </Navbar>
      <Image src="./img/main.JPG" fluid />
    </div>
  );
  
}

export default Header;
