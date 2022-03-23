//최초 첫번째 페이지: 전체 화면 구성 만들기
import React from "react";
import { Link } from "react-router-dom";
import IconImage from "../icon/Bigicon.png";
import "./footer.css";
import Home from "../pages/Home";
import "./App.css";
function Footer() {
  return (
    <footer>
      <div class="footerDiv">
        <h2>임시제목</h2>
        <p> 임시 제목</p>
      </div>
    </footer>
  );
}
function Header() {
  return (
    <header>
      <a href="/">
        <img src={IconImage} alt="icon" />
      </a>
      <nav>
        <ol>
          <Link to="/">Home</Link>
          <Link to="/main">Main</Link>
          <Link to="/">Contact</Link>
        </ol>
      </nav>
    </header>
  );
}
function App() {
  return (
    <>
      {" "}
      <Header></Header>
      <Home></Home>
      <Footer></Footer>
    </>
  );
}

export default App;
