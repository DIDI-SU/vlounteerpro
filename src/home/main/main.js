import React from "react";
import { info } from "./formain";
function Main() {
  return (
    <article>
      {info.map((item) => (
        <>
          {" "}
          <h1>{item.who ? item.who.name : item.projectInfo.name}</h1>
          <p>{item.who ? item.who.info : item.projectInfo.info}</p>
        </>
      ))}
    </article>
  );
}

export default Main;
