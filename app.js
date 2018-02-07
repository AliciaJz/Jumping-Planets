var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var images = {
  name: "",
  bg: "images/background.png",
  ufo: "images/UFOCostume.png",
  planets: "images/drawn-planets-transparent-pixel-18SM.png",
  start: "",
  onePlayer: "",
  twoPlayers: "",
  level: "",
  normal: "",
  med: "",
  high: "",
  ready: "",
  three: "",
  two: "",
  one: ""
};

var board;
var ufo;
var interval;
var planets = [];
var frames = 0;
var ufoSound;

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

function Ufo() {
  this.x = 100;
  this.y = 400;
  this.width = 100;
  this.height = 90;
  this.img = new Image();
  this.img.src = images.ufo;
  this.img.onload = function() {
    this.draw();
  }.bind(this);
  this.draw = function() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  };
}

function Planet() {
  this.x = 0;
  this.y = 0;
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

function firstScreen() {
  board = new Board();
}

function playersScreen() {
  board = new Board();
}

function levelScreen() {
  board = new Board();
}

function startGame() {
  frames = 0;
  //   planets = [new Planet(100,100)];
  board = new Board();
  ufo = new Ufo();
  interval = setInterval(updateGame, 1000 / 60);
}

function updateGame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  board.draw();
  ufo.draw();
  // drawPlanets();
}

function stopGame() {
  clearInterval(interval);
  ctx.fillText("GAME OVER", 200, 100);
}

function drawPlanets() {
  planets.forEach(function(planet) {
    planet.draw();
  });
}

addEventListener("mousemove", function(e) {
  ufo.x = e.clientX - 60;
  ufo.y = e.clientY - 60;
  // console.log("coordenadas", e.clientX, e.clientY)
});

firstScreen();
