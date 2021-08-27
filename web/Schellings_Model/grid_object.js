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
        this.population = new Array(this.cols);
        this.canvas = p

        for (var i = 0; i < this.population.length; i++) {
            this.population[i] = new Array(this.rows);
        }

        for (var i = 0; i < this.cols; i++) {
            for (var j = 0; j < this.rows; j++) {
                var randNum = Math.random();
                if(randNum<pEmpty){
                    this.population[i][j] = new GridCell(i, j, w, true, p);
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
                    }
                    
                }
                
            }
        }
    }

    refresh(rows, cols, w, vMinimum, vMaximum, fractionAdaptive, pEmpty, pPop1){
        this.rows = rows;
        this.cols = cols;
        this.population = new Array(this.cols);

        for (var i = 0; i < this.population.length; i++) {
            this.population[i] = new Array(this.rows);
        }

        for (var i = 0; i < this.cols; i++) {
            for (var j = 0; j < this.rows; j++) {
                var randNum = Math.random();
                if(randNum<pEmpty){
                    this.population[i][j] = new GridCell(i, j, w, true, this.canvas);
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
                    }
                    
                }
                
            }
        }
    }

    getEmptyPlaces(){
        var emptyPlaces = [];

        for (var i = 0; i < this.cols; i++) {
            for (var j = 0; j < this.rows; j++) {
                if( !(this.population[i][j] instanceof Agent) ){
                    emptyPlaces.push(this.population[i][j]);
                }
            }
        }

        return emptyPlaces;
    }

    countNeighbours(i,j){
        let neighbours=[];

        let startPosX   = (i > 0) ? i-1 : i;
        let endPosX     = (i < this.cols-1) ? i+1 : i;

        let startPosY   = (j > 0) ? j-1 : j;
        let endPosY     = (j < this.rows-1) ? j+1 : j;

        console.log(startPosX, endPosX)
        console.log(startPosY, endPosY)

        for (var colNum=startPosX; colNum<=endPosX; colNum++) {
            for (var rowNum=startPosY; rowNum<=endPosY; rowNum++) {
                // All the neighbors will be grid.population[rowNum][colNum]
                if (this.population[colNum][rowNum] instanceof Agent && !(colNum==i && rowNum==j)){
                    neighbours.push(this.population[colNum][rowNum]);
                    console.log("hello", colNum, rowNum);
                }
            }
        }
        var TotalNeighbours = neighbours.length;
        var SameNeighbours = 0;
        var OpositeNeighbours = 0;

        for(var index = 0; index < neighbours.length; index++){
            if((neighbours[index] instanceof Agent) && (neighbours[index].Type == this.population[i][j].Type)){
                SameNeighbours++;   
            }
        }

        OpositeNeighbours = TotalNeighbours - SameNeighbours;
        
        return [TotalNeighbours, SameNeighbours, OpositeNeighbours];
    }

    updateTimesMinoMajo(i,j){
        TotalNeighbours , SameNeighbours, OpositeNeighbours = this.countNeighbours(i, j);

        if(this.population[i][j] instanceof Agent && TotalNeighbours>0){
            this.population[i][j].adaptation();
            percentagem = SameNeighbours/TotalNeighbours;

            if(percentagem >= 0.5){
                this.population[i][j].tMinority = 0
                this.population[i][j].tMajority += 1
            } else if(percentagem < 0.5){
                this.population[i][j].tMinority += 1
                this.population[i][j].tMajority = 0
            }
        }
        
    }
}
  