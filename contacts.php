<?php $page = 'home'; include 'view/header.php' ?>
<div class="center_it">
    <div class="about head_image">Contact Us</div>
</div>
<main class="main_wrapper">
<form action="contactform.php" method="post" class="form" id="form" novalidate>
                        <fieldset id="contact">
                            <div id="fName" class="form-control">
                                <label for="full-name"></label>
                                <input type="text" name="full_name" id="full_name" placeholder="Full Name">
                                <!-- <div class="errorMessage"></div> -->
                            </div>
                            <div class="form-control">
                                <label for="email"></label>
                                <input type="email" name="email" id="emailBox" placeholder="Email Address">
                                <p id="emailError" class="errorMsg"></p>
                                <!-- <div class="errorMessage"></div> -->
                            </div>
                            <div class="form-control">
                                <label for="contact-number"></label>
                                <input type="tel" name="phoneBox" id="phoneBox" placeholder="Contact Number">
                                <p id="phoneError" class="errorMsg"></p>
                                <!-- <div class="errorMessage"></div> -->
                            </div>
                            <div class="form-control">
                                <label for="subject"></label>
                                <input type="text" name="Subject" id="subject" placeholder="Subject">
                                <!-- <div class="errorMessage"></div> -->
                            </div>
                            <div class="form-control">
                                <label for="message"></label>
                                <textarea name="message" id="message" cols="30" rows="10" placeholder="Message"></textarea>
                                <!-- <div class="errorMessage"></div> -->
                            </div>
                                <input type="submit" value="Submit" class="submit-btn">
                        </fieldset>
                    </form>
                </div>
                <div id="contact-wrapper">
                    <h2>Give us a shout</h2>
                    <p> 
                        <a href="tel:0437436736" class="phone">043 743 6736</a>
                    </p>
                    <p>
                        <a href="mailto:info@tarpsandcanvas.co.za" class="email">info@tarpsandcanvas.co.za</a>
                    </p>
                    <address class="location">Pretoria, South Africa</address>
                </div>
            </div>
        </div>
</main>
<?php include 'view/footer.php' ?>