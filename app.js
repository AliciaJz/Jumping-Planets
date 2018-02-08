var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var interval;
var frames = 0;
var myGame;
var theme;
var foley;
var button;

var images = {
  bg: "images/background.png",
  ufo: "images/UFOCostume.png",
  planets: "images/planet.png"
  // onePlayer: "images/",
  // twoPlayers: "images/",
  // level: "images/",
  // normal: "images/",
  // med: "images/",
  // high: "images/",
  // ready: "images/",
  // three: "images/",
  // two: "images/",
  // one: "images/",
  // go: "images/"
};

var arrX = [25, 110, 195, 280, 365, 450, 535, 620, 705, 790];
var arrY = [45, 130, 215, 300, 385, 470];
var numeroPlanetas = [1, 2, 3, 4, 5, 6];

// document.getElementById("start").onclick = function () {
//   myGame.draw.draw();
//   startGame();
// }

function startScreen() {
  myGame.draw.draw();
}

function generatePlanets() {
  var p;
  for (i = 0; i < 3; i++) {
    var x = Math.floor(Math.random() * arrX.length);
    var y = Math.floor(Math.random() * arrY.length);
    myGame.planets.push(new Planet(arrX[x], arrY[y], i));
    arrX.splice(x, 1);
    arrY.slice(y, 1);
  }
}

function startGame() {
  frames = 0;
  myGame = new Game();
  console.log(myGame);
  generatePlanets();
  // myGame.audio.play();
  interval = setInterval(updateGame, 1000 / 60);
  if(myGame.player1){
    nextLevel();
  } else{
    stopGame();
  }
}

function updateGame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  myGame.board.draw();
  if (myGame.planets.length > 0) {
    for (j = 0; j < myGame.planets.length; j++) {
      myGame.planets[j].draw();
      console.log(myGame.sequence)
      for (r=0; r<myGame.sequence.length;r++){
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

function nextLevel(){
  frames = 0;
  myGame = new Game();
  generatePlanets();
  // myGame.audio.play();
  interval = setInterval(updateGame, 1000 / 60);
}

function stopGame() {
  clearInterval(interval);
  ctx.fillText("GAME OVER", 200, 100);
}

addEventListener("click", function(e) {
  console.log(e);
  for (let z = 0; z < myGame.planets.length; z++) {
    if (myGame.player1.checkClickPlanet(myGame.planets[z])) {
      console.log("Planeta #", myGame.planets[z].number);
      myGame.sequence.push(myGame.planets[z].number);

      for (var t=0; t<myGame.sequence.length;t++){
        if ((t)!=myGame.sequence[t]){
          stopGame();
          break;
        }
      }
      myGame.planets[z].drawText();

    }
  }
});

addEventListener("mousemove", function(e) {
  myGame.player1.x = e.clientX - 60;
  myGame.player1.y = e.clientY - 50;
});

startGame();
