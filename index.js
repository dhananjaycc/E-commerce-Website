// carousel function start ==============

let imgArray = [
    "https://www.gonoise.com/cdn/shop/files/Top_banner-Desktop_copy_8_1900x.png?v=1696654875",
    "https://www.gonoise.com/cdn/shop/files/image_3_1900x.png?v=1696484864",
    "https://www.gonoise.com/cdn/shop/files/Top_banner-Desktop__1_1900x.jpg?v=1697092809",
    "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/web34_0dc3ef24-e76e-4587-b21d-948137c138e3_2000x.jpg?v=1654670966",
  ];
  
  let carousalImg = document.getElementById("car_img");
  var i = 0;
  carousalImg.src = imgArray[i];
  setInterval(function () {
    i++;
    if (i > 3) {
      i = 0;
    }
    // console.log(i);
    carousalImg.src = imgArray[i];
  }, 5000);
  
  document.getElementById("prev").addEventListener("click", function () {
    prev(i);
  });
  document.getElementById("next").addEventListener("click", function () {
    next(i);
  });
  
  function prev() {
    i--;
    if (i < 0) {
      i = 3;
    }
    carousalImg.src = imgArray[i];
  }
  function next() {
    i++;
    if (i > 3) {
      i = 0;
    }
    carousalImg.src = imgArray[i];
  }
  
  // carousel function end ================
  
  
  
  // other small functions ====================
  function shopping(){
    window.location.href = "products.html"
  }
  
  function readmore() {
    document.querySelector(".text").style.height = "auto";
    document.querySelector(".readmore").style.display = "none";
  }
  
  document.querySelector("#closeCart").addEventListener("click", function(){
    document.querySelector("#cart").style.display = "none";
  })
  
  document.querySelector("#content").addEventListener("click", function(){
    window.location.href = "products.html"
  })
  
  function shopping(){
    window.location.href = "product.html"
  }
  
 