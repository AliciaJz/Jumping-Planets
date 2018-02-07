var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var interval;
var frames = 0;
var myGame;

var images = {
  name: "",
  bg: "images/background.png",
  ufo: "images/UFOCostume.png",
  planets: "images/drawn-planets-transparent-pixel-18SM.png",
  start: "images/cursor-2-1-r-512.png",
  onePlayer: "images/cursor-2-1-r-512.png",
  twoPlayers: "images/cursor-2-1-r-512.png",
  level: "",
  normal: "",
  med: "",
  high: "",
  ready: "",
  three: "",
  two: "",
  one: ""
};


function startGame() {
  frames = 0;
  myGame = new Game();
  console.log(myGame)
  myGame.planets.push(new Planet(100,100));
  myGame.planets.push(new Planet(300,100));
  interval = setInterval(updateGame, 1000 / 60);
}

function updateGame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  myGame.board.draw();
  myGame.player1.draw();

  if (myGame.planets.length >0) {
      myGame.planets[0].draw()
      myGame.planets[1].draw()
  }
  //drawPlanets();
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
  myGame.player1.x = e.clientX - 60;
  myGame.player1.y = e.clientY - 50;
  // console.log("coordenadas", e.clientX, e.clientY)
});

startGame();
