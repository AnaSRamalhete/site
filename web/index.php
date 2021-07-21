<!DOCTYPE HTML>
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>Ana's Space</title>
    <!-- My styles css files -->
    <link rel="stylesheet" type="text/css" href="styles.css">
    <link rel="stylesheet" type="text/css" href="styles_timeline.css">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width; initial-scale=1.0; minimum-scale=1.0;">
    <!-- For contact links -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
</head>



<body>
    <div class="main-div">

        <!-- -->
        <!-- NavBar section-->
        <!-- -->

        <nav class="navbar">
            <div class="logo">Ana's Space</div>
            <ul class="nav_linkS">
                <a class="navbar_link nav-link-active" id="about" href="#sectionAbout">About Me</a>
                <a class="navbar_link" id="education" href="#sectionEducation">Education</a>
                <a class="navbar_link" id="volunteer">Volunteer</a>
                <a class="navbar_link" id="activities">Extra Activities</a>
            </ul>
            <div class="burguer">
                <div class="burguer-line1"></div>
                <div class="burguer-line2"></div>
                <div class="burguer-line3"></div>
            </div>
        </nav>


        <!-- -->
        <!-- Central Section -->
        <!-- -->

        <a name="sectionAbout" ></a>
        <section class="main-section" id='about'>

            <div class="profile-pic">
                <img src="images/profile.jpg" alt="">
            </div>

            <div class="main-section-container">
                <div class="main-section-container-text">
                    <h1 class="main-title">
                        Hello! I am Ana Ramalhete,
                    </h1>

                    <h2 class="main-text">
                        I'm a Physics Enginnering student at Técnico Lisboa.
                    </h2>
                </div>
            </div>
        </section>

        <a name="sectionEducation" ></a>
        <section class="section-education" id="education">
            <div class="timeline-list">

                <div class="timeline-item">
                    <div class="timeline-item-dot"></div>
                    <div class="timeline-item-date">2015</div>
                    <div class="timeline-item-content">
                        <h3>Biological Enginnering</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="timeline-item-dot"></div>
                    <div class="timeline-item-date">2016</div>
                    <div class="timeline-item-content">
                        <h3>Physics Enginnering</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="timeline-item-dot"></div>
                    <div class="timeline-item-date">2017</div>
                    <div class="timeline-item-content">
                        <h3>Biological Enginnering</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                </div>
            </div>
        </section>

        

        <!-- -->
        <!-- Footer section-->
        <!-- -->

        <footer class="footer">
            <div class="footer-row">
                <h4>Contacts</h4>
                <div class="social-links">
                        <a href="https://www.facebook.com/profile.php?id=100010159722157" target="_blank"><i class="fab fa-facebook-f"></i></a>
                        <a href="mailto: anasramalhete@gmail.com" target="_blank"><i class="fa fa-envelope"></i></a>
                        <a href="https://www.instagram.com/anasramalhete/" target="_blank"><i class="fab fa-instagram"></i></a>
                        <a href="https://www.linkedin.com/in/ana-sofia-ramalhete-870a43100/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                        <a href="https://github.com/AnaSRamalhete" target="_blank"><i class="fab fa-github"></i></a>
                </div>
            </div>
        </footer>

    </div>

    <!-- -->
    <!-- JavaScripts Section-->
    <!-- -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.0/gsap.min.js"></script>
    <script src="app.js"></script>
</body>
</html>
