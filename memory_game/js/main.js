/// Lets the us know the script is working.
console.log("Up and running!");

// Object to hold the cards
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

/// Cards that are in play at the moment
const cardsInPlay = [];

// Comparison to check for winning condition
function checkForMatch () {
        //// HAVING TROUBLE HERE??????????? I am not refrencing  //

        if (cardsInPlay[0] === cardsInPlay[1]) {
        console.log("You found a match!");
      } else {
        console.log("Sorry, try again.");
      }
}

// function to flip the cards
function flipCard () {
    var cardId = this.getAttribute('data-id');
    console.log("User has flipped " + cards[cardId].rank + " of " + cards[cardId].suit);
    cardsInPlay.push(cards[cardId].rank);
    console.log(cards[cardId].cardImage)
    this.setAttribute('src',cards[cardId].cardImage);
    //check for 2 cards
    if (cardsInPlay.length>1) {
        checkForMatch();
        cardsInPlay.pop();
        cardsInPlay.pop();
    }
    
}

/// Creates game-board and populates with cards
function createBoard () {
    for (let i=0 ; i<cards.length ; i++) {
        let cardElement = document.createElement('img');
        cardElement.setAttribute('src','images/back.png');
        cardElement.setAttribute('data-id',i);
        cardElement.addEventListener('click',flipCard);
        document.querySelector('#game-board').appendChild(cardElement);
    }
}
/// Invoce the Game
createBoard();