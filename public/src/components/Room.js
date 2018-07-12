import React, {Component} from 'react';
import Game from './Game';

export default class Room extends Component {
  constructor(props) {
    super(props);

    const {match} = props;

    this.state = {
      pageId: match.params.id
    }
  }
  render() {
    return (
      <div className="Room">
        {this.state.pageId}
        <div className="Room-board">
          <Game type="splendor" />
        </div>
        <div className="Room-chat">
          {'Room Chat Rendered'}
        </div>
      </div>
    )
  }
};
