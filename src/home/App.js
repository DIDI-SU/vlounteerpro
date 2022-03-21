//최초 첫번째 페이지: 전체 화면 구성 만들기
import React from "react";
import Random from "./main/random";
import Main from "./main/main";
import Header from "./header/header";
import "./App.css";

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <Random></Random>
        <Main></Main>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
