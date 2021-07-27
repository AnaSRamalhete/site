<?php
    include_once 'dbh.inc.php';
?>

<!DOCTYPE HTML>
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>Ana's Space</title>
    <!-- My styles css files -->
    <link rel="stylesheet" type="text/css" href="style/styles.css">
    <link rel="stylesheet" type="text/css" href="style/styles_timeline.css">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width; initial-scale=1.0; minimum-scale=1.0;">
    <!-- For contact links -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <!-- Font-->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap" rel="stylesheet">
</head>

<!--  -->
<!-- Body Section -->
<!--  -->

<body>
    
    
    <div class="main-div">
        <!-- -->
        <!-- Animation Section -->
        <!-- -->
        <canvas class="animation-canvas"></canvas>

        <!-- -->
        <!-- NavBar section-->
        <!-- -->

        <nav class="navbar">
            <div class="logo">Ana's Space</div>
            <ul class="nav_linkS">
                <a class="navbar_link nav-link-active" id="about" href="#sectionAbout">About Me</a>
                <a class="navbar_link" id="timeline" href="#sectionTimeline">Career's Path</a>
                <a class="navbar_link" id="projects">Projects</a>
            </ul>
            <div class="burguer">
                <div class="burguer-line1"></div>
                <div class="burguer-line2"></div>
                <div class="burguer-line3"></div>
            </div>
        </nav>

