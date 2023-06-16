
window.onload = function () {
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get("productid");
  console.log("param", myParam);
  function getAllProd() {
    var promise = axios({
      url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${myParam}`,
      method: "GET",
    });
    promise.then(function (res) {
      console.log(res);
      renderProd(res.data.content);
    });
    promise.catch(function (err) {
      console.log(err);
    });
  }
  getAllProd();
  let count = 1;
  function renderProd(arr) {
    handleTang=() => {
      // this.state.soLuong++; ko được sửa biến trực tiếp
      
      if(count < arr.quantity){
          count++;
          console.log("tang")
          document.getElementById("cnt").innerHTML = `${count}`;
      }
    };
    handleGiam=() => {
      if(count > 0){
        count--;
        console.log("giam");
        document.getElementById("cnt").innerHTML = `${count}`;
    }
    }
    var content = "";
    var content1 = "";
    content += `
      <div class="banner_left" id="bleft">
      <img src="${arr.image}">
      </div>
      <div class="banner_right mt-5 " id="bright">
          <h3>${arr.name}</h3>
          <p>${arr.description}</p>
          <h5 class="" id="asize">Available Size<h5>
  `;
    for (var i = 0; i < arr.size.length; i++) {
      var Size = arr[i];
      content += `
      <button class="btn" id="s">${arr.size[i]}</button>
      `;
    }
    content += `
    <p class="text-danger mt-3">${arr.price}$</p>
    <div class="btnpm"><button class="btn pm" onclick=handleGiam()>-</button>
    <span class="mx-2" id="cnt">${count}
  </span>
    <button class="btn pm" onclick=handleTang()>+</button></div>
    <button class="btn text-white mt-2" id="atc">Add to Cart</button>
    `
    content1 +=`
    <div class="container">
    <div class="row justify-content-center">
    <div class="card" style="width: 18rem;">
    <img class="card-img-top" src="${arr.relatedProducts[0].image}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${arr.relatedProducts[0].name}</h5>
      <p class="card-text">${arr.relatedProducts[0].shortDescription}</p>
      <div class="relatedP">
        <a href="#" class="btn buynow">Buy Now</a>
        <div class="sprice">${arr.relatedProducts[0].price}$</div>
      </div>
    </div>
  </div>
  <div class="card" style="width: 18rem;">
    <img class="card-img-top" src="${arr.relatedProducts[1].image}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${arr.relatedProducts[1].name}</h5>
      <p class="card-text">${arr.relatedProducts[1].shortDescription}</p>
      <div class="relatedP">
        <a href="#" class="btn buynow">Buy Now</a>
        <div class="sprice">${arr.relatedProducts[1].price}$</div>
      </div>
    </div>
  </div>
  <div class="card" style="width: 18rem;">
    <img class="card-img-top" src="${arr.relatedProducts[2].image}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${arr.relatedProducts[2].name}</h5>
      <p class="card-text">${arr.relatedProducts[2].shortDescription}</p>
      <div class="relatedP">
        <a href="#" class="btn buynow">Buy Now</a>
        <div class="sprice">${arr.relatedProducts[2].price}$</div>
      </div>
    </div>
  </div>
  </div>
  </div>
    `
    document.getElementById("b1").innerHTML = content;
    document.getElementById("r_prod").innerHTML = content1;
  }
  
}

