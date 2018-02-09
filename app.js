var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var interval;
var frames = 0;
var myGame;
var level = 3;
var counter = 0;

var images = {
  bg: "images/background.png",
  ufo: "images/UFOCostume.png",
  planets: "images/planet.png"
};

var arrX = [25, 110, 195, 280, 365, 450, 535, 620, 705, 790];
var arrY = [45, 130, 215, 300, 385, 470];

window.onload = function() {
  myGame.audio.play();
};

document.getElementById("start").onclick = function() {
  startGame();
};
// document.getElementById("unJugador").onclick = function(){
//   startGame();
// }

// document.getElementById("dosJugadores").onclick = function(){
//   startGame();
// }

function generatePlanets() {
  for (i = 0; i < level; i++) {
    var x = Math.floor(Math.random() * arrX.length);
    var y = Math.floor(Math.random() * arrY.length);
    myGame.planets.push(new Planet(arrX[x], arrY[y], i));
    arrX.splice(x, 1);
    arrY.slice(y, 1);
  }
  console.log(myGame.planets);
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
    for (j = 0; j < myGame.planets.length; j++) {
      myGame.planets[j].draw();
      for (r = 0; r < myGame.sequence.length; r++) {
        myGame.planets[myGame.sequence[r]].drawText();
      }
      if (frames < 90) {
        myGame.planets[j].drawText();
      }
    }
  }
  myGame.player1.draw();
  frames++;
}

function stopGame() {
  clearInterval(interval);
  myGame.audio.pause();
  myGame.player1.audio.pause();
  ctx.fillText("GAME OVER", 300, 300);
}

addEventListener("click", function(e) {
  console.log(e);
  for (let z = 0; z < myGame.planets.length; z++) {
    if (myGame.player1.checkClickPlanet(myGame.planets[z])) {
      console.log("Planeta #", myGame.planets[z].number + 1);
      myGame.sequence.push(myGame.planets[z].number);
      for (var t = 0; t < myGame.sequence.length; t++) {
        if (t != myGame.sequence[t]) {
          stopGame();
          break;
        }
      }
      myGame.planets[z].drawText();
    }
  }
  console.log("he acabado");
  if (myGame.planets.length == counter) {
    console.log("yaaaay");
    clearInterval(interval);
    level++;
    counter = 0;
    arrX = [25, 110, 195, 280, 365, 450, 535, 620, 705, 790]
    arrY = [45, 130, 215, 300, 385, 470];
    startGame();
  }
  counter++;
});

addEventListener("mousemove", function(e) {
  myGame.player1.x = e.clientX - 60;
  myGame.player1.y = e.clientY - 50;
  myGame.player1.audio.play();
});