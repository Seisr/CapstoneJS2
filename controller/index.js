function getAllProduct() {
  let promise = axios({
    url: `https://shop.cyberlearn.vn/api/Product
        `,
    method: "get",
    responseType: "json",
  });
  promise.then((res) => {
    console.log(res);
    renderProduct(res.data.content);
  });
  promise.catch((err) => {
    console.log(err);
  });
}
getAllProduct();

function renderProduct(arr) {
  let content = "";
  let contentCarousel = "";
  for (let i = 0; i < arr.length; i++) {
    let product = arr[i];
    content += `<div class="col-xl-3 col-8 item">
    <div class="product_img"><img  src="${product.image}" alt=""></div>
    <div class="product_info">
        <div class="product_name">${product.name}</div>
    </div>
    <div class="but"> <a target="_blank" href="./detail.html?productid=${product.id}">Buy Now</a>
    <div class="product_price">Price: ${product.price}$</div>
    </div>

</div>`;
    if (i == 1) {
      contentCarousel = `   <div class="carousel-item active">
<img src="./img/bgcarousel.jpg" class="d-block w-100" alt="">
<div class="carousel_product_content">
    <img src="${product.image}" alt="">
    <div class="carousel_product_info ">
        <h3 class="carousel_product_name">${product.name}</h3>
        <button class=  "glow-on-hover">Mua Nhanh</button>
    </div>
</div>
</div> `;
    } else {
      contentCarousel += `   <div class="carousel-item ">
    <img src="./img/bgcarousel.jpg" class="d-block w-100" alt="">
    <div class="carousel_product_content">
        <img src="${product.image}" alt="">
        <div class="carousel_product_info ">
            <h3 class="carousel_product_name">${product.name}</h3>
            <button class=  "glow-on-hover">Mua Nhanh</button>
        </div>
    </div>
</div> `;
    }
  }
  document.getElementById("product").innerHTML = content;
  document.getElementById("carouselapi").innerHTML = contentCarousel;
}
