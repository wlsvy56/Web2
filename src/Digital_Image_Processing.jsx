import React from "react";
import file1 from "./download/ImagePro.exe";
import file2 from "./download/testImg.zip";
import {Image} from "react-bootstrap";

const Digital_Image_Processing = () => {
    
  return (
    <div>
    <h2>영상 처리 프로그램</h2>
      <p>
        <Image src="./img/image1.JPG"/><br/>
        실행 한 첫 화면
      </p>
      <p>
        <Image src="./img/image2.JPG"/><br/>
        renna.raw 픽셀처리 메뉴에 산술덧셈을 한 화면
      </p>
      <p>
        <Image src="./img/image3.JPG"/><br/>
        renna.raw 픽셀처리 메뉴에 히스토그램 평활화한 화
      </p>
      <p>
        <Image src="./img/image4.JPG"/><br/>
        renna.raw 하고 two_images_add_mask.raw를 픽셀처리 메뉴에 두 영상의 산술덧셈을 한 화면
      </p>
      <p>
        <Image src="./img/image5.JPG"/><br/>
        key_ori0.raw 픽셀처리 메뉴에 이진화 한 화면
      </p>
      <p>
        <Image src="./img/image6.JPG"/><br/>
        자동차-흐림.pgm 영역처리 메뉴에 선명화 한 화면
      </p>
      <p>
        <Image src="./img/image7.JPG" /><br/>
        모나리자.pgm 영역처리 메뉴에 영상 흐리게 하기 한 화면
      </p>
      <p>
        <Image src="./img/image8.JPG"/><br/>
        강아지.pgm 영역처리 메뉴에 경계선 검출 한 화면
      </p>
      <p>
        <Image src="./img/image9.JPG"/><br/>
        Lenna-임펄스잡음.raw 영역처리 메뉴에 중간값 필터 한 화면
      </p>
      <p>
        <Image src="./img/image10.JPG" /><br/>
        bolts(이진).pgm 형태학적처리 메뉴에 침식연산 한 화면
      </p>
      <p>
        <Image src="./img/image11.JPG" /><br/>
        세포(역상-이진).pgm 형태학적처리 메뉴에 팽창연산 한 화면
      </p>
      <p>
        <Image src="./img/image12.JPG" /><br/>
        bolts(이진).pgm 형태학적처리 메뉴에 열림연산 한 화면
      </p>
      <p>
        <Image src="./img/image13.JPG" /><br/>
        Lenna-64x64.pgm 기하학적처리 메뉴에 확대(픽셀복제) 한 화면
      </p>
      <p>
        <Image src="./img/image14.JPG"/><br/>
        Lenna-64x64.pgm 기하학적처리 메뉴에 확대(양선형 보간법) 한 화면
      </p>
      <p>
        <Image src="./img/image15.JPG"/><br/>
        lines.pgm 기하학적처리 메뉴에 축소(서브샘플링) 한 화면
      </p>
      <p>
        <Image src="./img/image16.JPG"/><br/>
        lines.pgm 기하학적처리 메뉴에 축소(평균값 필터링) 한 화면
      </p>
      <p>
        <Image src="./img/image17.JPG"/><br/>
        화성탐사선.pgm 기하학적처리 메뉴에 회전 한 화면
      </p>
      <p>
        <Image src="./img/image18.JPG"/><br/>
        로켓발사.pgm 기하학적처리 메뉴에 상하대칭 한 화면
      </p>
      <p>
        <Image src="./img/image19.JPG"/><br/>
        warp.pgm 기하학적처리 메뉴에 워핑 한 화면
      </p>
      <p>
        <Image src="./img/image20.JPG"/><br/>
        warp.pgm 기하학적처리 메뉴에 모핑 한 화면
      </p>
      <p>
        <Image src="./img/image21.JPG"/><br/>
        BASEBALL_bw.raw 영상인식 메뉴에 영역라벨링(재귀호출) 한 화면
      </p>
      <p>
        BASEBALL_bw.raw 영상인식 메뉴에 영역라벨링(반복법)을 하면 영역라벨링(재귀호출)하고 같은 화면이 나온다.
      </p>
      <p>
        <Image src="./img/image22.JPG"/><br/>
        key_ori0.raw 영상인식 메뉴에 이진화 후 영역라벨링 한 화면
      </p>
      <p>
        <Image src="./img/image23.JPG"/><br/>
        key_ori0.raw 영상인식 메뉴에 영역경계추적 한 화면
      </p>
      <a href={file1} download>
      <button type="button">영상처리 프로그램</button></a>
      <a href={file2} download>
      <button type="button">테스트용 이미지</button></a>
      </div>
  )
}

export default Digital_Image_Processing