// best_seller_products

best_seller_productObj = [
    {
      id: "one",
      name: "Oneplus Buds",
      rating: 4.8,
      reviews: 258,
      price: 1499,
      mrp: 2990,
      image:
        "https://m.media-amazon.com/images/I/31AQZJ53gnL._SX300_SY300_QL70_FMwebp_.jpg",
    },
  
    {
      id: "two",
      name: "boAt Airdopes 131 - Wireless Earbuds",
      rating: 4.8,
      reviews: 932,
      price: 999,
      mrp: 2990,
      image:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/32011675-2ad8-4b99-9787-895caf201d28_600x.png?v=1642405569",
    },
  
    {
      id: "three",
      name: "boult audio z40",
      rating: 4.9,
      reviews: 92,
      price: 1199,
      mrp: 3990,
      image:
        "https://m.media-amazon.com/images/I/61LlQRdDZ2L._AC_UL480_FMwebp_QL65_.jpg",
    },
  
    {
      id: "four",
      name: "boAt Watch Xtend‌",
      rating: 4.8,
      reviews: 115,
      price: 3199,
      mrp: 7990,
      image:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/xtend_black_600x.png?v=1650387008",
    },
  ];
  
  best_seller_productObj.forEach(function (elem) {
    let saving = ((elem.mrp - elem.price) / elem.mrp) * 100;
    saving = saving.toFixed(0);
    //   console.log(saving);
  
  
    let card = document.createElement("div")
    card.setAttribute("class", "card");
  
    let span = document.createElement("span");
    span.setAttribute("class", "saving");
   
  
    let image = document.createElement("img");
    image.src = elem.image;
  
    let details = document.createElement("div");
  
    let name = document.createElement("h4");
    name.innerText = elem.name;
  
    let star = document.createElement("i");
    star.setAttribute("class", "fa-solid fa-star");
    let rate = document.createElement("span");
    rate.innerText = elem.rating + " | " + elem.reviews + " reviews";
    star.append(rate);
  
    let price = document.createElement("h5");
    price.innerHTML = `₹ ${elem.price} <strike>₹ ${elem.mrp}</strike>`
  
    let saves = document.createElement("p");
    saves.innerHTML= `You Save: ₹ ${elem.mrp - elem.price} (${saving}%)`
  
    let btn = document.createElement("button");
    btn.innerText = "ADD TO CART";
    btn.addEventListener("click", function(){
      console.log(elem)
      carting(elem);
      document.querySelector("#cart").style.display = "block";
    })
  
    details.append(name, star, price, saves, btn);
  
    card.append(span, image, details);
  
    document.querySelector("#best_seller > .cards").append(card);
  
  });
  
  // smart watches ========================
  
  smart_watch_productObj = [
    {
      name: "Fastrack Pro",
      rating: 5.0,
      reviews: 10,
      price: 3299,
      mrp: 6990,
      image:
        "https://rukminim2.flixcart.com/image/300/300/xif0q/smartwatch/r/g/u/1-83-38083pp05-android-ios-fastrack-yes-original-imagnhzb5xngjhhg.jpeg?q=90",
    },
  
    {
      name: "FireBolt Smart Watch",
      rating: 4.8,
      reviews: 43,
      price: 2499,
      mrp: 6990,
      image:
        "https://m.media-amazon.com/images/I/61KmDNS37iL._AC_UL320_.jpg",
    },
  
    {
      name: "Ambrance smart Watch",
      rating: 4.8,
      reviews: 912,
      price: 2499,
      mrp: 5990,
      image:
        "https://rukminim2.flixcart.com/image/300/300/xif0q/smartwatch/p/r/z/-original-imagsjvdnk4hxznb.jpeg?q=90",
    },
  
    {
      name: "boAt storm",
      rating: 5.0,
      reviews: 2,
      price: 4399,
      mrp: 11999,
      image:
        "https://rukminim2.flixcart.com/image/300/300/xif0q/smartwatch/d/7/f/-original-imagn8pyfh5teyzg.jpeg?q=90",
    },
  ];
  
  smart_watch_productObj.forEach(function (elem) {
    let saving = ((elem.mrp - elem.price) / elem.mrp) * 100;
    saving = saving.toFixed(0);
  
    let card = document.createElement("div")
    card.setAttribute("class", "card");
  
    let span = document.createElement("span");
    span.setAttribute("class", "saving");
   
  
    let image = document.createElement("img");
    image.src = elem.image;
  
    let details = document.createElement("div");
  
    let name = document.createElement("h4");
    name.innerText = elem.name;
  
    let star = document.createElement("i");
    star.setAttribute("class", "fa-solid fa-star");
    let rate = document.createElement("span");
    rate.innerText = elem.rating + " | " + elem.reviews + " reviews";
    star.append(rate);
  
    let price = document.createElement("h5");
    price.innerHTML = `₹ ${elem.price} <strike>₹ ${elem.mrp}</strike>`
  
    let saves = document.createElement("p");
    saves.innerHTML= `You Save: ₹ ${elem.mrp - elem.price} (${saving}%)`
  
    let btn = document.createElement("button");
    btn.innerText = "ADD TO CART";
    btn.addEventListener("click", function(){
      console.log(elem);
      carting(elem);
      document.querySelector("#cart").style.display = "block";
    })
  
    details.append(name, star, price, saves, btn);
  
    card.append(span, image, details);
  
    document.querySelector("#smart_watch > .cards").append(card)
  
  });
  
  // trending_Wireless_productObj====================
  
  trending_Wireless_productObj = [
    {
      name: "Sony 235 V2",
      rating: 4.8,
      reviews: 1007,
      price: 999,
      mrp: 2990,
      image:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRUmqTmQXo8XzFyMOJ4dKYIE9KNqopaxRSK_zBngKmXM7fEUF6iBXbYwHRDnADv2Poh_EwT-CKIpIAMJuSiYtuG7uVG7WDu5goVDNKMsrYydPsSbP6LuSMRwbouBf4edT_KhGKPCw&usqp=CAc",
    },
  
    {
      name: "boAt Rockerz 245 V2",
      rating: 4.8,
      reviews: 169,
      price: 999,
      mrp: 2990,
      image:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/245v2_main_2_600x.png?v=1627276367",
    },
  
    {
      name: "Apple Airpods Max",
      rating: 4.8,
      reviews: 253,
      price: 1499,
      mrp: 3990,
      image:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRdqADSTU0LvfhNU9ajd2vLdmrkltld0qlkyyVmHVmOjZUGpKwk-_xd0lbXUJAb24vHfUje-MrCuNfloAI0r8loZWXvTS3amjj5Dwswe3CNC9QWjCVWFnYrbv-ZjScyYI2jl9FnxpICeg&usqp=CAc",
    },
  
    {
      name: "boAt Rockerz 550",
      rating: 4.8,
      reviews: 308,
      price: 1999,
      mrp: 4990,
      image:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/0cfa4417-0213-4b49-b78e-0ae68aeb7057_600x.png?v=1625046144",
    },
  ];
  
  trending_Wireless_productObj.forEach(function (elem) {
    let saving = ((elem.mrp - elem.price) / elem.mrp) * 100;
    saving = saving.toFixed(0);
  
    let card = document.createElement("div")
    card.setAttribute("class", "card");
  
    let span = document.createElement("span");
    span.setAttribute("class", "saving");
   
  
    let image = document.createElement("img");
    image.src = elem.image;
  
    let details = document.createElement("div");
  
    let name = document.createElement("h4");
    name.innerText = elem.name;
  
    let star = document.createElement("i");
    star.setAttribute("class", "fa-solid fa-star");
    let rate = document.createElement("span");
    rate.innerText = elem.rating + " | " + elem.reviews + " reviews";
    star.append(rate);
  
    let price = document.createElement("h5");
    price.innerHTML = `₹ ${elem.price} <strike>₹ ${elem.mrp}</strike>`
  
    let saves = document.createElement("p");
    saves.innerHTML= `You Save: ₹ ${elem.mrp - elem.price} (${saving}%)`
  
    let btn = document.createElement("button");
    btn.innerText = "ADD TO CART";
    btn.addEventListener("click", function(){
      console.log(elem)
      carting(elem)
      document.querySelector("#cart").style.display = "block";
    })
  
    details.append(name, star, price, saves, btn);
  
    card.append(span, image, details);
  
    document.querySelector("#trending_wireless > .cards").append(card)
  
  });
  
  
  // Trending_Wired_productObj========================
  
  Trending_Wired_productObj = [
    {
      name: "Mi Basic Earphone",
      rating: 4.8,
      reviews: 386,
      price: 399,
      mrp: 990,
      image:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR7P2S1_qxFfftrU6m9ky99Cv6ddHPDVoPvxvsttBdKR9KZEo7YOTBjQZIdY5BMlMZMHy4jNgevMvgj8iwAFGWKS__cQJJLoWgJkRqIisziT5L_ab2ooHv3",
    },
  
    {
      name: "boAt BassHeads 103",
      rating: 4.8,
      reviews: 470,
      price: 369,
      mrp: 1290,
      image:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/553af994-244a-4b81-9d9e-9967a1b966b3_600x.png?v=1625046259",
    },
  
    {
      name: "boAt BassHeads 102",
      rating: 4.8,
      reviews: 150,
      price: 449,
      mrp: 1290,
      image:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/103_600x.png?v=1574927262",
    },
  
    {
      name: "Apples Buds Classic",
      rating: 4.8,
      reviews: 330,
      price: 449,
      mrp: 1490,
      image:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRbF5X4PtgWCUr0vw2gmrGQtS6eAXCgXFZfLZaqtRiWLcq9qhdzOsi0W14q0OC69SYVYTWk3bzWM3Bn5sqbnPlMGyb-Z_l-EWZD5R8QENa3dETbY62LT-iGsg",
    },
  ];
  
  Trending_Wired_productObj.forEach(function (elem) {
    let saving = ((elem.mrp - elem.price) / elem.mrp) * 100;
    saving = saving.toFixed(0);
  
    let card = document.createElement("div")
    card.setAttribute("class", "card");
  
    let span = document.createElement("span");
    span.setAttribute("class", "saving");
   
  
    let image = document.createElement("img");
    image.src = elem.image;
  
    let details = document.createElement("div");
  
    let name = document.createElement("h4");
    name.innerText = elem.name;
  
    let star = document.createElement("i");
    star.setAttribute("class", "fa-solid fa-star");
    let rate = document.createElement("span");
    rate.innerText = elem.rating + " | " + elem.reviews + " reviews";
    star.append(rate);
  
    let price = document.createElement("h5");
    price.innerHTML = `₹ ${elem.price} <strike>₹ ${elem.mrp}</strike>`
  
    let saves = document.createElement("p");
    saves.innerHTML= `You Save: ₹ ${elem.mrp - elem.price} (${saving}%)`
  
    let btn = document.createElement("button");
    btn.innerText = "ADD TO CART";
    btn.addEventListener("click", function(){
      console.log(elem)
      carting(elem)
      document.querySelector("#cart").style.display = "block";
    })
  
    details.append(name, star, price, saves, btn);
  
    card.append(span, image, details);
  
    document.querySelector("#trending_wired > .cards").append(card)
  
  });
  
  
  // Trending_Headphones_productObj========================
  
  Trending_Headphones_productObj = [
    {
      name: "boAt Rockerz 333 Pro",
      rating: 4.9,
      reviews: 78,
      price: 1699,
      mrp: 2990,
      image:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/m2_852f9f1f-5498-4e5a-b6a2-0645a7abbc41_600x.png?v=1639153081",
    },
  
    {
      name: "boAt Rockerz 255 Pro",
      rating: 4.8,
      reviews: 368,
      price: 1399,
      mrp: 3490,
      image:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/1be19528-6d06-4cab-8815-02618b93d3c9_600x.png?v=1625045854",
    },
  
    {
      name: "TRebel Rockerz 235 V2",
      rating: 4.8,
      reviews: 14,
      price: 1199,
      mrp: 2990,
      image:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/rockerz-235-v2-blue_f69b43bd-1bf3-41f0-a199-837a1eebb711_600x.png?v=1614462143",
    },
  
    {
      name: "boAt Rockerz 333",
      rating: 4.9,
      reviews: 92,
      price: 1199,
      mrp: 3990,
      image:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-img-R333_600x.png?v=1641801662",
    },
  ];
  
  Trending_Headphones_productObj.forEach(function (elem) {
    let saving = ((elem.mrp - elem.price) / elem.mrp) * 100;
    saving = saving.toFixed(0);
  
    let card = document.createElement("div")
    card.setAttribute("class", "card");
  
    let span = document.createElement("span");
    span.setAttribute("class", "saving");
   
  
    let image = document.createElement("img");
    image.src = elem.image;
  
    let details = document.createElement("div");
  
    let name = document.createElement("h4");
    name.innerText = elem.name;
  
    let star = document.createElement("i");
    star.setAttribute("class", "fa-solid fa-star");
    let rate = document.createElement("span");
    rate.innerText = elem.rating + " | " + elem.reviews + " reviews";
    star.append(rate);
  
    let price = document.createElement("h5");
    price.innerHTML = `₹ ${elem.price} <strike>₹ ${elem.mrp}</strike>`
  
    let saves = document.createElement("p");
    saves.innerHTML= `You Save: ₹ ${elem.mrp - elem.price} (${saving}%)`
  
    let btn = document.createElement("button");
    btn.innerText = "ADD TO CART";
    btn.addEventListener("click", function(){
      console.log(elem)
      carting(elem)
      
      document.querySelector("#cart").style.display = "block";
    })
  
    details.append(name, star, price, saves, btn);
  
    card.append(span, image, details);
  
    document.querySelector("#trending_headphone > .cards").append(card)
  
  });
  
  
  // gaming_productObj===============================
  
  gaming_productObj = [
    {
      name: "boAt Immortal 700",
      rating: 4.9,
      reviews: 78,
      price: 2499,
      mrp: 6990,
      image:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_65ff249b-c4f8-4dad-ae88-2aae76723ce2_600x.png?v=1643477993",
    },
  
    {
      name: "boAt Immortal 1000D",
      rating: 4.9,
      reviews: 12,
      price: 2299,
      mrp: 5990,
      image:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/2_f3aa2756-01f3-4e39-80bc-7b4f6551c7aa_600x.png?v=1625748159",
    },
  
    {
      name: "boAt Immortal 1300",
      rating: 4.8,
      reviews: 8,
      price: 2899,
      mrp: 9990,
      image:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/IM1300_main_2_600x.png?v=1632715015",
    },
  
    {
      name: "boAt Immortal 400",
      rating: 4.5,
      reviews: 2,
      price: 1999,
      mrp: 6990,
      image:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2-700_600x.png?v=1643632679",
    },
  ];
  
  gaming_productObj.forEach(function (elem) {
    let saving = ((elem.mrp - elem.price) / elem.mrp) * 100;
    saving = saving.toFixed(0);
  
    let card = document.createElement("div")
    card.setAttribute("class", "card");
  
    let span = document.createElement("span");
    span.setAttribute("class", "saving");
    
  
    let image = document.createElement("img");
    image.src = elem.image;
  
    let details = document.createElement("div");
  
    let name = document.createElement("h4");
    name.innerText = elem.name;
  
    let star = document.createElement("i");
    star.setAttribute("class", "fa-solid fa-star");
    let rate = document.createElement("span");
    rate.innerText = elem.rating + " | " + elem.reviews + " reviews";
    star.append(rate);
  
    let price = document.createElement("h5");
    price.innerHTML = `₹ ${elem.price} <strike>₹ ${elem.mrp}</strike>`
  
    let saves = document.createElement("p");
    saves.innerHTML= `You Save: ₹ ${elem.mrp - elem.price} (${saving}%)`
  
    let btn = document.createElement("button");
    btn.innerText = "ADD TO CART";
    btn.addEventListener("click", function(){
      console.log(elem)
      carting(elem)
      document.querySelector("#cart").style.display = "block";
    })
  
    details.append(name, star, price, saves, btn);
  
    card.append(span, image, details);
  
    document.querySelector("#gaming > .cards").append(card)
  
  });
  
  
  // new launches ===================
  
  carousel_productObj = [
    {
      name: "boAt Airdopes 175",
      price: 1699,
      category: "Wireless Earbuds",
      description:
        "Experience calling like never before with Airdopes 175 that sends across your voice without ambient disturbances via quad mics with ENx™️ Technology. Immerse in the sound of 10mm drivers for 35 hours straight with its massive battery backup. Experience the best sound!",
      image:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/3_dde24c57-aa19-4a19-ab08-64fbd375ef2e.jpg?v=1653469965",
    },
  
    {
      name: "boAt Wave Connect | Bluetooth Calling Smartwatch",
      price: 3499,
      category: "Smartwatch",
      description:
        "Take calls from your watch using boAt Wave Connect — our newest bluetooth calling smartwatch. Choose from 60+ sports modes using a larger than life 1.69” HD display. Dial up and #StayConnected!",
      image:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/1_43c46150-2889-4f7b-bd06-719a0046fddb.jpg?v=1654591342",
    },
  
    {
      name: "boAt Airdopes 135",
      price: 799,
      category: "Bluetooth Speakers",
      description:
        "Fits your pocket, matches your vibe! Stone 135— super portable Bluetooth Speaker is here with its 5W RMS playing nonstop for 11HRS! Be the life of the party as you double the fun with its TWS Functionality!",
      image:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/stone-2.png?v=1655208846",
    },
  ];
  
  let new_i = 0;
  newLaunchesChange(new_i);
  setInterval(function () {
    new_i++;
    if (new_i > 2) {
      new_i = 0;
    }
  
    newLaunchesChange(new_i);
  }, 5000);
  
  function newLaunchesChange(new_i) {
    let newLaunches = document.querySelector("#content");
  
    newLaunches.innerHTML = `
  <p class="newTag">New</p>
  <img
    src=${carousel_productObj[new_i].image}
  />
  
  <div class="details">
    <img
      src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Vector_Smart_Object_6085a897-ef0f-41c5-9690-3de81a71112f.png?v=1642419136"
    />
    <h5>${carousel_productObj[new_i].category}</h5>
    <h4>${carousel_productObj[new_i].name}</h4>
    <h5>Special Launch Price</h5>
    <h2>Rs. ${carousel_productObj[new_i].price}</h2>
    <p>Description</p>
    <p class="text">
    ${carousel_productObj[new_i].description}
      <span class="readmore" onMouseover="readmore()">Read More...</span>
    </p>
    <div>
      <button>EXPLORE MORE</button>
    </div>
  </div>
  `;
  }
  
  
  let left = document.querySelector("#left");
  left.addEventListener("click", left_pdt);
  
  let right = document.querySelector("#right");
  right.addEventListener("click", right_pdt);
  
  function left_pdt() {
    new_i--;
    if (new_i < 0) {
      new_i = 2;
    }
  
    newLaunchesChange(new_i);
  }
  
  function right_pdt() {
    new_i++;
    if (new_i > 2) {
      new_i = 0;
    }
  
    newLaunchesChange(new_i);
  }
  
 
  
  
  
  // cart function=================
  
  function carting(elem){
    let cList = JSON.parse(localStorage.getItem("cart")) || [];
  
    let obj = {
      name : elem.name,
      price : elem.price,
      image : elem.image,
      quantity : 1,
    }
  
    cList.push(obj);
  
    localStorage.setItem("cart", JSON.stringify(cList))
  }
  