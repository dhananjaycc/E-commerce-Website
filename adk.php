<?php 
session_start();

if(isset($_SESSION['id'])&& isset($_SESSION['user_name'])){
    ?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <!-- fonts & icon -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap" rel="stylesheet" />

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
    integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
    crossorigin="anonymous" referrerpolicy="no-referrer" />

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Anek+Malayalam:wght@200&family=Roboto:wght@300&display=swap"
    rel="stylesheet">



  <title>
    Home
  </title>

  <!-- stylesheets -->
  <link rel="stylesheet" href="index.css" />
  <link rel="stylesheet" href="cart.css">
  <link rel="stylesheet" href="navbar.css">
  <link rel="stylesheet" href="footer.css">
  <link rel="stylesheet" href="bloghome.css">

  <!-- stylesheets-->
</head>

<body>
  <!--- navbar area-- -->

  <div id="navbar">
    <div>
      <a href="index.html">
      <img
        src="./img/small logo.jpg"
        alt="error">
      </a>
    </div>

    <div>
      <!-- <h3 id="mouseover">Shop</h3> -->
      <div class="dropdown">
        <button class="dropbtn">Shop</button>
        <div class="dropdown-content">
          <a href="products.html"><img id="wirelessEarbuds"
              src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/dropdown-TWS_540x.png?v=1612338251"></a>

          <a href="products.html"><img id="Mobile"
              src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/Rectangle271_540x.png?v=1612338387"></a>
          
          <a href="products.html"><img id="SmartWatches"
              src="https://www.boat-lifestyle.com/cdn/shop/collections/smartwatches_100x.png?v=1684827668"></a>
        
        </div>
      </div> 
      <div class="more">
        <button class="morebtn">More ↓</button>
        <div class="more-content">
          
          <a href="#">Daily Deals </a>
          <a href="#">Gifting</a>


          <a href="#">Careers</a>

        </div>
      </div>

    </div>

    <div>
      <div>
        <h3>Hello, <?php echo $_SESSION['user_name'];?></h3>
      </div>

      <a href="logout.php">Logout</a>
      


      <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/gift.png?v=1606314809" alt="error">
      <img id="cartOpen"
        src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/navigation-Icon-3.png?v=1655206047" alt="error">

    </div>

  </div>

  <!-- homepage area--->

  <!-- cart option -----------------  -->

  <div id="cart">
    <div>
      <p>Your Cart(Cart)</p>
      <p style="cursor: pointer;" id="closeCart">x</p>
    </div>


    <div class="ribbon">
      <p>
        Free Shipping sitewide | <b>Cash On Delivery</b> available for order value
        upto <b>₹3000</b>
      </p>

    </div>
    <div id="cart_pdt">
   

    </div>

    <div id="total_cart">
      <div>
        <p>Shipping :</p>
        <p>FREE</p>
      </div>
      <div>
        <p>Total :</p>
        <p>Rs. <span id="total_price">0</span></p>
      </div>
      <button>Continue Shopping ></button>
      <button>Continue to Payment</button>
    </div>
  </div>



  <!-- carousel---------- -->
  <div id="carousel">
    <img src="" id="car_img" alt="carousel Image" />
    <button id="prev">
      <span></span>
    </button>
    <button id="next">
      <span>></span>
    </button>
  </div>
  

  <!-- first product container ----------------------------  -->
  <section>
    <div class="container" id="best_seller">
      <h3>Best Sellers</h3>
      <div class="cards">
       
      </div>
    </div>

    <div class="container" id="smart_watch">
      <h3>Smart Watches</h3>
      <div class="cards">
       
      </div>
    </div>
  </section>

 
  

  <!-- new launches ending ---------------------------  -->
  <section>
    <div class="container" id="trending_wireless">
      <h3>Trending Wireless</h3>
      <div class="cards">
        
      </div>
    </div>

    <div class="container" id="trending_wired">
      <h3>Trending Wired</h3>
      <div class="cards">
   
      </div>
    </div>

    <div class="container" id="trending_headphone">
      <h3>Trending Headphones</h3>
      <div class="cards">
       
      </div>
    </div>

    <div class="container" id="gaming">
      <h3>Gaming</h3>
      <div class="cards">
       
      </div>
    </div>
  </section>

 
  <section class="brand_promises">
    <h1>Brand Promises</h1>
    <div class="brand">
      <img
        src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/group_186_3x_4616a7a4-8c24-4065-a237-54e3d574bb94.png?v=1611132367">
      <p>Free Shipping</p>
      <img
        src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/vector_3x_50a1233e-95d9-4e18-9e8e-757b545e2c06.png?v=1611132367">
      <p>Exclusive Deals</p>
      <img
        src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/vector_2_2x_9d5071e2-154a-4f06-b660-9d0430a18248.png?v=1611132367">
      <p>Secure Checkout</p>
    </div>
    <div class="brand-text">
    
    </div>
  </section>



  <!-- footer section  -->
  <section id="footer">
    <div id="first">


      <div>
        <img src="./img/small logo.jpg">
        <p>Subscribe to email alerts.We promise not to spam your inbox.</p>
        <form id="border">
          <input id="Email" type="email" placeholder="Email Address">
          <button>SUBSCRIBE</button>
        </form>

        <div id="second">
          <div>
            <i class="fa fa-facebook"></i>
          </div>
          <div>
            <i class="fa fa-twitter"></i>
          </div>
          <div><i class="fa fa-instagram"></i></div>
          <div><i class="fa fa-youtube-play"></i></i></div>
          <div><i class="fa fa-linkedin"></i></div>

        </div>

      </div>



      <div id="left">
        <h5>SHOP</h5>
        <p>True Wireless Earbuds</p>
        <p>Wireless Headphones</p>
        <p>Smart Watches</p>
        
      </div>
      <div>
        <h5>HELP</h5>
        <p>Track Your Order</p>
        <p>Warranty & Support</p>
        <p>Return Policy</p>
        <p>Service Centers</p>
        
      </div>
      <div>
        <h5>COMPANY</h5>
       
        <p>News</p>
        
        <p>Careers</p>
       
        <p>Terms of Service</p>
        <p>Privacy Policy</p>
       
      </div>
    </div>

    <div id="card_f">
      <div>
        <img
          src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Fotter_payment_icn_2_900x_aff68517-98f4-4a82-9aee-2405cea66251_350x.png?v=1650262054">
      </div>

      
    </div>
    <div id="rights">
      <p>© 2023 All Rights Reserved.</p>
    </div>
  </section>




</body>

</html>

<!-- <script>
  
</script> -->

<script src="index.js"></script>
<script src="product.js"></script>
<script src="cart.js"></script>
<script src="navbar.js"></script>
<script src="footer.js"></script>



    <?php
}

else{
    header("Location: index.php");
    exit();
}
?>
        