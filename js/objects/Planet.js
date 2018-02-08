function Planet(posX, posY, i) {
    this.posX = posX;
    this.posY = posY;
    this.arrPos = i;
    this.width = 80;
    this.height = 80;
    this.img = new Image();
    this.img.src = images.planets;
    this.number;
    this.img.onload = function() {
      this.draw();
    }.bind(this);
    this.draw = function() {
      ctx.drawImage(this.img, this.posX, this.posY, this.width, this.height);
      ctx.font = "29pt Bangers";
      ctx.fillStyle = "#920d60";
    };
    
    this.drawText = function (){
      ctx.fillText(i+1, this.posX +30, this.posY +50);
      this.number = i+1;
    }
  }

  