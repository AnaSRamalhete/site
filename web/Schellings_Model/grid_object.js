class GridCell {
    constructor(i, j, w, empty) {
        this.i = i;
        this.j = j;
        this.x = i * w;
        this.y = j * w;
        this.w = w;

        this.empty = empty;
    }
}

class Agent extends GridCell {
    constructor(i, j, w, type, threshold, adapt) {
      super(i, j, w, false);

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
  }
  