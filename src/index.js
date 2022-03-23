import React from "react";
import ReactDOM from "react-dom";
import "./data";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import "./index.css";
import App from "./home/App";
import { render } from "@testing-library/react";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/main" element={<Main />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
