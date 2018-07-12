import React, {Component} from 'react';

const CardPile = (props) => (
  <div>{`CardPile rendered`}</div>
)

const Card = (props) => (
  <div>{`Card rendered`}</div>
)

const Noble = (props) => (
  <div>{`Noble rendered`}</div>
)



class Player extends Component {
  constructor(props) {
    super(props);
  }

}

class Splendor extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <div>{`Splendor rendered`}</div>
    )
  }
};


export default Splendor;