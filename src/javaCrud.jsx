import React from "react";
import file from "./download/javaCrud.exe";
import {Image} from "react-bootstrap";

const javaCrud = () => {
    
  return (
    <div>
    <h2>JAVA로 만드는 CRUD 프로그램</h2>
      <p>
        CRUD : Create(생성), Read(읽기), Update(갱신), Delete(삭제)를 뜻한다.
      </p>
      <p>
        <Image src="./img\java1.JPG"/><br/>
        crud.exe 실행 했을 때 첫 화면이다. <br/>
        초기 id(root) , 초기 password(1234)를 입력하면 로그인 할 수 있다.
      </p>
      <p>
        <Image src="./img\java2.JPG"/><br/>
        초기 id로 로그인 시에 초기 id를 수정한다.
      </p>
      <p>
        <Image src="./img\java3.JPG"/><br/>
        로그인 후(초기 id라면 초기 id를 수정한 후에) 나오는 화면이다.
      </p>
      <p>
        <Image src="./img\java14.JPG"/><br/>
        회원정보 보기를 선택하더라도 비밀번호는 암호화된다.
      </p>
      <p>
        <Image src="./img\java4.JPG"/><br/>
        아메리카노를 입력했을 때 해당 가격이 나오게 된다.
      </p>
      <p>
        <Image src="./img\java5.JPG"/><br/>
        -1를 입력하면 입력을 멈추게 되고 여태 입력한 정수의 평균을 구한다.
      </p>
      <p>
        <Image src="./img\java6.JPG"/><br/>
        a~z까지 출력한다.
      </p>
      <p>
        <Image src="./img\java7.JPG"/><br/>
        두 정수 x, y를 입력하고 x~y까지 더한 결과를 출력한다.
      </p>
      <p>
        <Image src="./img\java8.JPG"/><br/>
        구구단을 출력한다.
      </p>
      <p>
        <Image src="./img\java9.JPG"/><br/>
        몇 단부터 몇 단까지 어느 수부터 어느 수까지 곱할지 정하고 출력한다.
      </p>
      <p>
        <Image src="./img\java10.JPG"/><br/>
        자바 예외처리 예제를 출력한 것이다.
      </p>
      <p>
        <Image src="./img\java11.JPG"/><br/>
        학생 성적 처리 프로그램이다.
      </p>
      <p>
        <Image src="./img\java12.JPG"/><br/>
        책 관리 프로그램이다.
      </p>
      <p>
        <Image src="./img\java13.JPG"/><br/>
        대학 구성원 관리 프로그램이다.
      </p>
      <p>
        11을 선택하면 위에 화면과 기능은 똑같으나 ArrayList를 사용하였다.
      </p>
      <p>
      <a href={file} download>
      <button type="button">자바 CRUD 프로그램</button></a>
      </p>
    </div>
  )
}

export default javaCrud