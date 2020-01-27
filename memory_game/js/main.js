console.log("Up and running!");

const cards = [
    {
        rank:"queen",
        suit:"hearts",
        cardImage:"images/queen-of-hearts.png"
    },
    {
        rank:"queen",
        suit:"diamonds",
        cardImage:"images/queen-of-diamonds.png"
    },
    {
        rank:"king",
        suit:"hearts",
        cardImage:"images/king-of-hearts.png"
    },
    {
        rank:"king",
        suit:"diamonds",
        cardImage:"images/king-of-diamonds.png"
    }
];


const cardsInPlay = [];

function checkForMatch () {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        console.log("You found a match!");
      } else {
        console.log("Sorry, try again.");
      }
}

function flipCard (cardId) {
    console.log("User has flipped " + cards[cardId].rank + " of " + cards[cardId].suit);
    cardsInPlay.push(cards[cardId].rank);
    console.log(cards[cardId].cardImage)
    checkForMatch();
}

flipCard(0);
flipCard(2);