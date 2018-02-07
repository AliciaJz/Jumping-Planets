function Planet(x,y) {
    this.x = x;
    this.y = y;
    this.width = 85;
    this.height = 85;
    this.img = new Image();
    this.img.src = images.planets;
    this.img.onload = function() {
      this.draw();
    }.bind(this);
    this.draw = function() {
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    };
  }