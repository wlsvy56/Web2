import React, { useEffect, useRef } from "react";
import { Form, Button, Modal,Container } from "react-bootstrap";
import { loadReCaptcha } from "react-recaptcha-v3";
import axios from "axios";
import {} from "jquery.cookie";
axios.defaults.withCredentials = true;
const headers = { withCredentials: true };

function SignUpModal({show,onHide}){
  const formStyle = {
    margin: 50
  };
  const buttonStyle = {
    marginTop: 10
  };
  const joinEmail = useRef();
  const joinName = useRef();
  const joinPw = useRef();

  useEffect(()=>{
    loadReCaptcha("6LfGieAUAAAAAJSOoqXS5VQdT_e5AH8u0n2e1PDb");
  },[]);

  const join = () => {
    const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    const regExp2 = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;
    if (joinEmail.current.value === "" || joinEmail.current.value === undefined) {
      alert("이메일 주소를 입력해주세요.");
      joinEmail.current.focus();
      return;
    } else if (
      joinEmail.current.value.match(regExp) === null ||
      joinEmail.current.value.match(regExp) === undefined
    ) {
      alert("이메일 형식에 맞게 입력해주세요.");
      joinEmail.current.value = "";
      joinEmail.current.focus();
      return;
    } else if (joinName.current.value === "" || joinName.current.value === undefined) {
      alert("이름을 입력해주세요.");
      joinName.current.focus();
      return;
    } else if (joinPw.current.value === "" || joinPw.current.value === undefined) {
      alert("비밀번호를 입력해주세요.");
      joinPw.current.focus();
      return;
    } else if (
      joinPw.current.value.match(regExp2) === null ||
      joinPw.current.value.match(regExp2) === undefined
    ) {
      alert("비밀번호를 숫자와 문자, 특수문자 포함 8~16자리로 입력해주세요.");
      joinPw.current.value = "";
      joinPw.current.focus();
      return;
    }

    const send_param = {
      headers,
      email: joinEmail.current.value,
      name: joinName.current.value,
      password: joinPw.current.value
    };
    axios
      .post("http://localhost:8080/member/join", send_param)
      //정상 수행
      .then(returnData => {
        if (returnData.data.message) {
          alert(returnData.data.message);
          //이메일 중복 체크
          if (returnData.data.dupYn === "1") {
            joinEmail.current.value = "";
            joinEmail.current.focus();
          } else {
            joinEmail.current.value = "";
            joinName.current.value = "";
            joinPw.current.value = "";
          }
        } else {
          alert("회원가입 실패");
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
          Sign Up 
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
    <Form style={formStyle}>
      <Form.Group controlId="joinForm">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          maxLength="100"
          ref={joinEmail}
          placeholder="Enter email"
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
        <Form.Label>name</Form.Label>
        <Form.Control
          type="text"
          maxLength="20"
          ref={joinName}
          placeholder="name"
        />
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          maxLength="64"
          ref={joinPw}
          placeholder="Password"
        />
        <Button
          style={buttonStyle}
          onClick={join}
          variant="primary"
          type="button"
          block
        >
          회원가입
        </Button>
      </Form.Group>
    </Form>
    </Modal.Body>
      </Container>
    </Modal>
    )
}
export default SignUpModal