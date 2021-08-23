function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
  


class GridCell {
    constructor(i, j, w, empty, p) {
        this.i = i;
        this.j = j;
        this.x = i * w;
        this.y = j * w;
        this.w = w;

        this.empty = empty;
        this.canvas = p;
    }

    show(){
        this.canvas.stroke(0);
        this.canvas.fill(255);
        this.canvas.rect(this.x, this.y, this.w, this.w);
    }
    resize(new_w){
        this.x = this.i * new_w;
        this.y = this.j * new_w;
        this.w = new_w;
    }
}

class Agent extends GridCell {
    constructor(i, j, w, type, threshold, adapt, p) {
      super(i, j, w, false, p);

      this.Type = type;
      this.threshold = threshold;
      this.tMinority = 0
      this.tMajority = 0
      this.adapt = adapt
    }
    
    adaptation() {
        if (this.tMinority >= this.adapt && this.threshold >1 && this.adapt!=0){
            this.threshold -=1
        } else if (this.tMajority >= this.adapt && this.threshold <8 && this.adapt!=0){
            this.threshold +=1
        }
    }

    show(){
        this.canvas.stroke(0);
        if (this.Type === 1){
            this.canvas.fill(255,0,0);
        }
        else {
            this.canvas.fill(0,0,255);
        }
        this.canvas.rect(this.x, this.y, this.w, this.w);
    }
}

class Grid{
    constructor(rows, cols, w, vMinimum, vMaximum, fractionAdaptive, pEmpty, pPop1, p){
        this.rows = rows;
        this.cols = cols;
        console.log("this cols and rows")
        console.log(this.rows)
        console.log(this.cols)
        this.population = new Array(this.cols);
        this.canvas = p

        for (var i = 0; i < this.population.length; i++) {
            this.population[i] = new Array(this.rows);
        }

        for (var i = 0; i < this.cols; i++) {
            for (var j = 0; j < this.rows; j++) {
                console.log("inside forfor")
                console.log(i, j)
                var randNum = Math.random();
                if(randNum<pEmpty){
                    this.population[i][j] = new GridCell(i, j, w, true, p);
                    console.log("created an empty space: ", randNum, pEmpty, randNum<pEmpty)
                }
                else{
                    if(Math.random()<pPop1){
                        var thld = getRandomInt(vMinimum, vMaximum);
                        if(Math.random()<fractionAdaptive){
                            var adapt = 3;
                        }
                        else{
                            var adapt = 0;
                        }
                        
                        this.population[i][j] = new Agent(i, j, w, 1, thld, adapt, p);
                        console.log("created an agent 1")
                    }
                    else{
                        var thld = getRandomInt(vMinimum, vMaximum);
                        if(Math.random()<fractionAdaptive){
                            var adapt = 3;
                        }
                        else{
                            var adapt = 0;
                        }
                        
                        this.population[i][j] = new Agent(i, j, w, 2, thld, adapt, p);
                        console.log("created an agent 2")
                    }
                    
                }
                
            }
        }
    }

    refresh(rows, cols, w, vMinimum, vMaximum, fractionAdaptive, pEmpty, pPop1){
        this.rows = rows;
        this.cols = cols;
        console.log("this cols and rows")
        console.log(this.rows)
        console.log(this.cols)
        this.population = new Array(this.cols);

        for (var i = 0; i < this.population.length; i++) {
            this.population[i] = new Array(this.rows);
        }

        for (var i = 0; i < this.cols; i++) {
            for (var j = 0; j < this.rows; j++) {
                console.log("inside forfor")
                console.log(i, j)
                var randNum = Math.random();
                if(randNum<pEmpty){
                    this.population[i][j] = new GridCell(i, j, w, true, this.canvas);
                    console.log("created an empty space: ", randNum, pEmpty, randNum<pEmpty)
                }
                else{
                    if(Math.random()<pPop1){
                        var thld = getRandomInt(vMinimum, vMaximum);
                        if(Math.random()<fractionAdaptive){
                            var adapt = 3;
                        }
                        else{
                            var adapt = 0;
                        }
                        
                        this.population[i][j] = new Agent(i, j, w, 1, thld, adapt, this.canvas);
                        console.log("created an agent 1")
                    }
                    else{
                        var thld = getRandomInt(vMinimum, vMaximum);
                        if(Math.random()<fractionAdaptive){
                            var adapt = 3;
                        }
                        else{
                            var adapt = 0;
                        }
                        
                        this.population[i][j] = new Agent(i, j, w, 2, thld, adapt, this.canvas);
                        console.log("created an agent 2")
                    }
                    
                }
                
            }
        }

        // this.canvas.draw();
    }
}
  