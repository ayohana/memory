import { Deck } from "./deck";

export function Game() {
  this.deck = new Deck()
  this.selections = [];
}

Game.prototype.getSelections = function(value) {
  this.selections.push(value);
  if (this.selections.length === 2) {
    console.log("compare selections")
    console.log(this.selections);
  };
}







