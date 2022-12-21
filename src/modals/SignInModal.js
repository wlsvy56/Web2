import { Modal, Button, Form, Container } from "react-bootstrap";
import React, { useEffect, useRef } from "react";
import { loadReCaptcha, ReCaptcha } from "react-recaptcha-v3";
import axios from "axios";
import $ from "jquery";
import {} from "jquery.cookie";
axios.defaults.withCredentials = true;
const headers = { withCredentials: true };

const SignInModal = ({show,onHide}) => {

  const loginEmail = useRef();
  const loginPw = useRef();

  useEffect(()=>{
    loadReCaptcha("6LfGieAUAAAAAJSOoqXS5VQdT_e5AH8u0n2e1PDb");
  },[]);

  const verifyCallback = recaptchaToken => {
    // Here you will get the final recaptchaToken!!!
    console.log(recaptchaToken, "<= your recaptcha token");
  };
  const buttonStyle = {
    marginTop: 10
  };
  const login = () => {

    if (loginEmail.current.value === "" || loginEmail.current.value === undefined) {
      alert("이메일 주소를 입력해주세요.");
      loginEmail.current.focus();
      return;
    } else if (loginPw.current.value === "" || loginPw.current.value === undefined) {
      alert("비밀번호를 입력해주세요.");
      loginPw.current.focus();
      return;
    }

    const send_param = {
      headers,
      email: loginEmail.current.value,
      password: loginPw.current.value
    };
    axios
      .post("http://localhost:8080/member/login", send_param)
      //정상 수행
      .then(returnData => {
        if (returnData.data.message) {
          // console.log("login_id:" + returnData.data._id);
          $.cookie("login_id", returnData.data._id, { expires: 1 });
          $.cookie("login_email", returnData.data.email, { expires: 1 });
          alert(returnData.data.message);
          window.location.reload();
        } else {
          alert(returnData.data.message);
        }
      })
      //에러
      .catch(err => {
        console.log(err);
      });
  };
  return (
        <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
        <Container>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Sign In 
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
      <Form.Group controlId="loginForm">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          maxLength="100"
          ref={loginEmail}
          placeholder="Enter email"
        />
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          maxLength="20"
          ref={loginPw}
          placeholder="Password"
        />
        <ReCaptcha
          sitekey="6LfGieAUAAAAAJSOoqXS5VQdT_e5AH8u0n2e1PDb"
          action="login"
          verifyCallback={verifyCallback}
        />
        <Button
          style={buttonStyle}
          onClick={login}
          variant="primary"
          type="button"
          block
        >
          로그인
        </Button>
      </Form.Group>
    </Form>
      </Modal.Body>
      </Container>
    </Modal>
  );
};

export default SignInModal;