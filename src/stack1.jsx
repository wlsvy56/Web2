import React from "react";
import file from "./download/stack1.exe";
import {Image} from "react-bootstrap";

const stack1 = () => {
    
  return (
    <div>
    <h2>스택으로 십진수를 이진수로 바꾸기</h2>
      <p>
        <Image src="./img/stack1.JPG"/><br/>
        맨처음 화면
     </p>
     <p>
        <Image src="./img/stack2.JPG" /><br/>
        십진수를 입력하면 이진수로 바꾼다.
      </p>
      <p>
      <a href={file} download>
      <button type="button">십진수 이진수로 변환 프로그램</button></a>
      </p>
      </div>
  )
}

export default stack1