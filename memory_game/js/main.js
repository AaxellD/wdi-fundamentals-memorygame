console.log("Up and running!");

const cards = ["queen","queen","king","king"];
const cardsInPlay = [];

let cardOne = cards[0];
let cardTwo = cards[1];
cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

var test = (x) => {
console.log("User flipped " + x);
    if (cardsInPlay[0] === cardsInPlay[1]) {
        alert("You found a match!");
    } else {
        alert("Sorry, try again!");
    }
}

test(cardTwo);