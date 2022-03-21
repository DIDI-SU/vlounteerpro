import React, { useEffect, useState } from "react";
import axios from "axios";

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
          `https://jsonplaceholder.typicode.com/photos?_start=0&_limit=3`
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
    <article>
      {pic.map((item) => (
        <div>
          <img src={item.thumbnailUrl}></img>
        </div>
      ))}
    </article>
  );
}

export default Random;
