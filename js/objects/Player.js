function Player() {
    this.x = 300;
    this.y = 300;
    this.width = 100;
    this.height = 100;
    this.score=0;
    this.img = new Image();
    this.img.src = images.ufo;
    this.img.onload = function() {
      this.draw();
    }.bind(this);
    this.draw = function() {
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    };
  }