<?php
    include_once 'header.php';
?>


<!-- -->
<!-- About Me Section -->
<!-- -->

<a name="sectionAbout" ></a>
<section class="main-section" id='about'>

    <div class="profile-pic">
        <img src="images/profile.png" alt="">
    </div>

    <div class="main-section-container">
        <div class="main-section-container-text">
            <h1 class="main-title">
                Hello! I am Ana Ramalhete,
            </h1>

            <h2 class="main-text">
                I'm an Engineering Physics student at Técnico Lisboa.
            </h2>
        </div>
    </div>
</section>


<!-- -->
<!-- Education Section -->
<!-- -->

<a name="sectionTimeline" ></a>
<section class="section-education" id="timeline">
    <div class="timeline-list">

        <!-- <div class="timeline-item">
            <div class="timeline-item-dot"></div>
            <div class="timeline-item-date">2015</div>
            <div class="timeline-item-content">
                <h3>Biological Enginnering</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
        </div> -->

        <?php
            while ($row = pg_fetch_row($resultTimeline)) {
            ?>
                <div class="timeline-item">
                    <div class="timeline-item-dot"></div>
                    <div class="timeline-item-date"><?php echo $row[0]; ?></div>
                    <div class="timeline-item-content">
                        <h3><?php echo $row[1]; ?></h3>
                        <p><?php echo $row[2]; ?> </p>
                    </div>
                </div>
            <?php
            }
        ?>
        
    </div>
</section>

<?php
    include_once 'footer.php'
?>
