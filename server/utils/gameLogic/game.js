const game = require('../../assets/game.json');

const shuffle = arr => {
  let toSwap, temp;
  for(let i = arr.length - 1; i > 0; i--) {
    toSwap = Math.floor(Math.random() * (i + 1));
    temp = arr[i];
    arr[i] = arr[toSwap];
    arr[toSwap] = temp;
  }
  return arr;
}

const getShuffledCards = () => game.cards.map(cards => shuffle(cards.slice()));

const getShuffledNobles = () => shuffle(game.nobles.slice()).slice(0, 5);

const initTokens = () => game.tokens;

const initializeGame = () => {
  const cards = getShuffledCards();
  const nobles = getShuffledNobles();
  const tokens = initTokens();

  return {cards, nobles, tokens}
}

class Game {
  constructor() {
    const {cards, nobles, tokens} = initializeGame();
    
    this.level1Field = cards[0].slice(0, 4);
    this.level1Pile = cards[0].slice(4);
    this.level2Field = cards[1].slice(0, 4);
    this.level2Pile = cards[1].slice(4);
    this.level3Field = cards[2].slice(0, 4);
    this.level3Pile = cards[2].slice(4);
    this.nobles = nobles;
    this.tokens = tokens;
    this.players = [];
  }

  addPlayer(player) {
    if(this.players.length > 4) {
      return undefined;
    }

    this.players.push(player);

  }

  updateAll() {
    this.players.forEach(player => player.updateState(state))
  }

  
}

module.exports = Game;