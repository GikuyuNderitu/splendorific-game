class Player {
  constructor(id='', name='', ws, game) {
    this.id = id;
    this.name = name;
    this.ws = ws;
    this.game = game;
    this.points = 0;
    this.nobles = [];
    this.cards = {
      white: 0,
      blue: 0,
      green: 0,
      red: 0,
      black: 0
    };
    this.tokens = {
      white: 0,
      blue: 0,
      green: 0,
      red: 0,
      black: 0,
      gold: 0
    };
    this.baseSpendingPower = {
      white: 0,
      blue: 0,
      green: 0,
      red: 0,
      black: 0,
      gold: 0
    };
  }

  emitTakeTokens() {

  }

  receiveTokens() {

  }

  receiveNoble(noble) {
    this.nobles.push(noble);
    this.points += noble.value;
  }

  updateState(state) {

  }
}

module.exports = Player;