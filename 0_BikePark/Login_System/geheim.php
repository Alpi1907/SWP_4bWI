<?php
session_start();
if(!isset($_SESSION["username"])){
  header("Location: index.php");
  exit;
}
 ?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="Website.css">
    <title>BikePark</title>
  </head>
  <body>
    <h1>Top Secret</h1>
    

    <div class="row">
        <div class="row1"><b>BikePark</b></div>
    </div>
    <div class="row2">
        <div class="img">
           <a href="Reservieren.html">
            <img src="BikePark Logo.png" height="500px" width="100%"> 
           </a>
            
            <div class="Texte">
                <h1>Was ist Bike Park?</h1>
                <div class="text">
                    BikePark bietet Ihnen eine Möglichkeit Ihr Fahrrad sicher und einfach abzustellen.
                </div>
                <h1>Wie können Sie BikePark verwenden?</h1>
                <div class="text">
                    Sie können sich auf unserer Website einen Account erstellen. Wenn Sie bei einem unserer BikeParks sind, 
                    melden Sie sich mit Ihrem Account an und scannen Ihren QR-Code.
                    Danach können Sie sich einen beliebigen freien Platz reservieren. 
                    Wenn Sie einen Platz reservieren möchten, klicken sie auf unser Logo.
                </div>
            </div>
        </div>
        <div class="row2_1"></div>
        <div class="buttons ">
          <a href="Startseite.html" class="Abmelden">Abmelden</a>
        </div>
    </div>
    <div class="row3"></div>

    <form action="registrieren.php" method="post"></form>
  </body>
</html>