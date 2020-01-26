console.log("Up and running!");

const cards = ["queen","queen","king","king"];
const cardsInPlay = [];

function flipCard (cardId) {
    console.log("User has flipped " + cards[cardId]);
    cardsInPlay.push(cards[cardId]);
}

flipCard(1);

