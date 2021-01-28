class paper {
    constructor(x,y){
      this.image = loadImage("paper.png");
    }
  
    display() {
      this.body.position.x = mouseX;
      this.body.position.y = mouseY;
    }
  }