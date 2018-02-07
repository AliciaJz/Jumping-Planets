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
  start: "images/",
  onePlayer: "images/",
  twoPlayers: "images/",
  level: "",
  normal: "",
  med: "",
  high: "",
  ready: "",
  three: "",
  two: "",
  one: "",
  go: ""
};

function generatePlanets(){
  var p;
  //cambiar 3 por la cantidad de planetas segun va avanzando
  while(myGame.planets.length < 3){
     p = new Planet();
    myGame.planets.forEach(function(planet){
      if(p.y !== planet.y){
        myGame.planets.push(p);
      }else {
        p = new Planet();
      }
    });
  }
}

function startGame() {
  frames = 0;
  myGame = new Game();
  console.log(myGame)
  generatePlanets();
  interval = setInterval(updateGame, 1000 / 60);
}

function updateGame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  myGame.board.draw();
  if (myGame.planets.length >0) {
      myGame.planets[0].draw()
      myGame.planets[1].draw()
      myGame.planets[2].draw()
  }
  myGame.player1.draw();
}

function stopGame() {
  //clearInterval(interval);
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