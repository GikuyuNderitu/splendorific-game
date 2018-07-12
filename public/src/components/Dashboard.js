import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';
import ButtonBase from 'material-ui/ButtonBase';
import Button from 'material-ui/Button';
import AddCircle from 'material-ui-icons/AddCircle';
import Dialog, {DialogTitle} from 'material-ui/Dialog';
import Select from 'material-ui/Select';
import {FormControl} from 'material-ui/Form';
import Input, {InputLabel} from 'material-ui/Input';
import Menu, {MenuItem} from 'material-ui/Menu';

import {handleGameCreateAttempt} from '../state/actions/gameActions';
import './Dashboard.css';
import { establishConnection, handleDashboardConnectionAttempt } from '../state/actions/dashboardActions';

const CreateRoomToggle = (props) => (
  <ButtonBase
    focusRipple
    onClick={props.toggleDialog} >
     <div>
        <AddCircle />
        <p>{`Create Room!`}</p>
     </div>
  </ButtonBase>
)

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      game: ''
    };

    this.toggleDialog = this.toggleDialog.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.createRoom = this.createRoom.bind(this);
  }

  componentDidMount() {
    this.props.establishConnection()
  }

  toggleDialog() {
    const {open} = this.state.open;
    this.setState({open: !open});
  }

  handleClose() {
    this.setState({open: false});
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  createRoom() {
    const {game} = this.state;
    if(game.trim() === '') return;

    this.props.createGame(game);
    this.handleClose()
  }

  render() {
    return (
      this.props.isAuthenticated ?
      <div className="Dashboard">
        {'Dashboard rendered'}
        <CreateRoomToggle
          toggleDialog={this.toggleDialog} />

        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          fullWidth={true}
          maxWidth={'md'} >
          <DialogTitle>{`Create a New Game`}</DialogTitle>
          <FormControl >
            <InputLabel htmlFor="create-game">Game</InputLabel>
            <Select
              value={this.state.game}
              onChange={this.handleChange}
              input={<Input name="game" id="create-game" />}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={'splendor'}>Splendor</MenuItem>
            </Select>

            <Button
              raised
              onClick={this.createRoom}>
              {`Start Game!`}
            </Button>
          </FormControl>
        </Dialog>        
      </div> : <Redirect to="/" />
    )
  }
}

const mStP = ({userState}) => ({
  isAuthenticated: userState.isAuthenticated
})

const mDtP = dispatch => ({
  createGame(game) {
    dispatch(handleGameCreateAttempt(game));
  },
  establishConnection() {
    dispatch(handleDashboardConnectionAttempt());
  }
})

export default connect(mStP, mDtP)(Dashboard);