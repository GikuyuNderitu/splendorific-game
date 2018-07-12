import React, {Component} from 'react';
import Splendor from './games/Splendor';
// Consider opening game in a window component such as 
// <Window>{loaded game}</Window>
// class Window extends Component {

// }

export default class Game extends Component {
  render() {
    return (
      <div>
        {this.props.type === 'splendor' && <Splendor />}
      </div>
    )
  }
};
