window.onload = function () {
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get("productid");
  console.log("param", myParam);

  function getProductID() {
    let promise = axios({
      url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${myParam}`,
      method: "get",
      responseType: "json",
    });
    promise.then((res) => {
      console.log(res);
      //   console.log(res.data.content);
      renderProductDetail(res.data.content);
    });
    promise.catch((err) => {
      console.log(err);
    });
  }
  getProductID();
};
function renderProductDetail(arr) {
  let contentDetail = "";
  let contentSize = "";
  let product = arr;
  contentDetail = `<div><img src="${product.image}" alt=""></div>`;
  document.getElementById("hienKQ").innerHTML = contentDetail;
}
