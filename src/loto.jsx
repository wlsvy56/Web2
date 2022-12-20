import React from "react";
import file from "./download/loto.exe";
import {Image} from "react-bootstrap";

const loto = () => {
    
  return (
    <div>
    <h2>로또 연금복권 프로그램</h2>
        <Image src="./img/loto1.JPG"/><br/>
        1번을 누르면 1~45 중에 6개의 랜덤한 숫자를 뽑고 5번 반복한다. 2번을 누르면 0~9 중에 6개의 랜덤한 숫자를 뽑는다.<br/>
        r을 입력하는 걸로 다시 시작할 수 있다.<br/>
        <Image src="./img/loto2.JPG"/><br/>
        <a href={file} download>
      <button type="button">로또 연금복권 프로그램</button></a>
      </div>
  )
}

export default loto