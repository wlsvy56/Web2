import React from "react";
import {Navbar, Button, Image,Nav} from "react-bootstrap";

const bertram = () => {
    
  return (
    <div>
    <h2>성격 유형 검사 사이트</h2>
      <p>
        <Image src="./img/web1.JPG"/><br/>
        web프로그래밍을 배우면서 만들어 본 사이트 아래 링크로 들어가면 나오는 첫 화면이다.
      </p>
      <p>
        <a href="https://wlsvy56.github.io/bertram-test/" target= "_blank"><input type="submit" value="버트럼 성격 검사 바로가기"/></a>
      </p>
    </div>
  )
}

export default bertram