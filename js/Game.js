function Game() {
  this.board = new Board();
  this.planets = [];
  this.sequence = [];
  this.player1 = new Player();
  this.player2 = new Player();
  this.audio = new Audio("sounds/03_Spaceship_Out_of_Control.mp3");
}
