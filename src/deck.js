export function Deck() {
  this.cards = this.generateNewDeck();
}

Deck.prototype.generateNewDeck = function() {
  var values = ["Two", "Two", "Jack", "Jack", "Queen", "Queen", "King", "King", "Ace", "Ace"];
  var len = values.length;
  var index = 0;
  var randomCards = [];

  while (len--) {
    index = Math.floor(Math.random() * len);
   randomCards.push(values[index]);
    values.splice(index, 1);
  }
  return randomCards;
}

Deck.prototype.getDeck = function() {
  return this.cards;
}

Deck.prototype.getCardValue = function(index) {
  return this.cards[index];
}