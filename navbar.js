function showLogin() {
    let box = document.createElement("div")
    box.setAttribute("id", "showLogIn")
    let headline = document.createElement("div")
    let boatHead = document.createElement("h3")
    boatHead.innerText = "Hey buddy!"

    let button = document.createElement("button")
    button.innerText = "X"
    button.addEventListener("click", deleteOption);

    let loginbtn = document.createElement("button")
    loginbtn.innerText = "Log in"
    loginbtn.addEventListener("click", function () {
        window.location.href = "login.php";
    })

    headline.append(boatHead, button)
    box.append(headline, loginbtn)
    document.querySelector("body").append(box)


}

function deleteOption() {
    document.querySelector("#showLogIn").remove();
} 



    


    // 1
   let wirelessbuds=document.querySelector("#wirelessEarbuds");
   wirelessbuds.addEventListener("click",function(){
    localStorage.setItem("categoryDisplay",("Wireless Earbuds"));
    localStorage.setItem("categoryFilter",("WIRELESS EARBUDS"));
    localStorage.setItem("bannerlink","https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Airdopes_Catgry-web_7cf20899-eb4a-427f-9a8a-799d7e1c37fa.jpg?v=1634716734")
    window.location.href="products.html"
   });
   
    
       
       
   
//    2
   let wirelessHeadphones=document.querySelector("#wirelessHeadphones");
   wirelessHeadphones.addEventListener("click",function(){
    localStorage.setItem("categoryDisplay","Wireless Headphones");
    localStorage.setItem("categoryFilter","BLUETOOTH EARPHONES");
    localStorage.setItem("bannerlink","https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Rockerz-_Catgry_web_d201c6e3-e067-4280-a127-56a2e1b51399.jpg?v=1634806683")
    window.location.href="products.html"
   }) 
   
//    3
   let SmartWatches=document.querySelector("#SmartWatches");
   SmartWatches.addEventListener("click",function(){
    localStorage.setItem("categoryDisplay","Smart Watches");
    localStorage.setItem("categoryFilter","SMART WATCHES");
    localStorage.setItem("bannerlink","https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Smart-Watch_Catgry-web.jpg?v=1634717240");
    window.location.href="products.html";
   }) 
