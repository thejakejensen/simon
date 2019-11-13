export function Game() {
  this.colorArray = ["green", "red", "yellow", "blue"];
  this.currentPattern = [];
  this.userPosition = 0;
  this.userTurn = false;
}
Game.prototype.getNextColor = function () {
  const randomNumber = Math.floor(Math.random() * 4);
  this.currentPattern.push(this.colorArray[randomNumber]);
  return this.currentPattern;
};

Game.prototype.checkUserInput = function (color) {
  if (this.currentPattern[this.userPosition] === color) {
    this.userPosition++;
    if (this.userPosition === this.currentPattern.length) {
      this.userPosition = 0;
      return this.getNextColor();
    } else {
      return true;
    }
  } else {
    return false;
  }
};

Game.prototype.resetGame = function () {
  console.log("RESET!");
  this.currentPattern = [];
  this.userPosition = 0;
};
