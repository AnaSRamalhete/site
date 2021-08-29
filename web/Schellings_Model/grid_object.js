function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
    //The maximum is inclusive and the minimum is inclusive
}
  


// class GridCell {
//     constructor(i, j, w, empty, p) {
//         this.i = i;
//         this.j = j;
//         this.x = i * w;
//         this.y = j * w;
//         this.w = w;

//         this.empty = empty;
//         this.canvas = p;
//     }

//     show(){
//         this.canvas.stroke(0);
//         this.canvas.fill(255);
//         this.canvas.rect(this.x, this.y, this.w, this.w);
//     }

    
// }

class Agent {
    constructor(i, j, w, type, threshold, adapt, p) {
        this.i = i;
        this.j = j;
        this.w = w;
        
        this.canvas = p;

        this.Type = type;
        this.threshold = threshold;
        this.tMinority = 0
        this.tMajority = 0
        this.adapt = adapt
    }

    resize(new_w){
        this.x = this.i * new_w;
        this.y = this.j * new_w;
        this.w = new_w;
    }

    changePosition(newi, newj){
        this.i = newi;
        this.j = newj;
        this.x = newi * w;
        this.y = newj * w;
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

        switch(this.Type){
            case 0:
                this.canvas.fill(255);
                break;
            case 1:
                this.canvas.fill(255,0,0);
                break;
            case 2:
                this.canvas.fill(0,0,255);
                break;
        }
        this.canvas.rect(this.i*this.w, this.j*this.w, this.w, this.w);
    }
}

class Grid{
    constructor(rows, cols, w, vMinimum, vMaximum, fractionAdaptive, pEmpty, pPop1, p){
        this.rows = rows;
        this.cols = cols;
        this.w = w;
        
        this.canvas = p;
        this.totalPopulation = 0;
        this.population = new Array(this.cols);

        for (var i = 0; i < this.population.length; i++) {
            this.population[i] = new Array(this.rows);
        }

        for (var i = 0; i < this.cols; i++) {
            for (var j = 0; j < this.rows; j++) {
                var randNum = Math.random();
                if(randNum<pEmpty){
                    this.population[i][j] = new Agent(i, j, w, 0, 0, 0, p);
                }
                else{

                    this.totalPopulation+=1;

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
        this.w = w;
        this.population = new Array(this.cols);

        for (var i = 0; i < this.population.length; i++) {
            this.population[i] = new Array(this.rows);
        }

        for (var i = 0; i < this.cols; i++) {
            for (var j = 0; j < this.rows; j++) {
                var randNum = Math.random();
                if(randNum<pEmpty){
                    this.population[i][j] = new Agent(i, j, w, 0, 0, 0, this.canvas);
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
                if( this.population[i][j].Type == 0 ){
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

        for (var colNum=startPosX; colNum<=endPosX; colNum++) {
            for (var rowNum=startPosY; rowNum<=endPosY; rowNum++) {
                // All the neighbors will be grid.population[rowNum][colNum]
                if (this.population[colNum][rowNum].Type != 0 && !(colNum==i && rowNum==j)){
                    neighbours.push(this.population[colNum][rowNum]);
                }
            }
        }
        var TotalNeighbours = neighbours.length;
        var SameNeighbours = 0;
        var OpositeNeighbours = 0;

        for(var index = 0; index < neighbours.length; index++){
            if((neighbours[index].Type != 0) && (neighbours[index].Type == this.population[i][j].Type)){
                SameNeighbours++;   
            }
        }

        OpositeNeighbours = TotalNeighbours - SameNeighbours;
        
        return [TotalNeighbours, SameNeighbours, OpositeNeighbours];
    }

    updateTimesMinoMajo(i,j){
        let neighbours = this.countNeighbours(i, j);

        if(this.population[i][j].Type != 0 && neighbours[0]>0){
            this.population[i][j].adaptation();
            var percentagem = neighbours[1]/neighbours[0];
            if(percentagem >= 0.5){
                this.population[i][j].tMinority = 0
                this.population[i][j].tMajority += 1
            } else if(percentagem < 0.5){
                this.population[i][j].tMinority += 1
                this.population[i][j].tMajority = 0
            }
        }  
    }

    replacePosition(i,j){
        if (this.population[i][j].Type!=0){

            this.updateTimesMinoMajo(i,j);

            var emptyCells = this.getEmptyPlaces();
            var random_emptyCell = getRandomInt(0, emptyCells.length - 1);
            
            var iEmptyCell = emptyCells[random_emptyCell].i;
            var jEmptyCell = emptyCells[random_emptyCell].j;

            this.population[iEmptyCell][jEmptyCell] = new Agent (iEmptyCell, jEmptyCell, this.w, this.population[i][j].Type, this.population[i][j].threshold, this.population[i][j].adapt, this.canvas)
            this.population[iEmptyCell][jEmptyCell].tMajority = this.population[i][j].tMajority
            this.population[iEmptyCell][jEmptyCell].tMinority = this.population[i][j].tMinority
            
            this.population[i][j] = new Agent (i, j, this.w, 0, 0, 0, this.canvas)
        }
        else{
            console.log("replacePosition:This agent is empty")
        }
    }

    show(){
        for (var i=0; i<this.cols; i++){
            for(var j=0; j<this.rows; j++){
                this.population[i][j].show();
            }
        }
    }

    PercetageunHappy(){
        var nUnhappy=0; 

        for (var i=0; i<this.cols; i++){
            for(var j=0; j<this.rows; j++){
                if(this.population[i][j].Type !=0 && this.countNeighbours(i, j)[1] < this.population[i][j].threshold){
                    nUnhappy+=1
                } 
            }
        }
        return nUnhappy/this.totalPopulation;
    }

    simStep(){
        for (var i=0; i<this.cols; i++){
            for(var j=0; j<this.rows; j++){
                var neighbors = this.countNeighbours(i, j);
                if( this.population[i][j].Type!=0 &&  neighbors[1] < this.population[i][j].threshold){
                    this.replacePosition(i,j);
                }
            }
        }
        this.canvas.redraw();
    }
}
  