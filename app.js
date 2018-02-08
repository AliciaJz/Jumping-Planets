var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var interval;
var frames = 0;
var myGame;
var theme;
var foley;
var button;

var images = {
  name: "images/JP.png",
  bg: "images/background.png",
  ufo: "images/UFOCostume.png",
  planets: "images/planet.png",
  start: "images/empty_button.png",
  // onePlayer: "images/",
  // twoPlayers: "images/",
  // level: "",
  // normal: "",
  // med: "",
  // high: "",
  // ready: "",
  // three: "",
  // two: "",
  // one: "",
  // go: ""
};



var arrX = [25, 110, 195, 280, 365, 450, 535, 620, 705, 790];
var arrY = [45, 130, 215, 300, 385, 470];
var pos = [];
function generatePlanets() {
  var p;
  for (i=0; i<6; i++){
    var x = Math.floor(Math.random() * arrX.length);
    var y = Math.floor(Math.random() * arrY.length);
    myGame.planets.push(new Planet(arrX[x],arrY[y], i));
    arrX.splice(x,1);
    arrY.slice(y,1);
  }
}

function startGame() {
  frames = 0; 
  myGame = new Game();
  console.log(myGame);
  generatePlanets();
  interval = setInterval(updateGame, 1000 / 60);
}

function updateGame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  myGame.board.draw();
  if (myGame.planets.length > 0) {
    for (j=0; j<myGame.planets.length; j++){
      myGame.planets[j].draw();
      if(frames < 90){
        myGame.planets[j].drawText();
      }
    }
  }
  myGame.player1.draw();
frames++;
console.log(frames);
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

addEventListener("click", function(e){
  if (myGame.planets.arrX = )
    console.log(e);
    e.clientX = ;
    e.clientY = ;
});

addEventListener("mousemove", function(e) {
  myGame.player1.x = e.clientX - 60;
  myGame.player1.y = e.clientY - 50;
});

startGame();
