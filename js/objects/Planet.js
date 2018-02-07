function Planet() {
    this.arrX = [25, 110, 195, 280, 365, 450, 535, 620, 705, 790];
    this.arrY = [45, 130, 215, 300, 385, 470];
    this.posX = Math.floor((Math.random() * this.arrX.length));
    this.posY = Math.floor((Math.random() * this.arrY.length));
    this.x = this.arrX[this.posX];
    this.y = this.arrY[this.posY];
    this.width = 85;
    this.height = 85;
    this.img = new Image();
    this.img.src = images.planets;
    this.img.onload = function() {
      this.draw();
    }.bind(this);
    this.draw = function() {
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
      ctx.font = "29pt Bangers";
      ctx.fillStyle = "#920d60";
      ctx.fillText("1", this.x+35, this.y+55)
    };
  }