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

  function Button() {
    this.x = 300;
    this.y = 230;
    this.width = 290;
    this.height = 150;
    this.img = new Image();
    this.img.src = images.button;
    this.img.onload = function() {
      this.draw();
    }.bind(this);
    this.draw = function() {
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    };
  }