function Board() {
    this.x = 0;
    this.y = 0;
    this.width = canvas.width;
    this.height = canvas.height;
    this.img = new Image();
    this.img.src = images.bg;
    this.img.onload = function() {
      this.draw();
    }.bind(this);
    this.draw = function() {
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    };
  }