<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tarps and Canvas</title>
  <link rel="stylesheet" type="text/css" href="stylesheet.css">
  <link rel="shortcut icon" type="image/png" href="img/favicon.jpg">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"/>
</head>
<body>
  <div id="wrapper">
  <!--<button id="back-to-top" class="btnEntrance" style="display: block;"><i class="fas fa-angle-double-up"></i></button>-->
  <button id="back-to-top"><i class="fas fa-angle-double-up"></i></button>
  <header>
    <div class="header_inner flex_div">
      <div id="logo"><a href="index.php"><img src="img/logo01_sm.png" alt=""></a></div>
      <nav>
        <ul class="nav_links">
              <li class="<?php if ($page=='home') {echo 'active';} ?>"><a href="index.php">Home</a>
            </li>
              <li class="<?php if ($page=='about_us') {echo 'active';} ?>"><a href="about.php">About Us</a></li>
              <li class="<?php if ($page=='services') {echo 'active';} ?>"><a href="designs.php">Designs and Material</a></li>
              <li class="<?php if ($page=='services') {echo 'active';} ?>"><a href="products.php">Products</a></li>
              <li class="<?php if ($page=='contacts') {echo 'active';} ?>"><a href="contacts.php">Contacts</a></li>
          </ul>
          <div class="burger">
              <div class="line1"></div>
              <div class="line2"></div>
              <div class="line3"></div>
          </div>
      </nav>
    </div>
    </header>