<!DOCTYPE HTML>
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>Schelling's Model</title>

    <!-- My styles css files -->
    <link rel="stylesheet" type="text/css" href="../style/styles.css">
    <link rel="stylesheet" type="text/css" href="SM_styles.css">

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width; initial-scale=1.0; minimum-scale=1.0;">
    <!-- For contact links -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <!-- Font-->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap" rel="stylesheet">
    
    <!-- ------------ -->
    <!-- Java Scripts -->
    <!-- ------------ -->
    
    <!-- p5*js  -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.min.js" integrity="sha512-N4kV7GkNv7QR7RX9YF/olywyIgIwNvfEe2nZtfyj73HdjCUkAfOBDbcuJ/cTaN04JKRnw1YG1wnUyNKMsNgg3g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
</head>


<body>
    <div class="nav-bar">
        <h1>Schelling's Model of Segregation with Adaptation</h1>
        <a href="https://github.com/AnaSRamalhete/SchellingModelAdaptation" target="_blank">
            <div class="code-btn">
                <h2>Code</h2>
                <i class="fab fa-github"></i>
            </div>
        </a>
    </div>

    <div class="introduction">
        <h1>About the Schelling Model of Segregation</h1>

        <p>In 1969 Thomas Schelling suggested a simple simulation based on individual’s discriminatory behaviour to recreat segregation patterns found in our society.</p>
        <p>The simulation consists of a grid which is set up by randomly placing agents of type 1 and 2 with some cells left empty. 
            At each time step of the simulation, agents dissatisfied with their neighbourhood are repositioned to a random empty place on the grid. 
            In this project the neighbourhood of an agent is considered to be its first nearest squares around it - Moore neighbourhood.</p>
        <p>Each agent has a given threshold (number between 1 and 8), which represents the number of equal neighbors it needs to be happy with its neighbourhood.</p>
        
        <h1>Introducing Adaptive Agents</h1>
        
        <p>In this project, agents are able to adapt to the different neighbourhoods they go through. 
            After being in 3 different neighbourhoods an agent updates its threshold:</p>
        <ul>
            <li>If in the last 3 neighbourhoods the agent has been more times in the majority than in the minority of those neighbourhoods, then its threshold increases (this agent needs more equal neighbours to be happy).</li>
            <li>If in the last 3 neighbourhoods the agent has been more times in the minority than in the majority of those neighbourhoods, then its threshold decreases (this agent needs less equal neighbours to be happy).</li>
        </ul>
    </div>

    <div class="main-hero">

        <!-- ----------------- -->
        <!-- Variables Section -->
        <!-- ----------------- -->

        <div class="var-section">

            <div class="slideContainer">
                <h3>% of Population 1:  <span id="valuepPop1"></span></h3>
                <input type="range" min="1" max="100" value="50" id="pPopulation1" class="slider">
            </div>

            <div class="slideContainer">
                <h3>% of Empty Spaces:  <span id="valuepEmpty"></span></h3>
                <input type="range" min="1" max="100" value="10" id="emptySpace" class="slider">
            </div>

            <div class="slideContainer">
                <h3>Min nº of desired equal Neighbours:  <span id="valueminN"></span></h3>
                <input type="range" min="1" max="8" value="3" id="minSameNeighbours" class="slider">
            </div>

            <div class="slideContainer">
                <h3>Max nº of desired equal Neighbours: <span id="valuemaxN"></span></h3>
                <input type="range" min="1" max="8" value="6" id="maxSameNeighbours" class="slider">
            </div>
            

            <div class="btn-refresh" id="btnRefresh">
                <h3>Refresh</h3>
            </div>

            <div class="legend">
                <div class="GridCell_legend">
                    <div id="square-1"></div>
                    <p> Agent of type 1</p>
                </div>
                <div class="GridCell_legend">
                    <div id="square-2"></div>
                    <p> Agent of type 2</p>
                </div>
                <div class="GridCell_legend">
                    <div id="square-empty"></div>
                    <p> Empty grid cell</p>
                </div>
            </div>
            
        </div>

        <!-- ----------------- -->
        <!-- Grid Section -->
        <!-- ----------------- -->

        <div class="grid-section" id="p5Container">
        </div>
    </div>

    <script src="app.js"></script>
    <script src="grid_object.js"></script>

    
</body>
</html>