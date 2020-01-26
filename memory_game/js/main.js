console.log("Up and running!");

const cards = ["queen","queen","king","king"];
const cardsInPlay = [];

function checkForMatch () {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        console.log("You found a match!");
      } else {
        console.log("Sorry, try again.");
      }
}

function flipCard (cardId) {
    console.log("User has flipped " + cards[cardId]);
    cardsInPlay.push(cards[cardId]);
    checkForMatch();

}

flipCard(1);

var taylor = {
    sexy:true,
    age:22
    eyes:brown,
    hairColor:brown
}
