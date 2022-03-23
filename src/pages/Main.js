import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "./content.css";

function Content() {
  const [text, setText] = useState("");
  const onChange = (e) => {
    let word = e.target.value;
    setText(word);
  };
  const onSumbit = (e) => {
    setText("");
  };
  return (
    <>
      <div class="search">
        {" "}
        <input type="text" id="search" value={text} onChange={onChange} />
        <button type="submit" onSubmit={onSumbit}>
          제출
        </button>
      </div>
      <article>
        <table>
          <caption>임시 타이틀</caption>
          <caption>
            {" "}
            보호소명을 클릭할 경우 관련 보호소의 상세 페이지로 이동합니다
          </caption>
          <thead>
            <tr>
              <th scope="col">순번</th>
              <th scope="col">보호소명</th>
              <th scope="col">보호소 위치</th>
              <th scope="col">직접봉사/봉사주선</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">0</th>
              <td>예1)</td>
              <td>예1)</td>
              <td>예1)</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th scope="row" colspan="2">
                전체 보호소 수
              </th>
              <td colspan="2">77</td>
            </tr>
          </tfoot>
        </table>
      </article>
    </>
  );
}

function Main() {
  return (
    <>
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </>
  );
}
export default Main;
