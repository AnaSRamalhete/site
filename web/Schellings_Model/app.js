// Variables to use on Schellings model 

const cols=50;
const rows=50;

var valuepPop1 = document.getElementById("valuepPop1");
var valuepEmpty = document.getElementById("valuepEmpty");
var valueminN = document.getElementById("valueminN");
var valuemaxN = document.getElementById("valuemaxN");

var pPopulation1 = document.getElementById("pPopulation1").value/100;   
var pEmpty = document.getElementById("emptySpace").value/100;   
var minNeighbours = document.getElementById("minSameNeighbours").value;   
var maxNeighbours = document.getElementById("maxSameNeighbours").value; 

// Display Values

valuepPop1.innerHTML = pPopulation1*100 + '%';
valuepEmpty.innerHTML = pEmpty*100 + '%';
valueminN.innerHTML = minNeighbours;
valuemaxN.innerHTML = maxNeighbours;

// Update Values 

document.getElementById("pPopulation1").oninput = function(){
    valuepPop1.innerHTML = this.value + '%';
}

document.getElementById("emptySpace").oninput = function(){
    valuepEmpty.innerHTML = this.value + '%';
}

document.getElementById("minSameNeighbours").oninput = function(){
    valueminN.innerHTML = this.value;
}

document.getElementById("maxSameNeighbours").oninput = function(){
    valuemaxN.innerHTML = this.value;
}

var sketchWidth = document.getElementById("p5Container").offsetWidth * 0.9;
var sketchHeight = document.getElementById("p5Container").offsetHeight * 0.9;

var widthSquare = sketchWidth/cols;
var heigthSquare = sketchHeight/rows;
var w = Math.max(widthSquare, heigthSquare);

let grid;


let sketch = function(p) {

    p.setup = function(){
      p.createCanvas(Math.max(sketchWidth, sketchHeight) + 1,Math.max(sketchWidth, sketchHeight)  + 1);
    //   p.createCanvas(sketchWidth+ 1,sketchWidth + 1);
      grid = new Grid(rows, cols, w, minNeighbours, maxNeighbours, 0, pEmpty, pPopulation1, p);
    //   p.noLoop();
    }

    p.windowResized = function(){
        p.clear();
        sketchWidth = document.getElementById("p5Container").offsetWidth * 0.9;
        sketchHeight = document.getElementById("p5Container").offsetHeight * 0.9;
        p.resizeCanvas(Math.max(sketchWidth, sketchHeight) + 1,Math.max(sketchWidth, sketchHeight)  + 1);
        
        widthSquare = sketchWidth/cols;
        heigthSquare = sketchHeight/rows;
        w = Math.max(widthSquare, heigthSquare);

        for (var i=0; i<cols; i++){
            for(var j=0; j<rows; j++){
                grid.population[i][j].resize(w);
            }
        }
    }

    p.draw = function(){
        p.clear()
        widthSquare = sketchWidth/cols;
        heigthSquare = sketchHeight/rows;
        w = Math.min(widthSquare, heigthSquare);

        grid.show();
        
        if(grid.PercetageunHappy()>0.2){
            grid.simStep();
        }
    }
};

new p5(sketch, 'p5Container');

// Event Listener to refresh numbers of simulation

document.getElementById("btnRefresh").addEventListener("click", function() {
    
    pPopulation1 = document.getElementById("pPopulation1").value/100;   
    pEmpty = document.getElementById("emptySpace").value/100;   
    minNeighbours = document.getElementById("minSameNeighbours").value;   
    maxNeighbours = document.getElementById("maxSameNeighbours").value; 

    grid.canvas.clear();

    sketchWidth = document.getElementById("p5Container").offsetWidth * 0.9;
    sketchHeight = document.getElementById("p5Container").offsetHeight * 0.9;
    widthSquare = sketchWidth/cols;
    heigthSquare = sketchHeight/rows;
    w = Math.max(widthSquare, heigthSquare);

    grid.canvas.resizeCanvas(Math.max(sketchWidth, sketchHeight) + 1,Math.max(sketchWidth, sketchHeight)  + 1);

    grid.refresh(rows, cols, w, minNeighbours, maxNeighbours, 0, pEmpty, pPopulation1);
}); 