import axios from "axios";
import React, { useEffect, useState } from "react";

function DataMain() {
  const [loading, setLoading] = useState(false);
  const [table, setTable] = useState(null);
  const [error, setError] = useState(null);

  const url = `?serviceKey=${seviceKey}&care_reg_no=%20&care_nm=%20&numOfRows=3&pageNo=1&_type=json`;
  useEffect(() => {
    const fetchPic = async () => {
      try {
        setError(null);
        setTable(null);
        setLoading(true);
        const response = await axios.get("/api" + url);
        setTable(response.data);
        console.log(table);
      } catch (e) {
        setError(e);
        console.log(e);
      }
      setLoading(false);
    };
    fetchPic();
  }, []);
  return (
    <>
      <div class="search">
        {" "}
        <input type="text" id="search" />
        <button type="submit">제출</button>
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
            </tr>
            ;
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
export default DataMain;
