var xhr = new XMLHttpRequest();
const serviceKey = `eGkBOixFeIxsB5AAuXiaFRUQiGjFiMG9/p+oZKq83vRJ+HSgGok08ohX/E/et/LFn1lmOxq96UWUYKOmm8Cocg==`;
var url =
  "http://openapi.animal.go.kr/openapi/service/rest/abandonmentPublicSrvc/sido"; /*URL*/
var queryParams =
  "?" + encodeURIComponent("serviceKey") + "=" + serviceKey; /*Service Key*/
xhr.open("GET", url + queryParams);
xhr.onreadystatechange = function () {
  if (this.readyState == 4) {
    alert(
      "Status: " +
        this.status +
        "nHeaders: " +
        JSON.stringify(this.getAllResponseHeaders()) +
        "nBody: " +
        this.responseText
    );
  }
};

xhr.send("");
