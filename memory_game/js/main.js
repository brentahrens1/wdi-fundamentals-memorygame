var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log(cardsInPlay);
var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log(cardTwo);
if (cardsInPlay[0] === cardsInPlay[1]) {
  alert("You found a match");
} else
alert("Sorry, try again");
