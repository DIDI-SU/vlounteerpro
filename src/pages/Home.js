import React, { useEffect, useState } from "react";
import { info } from "./forHome";
import axios from "axios";
import "./random.css";

function Random() {
  const [pic, setPic] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchPic = async () => {
      try {
        setError(null);
        setPic(null);
        setLoading(true);
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/photos?_start=0&_limit=5`
        );
        setPic(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    fetchPic();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!pic) return null;

  return (
    <article class="topArticle">
      {pic.map((item) => (
        <div class="randomDiv">
          <img src={item.thumbnailUrl}></img>
          <p>{item.title}</p>
        </div>
      ))}
    </article>
  );
}

function Home() {
  return (
    <>
      {" "}
      <Random></Random>
      <article>
        {info.map((item) => (
          <>
            {" "}
            <h1>{item.who ? item.who.name : item.projectInfo.name}</h1>
            <p>{item.who ? item.who.info : item.projectInfo.info}</p>
          </>
        ))}
      </article>
    </>
  );
}

export default Home;
var obj1 = {
  outer: function () {
    console.log(this);
    var inner = function () {
      console.log(this);
    };
    inner();
    var self = this;
    var inner2 = function () {
      console.log(self);
    };
    inner2();
  },
};
obj1.outer();
