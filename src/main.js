import './bootstrap.css';
import './styles.css';
import { Game } from './game';

$(document).ready(function(){
  var game = new Game();
  console.log(game);
  for (var i = 0; i < game.deck.getDeck().length; i++) {
    $(".card-display").append(`<div class="card" id="${i}"></div>`);
  }

  $(".card").click(function(event){
    event.preventDefault();
    var index = this.id;
    var value = game.deck.getCardValue(index);
    game.getSelections(value);
  });
});