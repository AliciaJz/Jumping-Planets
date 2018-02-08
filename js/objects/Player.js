function Player() {
  this.x = 300;
  this.y = 300;
  this.width = 100;
  this.height = 100;
  this.score = 0;
  this.img = new Image();
  this.img.src = images.ufo;
  this.audio = new Audio(
    "sounds/zapsplat_science_fiction_ufo_pass_fast_cartoon_like_001.mp3"
  );
  this.img.onload = function() {
    this.draw();
  }.bind(this);
  this.draw = function() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  };
}

Player.prototype.checkClickPlanet = function(planet) {
  return (
    this.x < planet.posX + planet.width / 2 &&
    this.x + this.width / 2 > planet.posX &&
    this.y < planet.posY + planet.height / 2 &&
    this.y + this.height / 2 > planet.posY
  );

  //   if ((planet.posX < (this.x + (this.width/2)) < planet.posX + planet.width) &&
  //   (planet.posY < (this.y + (this.height/2)) < planet.posY + planet.height)){
  //     console.log("estas clickeando dentro de un planeta")
  //   }else{
  //     console.log("no clickeaste en un planeta")
  //   }
  //   console.log(this)
};
