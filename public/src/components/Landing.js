import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import Tabs, { Tab } from 'material-ui/Tabs';
import { 
  handleLoginAttempt,
  handleRegisterAttempt
} from '../state/actions/userActions';

import './Landing.css';
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange(key) {
    return (e) => {
      this.setState({
        [key]: e.target.value
      });
    }
  }

  handleSubmit(e) {
    
  }

  render() {
    return (
      <div className="Form-container">
        <form className="Form">
          <TextField
            margin="normal"
            label="Email"
            type="email"
            onChange={(e) => this.handleChange('email')(e)}
            value={this.state.email} />

          <TextField
            margin="normal"
            label="Password"
            inputProps={{type:"password"}}
            onChange={(e) => this.handleChange('password')(e)}
            value={this.state.password} />
          <Button raised onClick={e => this.handleSubmit(e)}>Login!</Button>
        </form>
      </div>
    )
  }
}

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: '',
      email: '',
      password: ''
    }
  }

  initialState() {
    return {
      displayName: '',
      email: '',
      password: ''
    }
  }

  handleChange(key) {
    return (e) => {
      this.setState({
        [key]: e.target.value
      });
    }
  }

  handleSubmit(e) {
    this.props.register(this.state);
    this.clearState()
  }

  clearState() {
    this.setState(this.initialState());
  }

  render() {
    return (
      <div className="Form-container">
        <form className="Form">
          <TextField
            margin="normal"
            label="Email"
            inputProps={{type:"email"}}
            onChange={(e) => this.handleChange('email')(e)}
            value={this.state.email} />

          <TextField
            margin="normal"
            label="Display Name"
            inputProps={{type: 'text'}}
            onChange={(e) => this.handleChange('displayName')(e)}
            value={this.state.displayName} />

          <TextField
            margin="normal"
            label="Password"
            inputProps={{type:"password"}}
            onChange={(e) => this.handleChange('password')(e)}
            value={this.state.password} />
          <Button raised onClick={e => this.handleSubmit(e)}>Register!</Button>
        </form>
      </div>
    )
  }
}

const userStatePropsMap = ({userState}) => ({
  user: userState.user,
  isFetching: userState.isFetching,
  isAuthenticated: userState.isAuthenticated,
  authError: userState.authError
})

const userStateDispatchMap = dispatch => ({
  login(payload) {
    dispatch(handleLoginAttempt(payload));
  },
  register(payload) {
    dispatch(handleRegisterAttempt(payload));
  }
})

class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tab: 0
    }
  }

  render() {
    const {tab} = this.state;
    return (
      !this.props.isAuthenticated ?
      <div className="Landing-container">
        <Paper>
          <Tabs
            value={this.state.tab}
            onChange={(e, tab) => this.setState({tab})}
            indicatorColor="primary"
            textColor="primary"
            centered >

            <Tab label="Login" />
            <Tab label="Register" />
          
          </Tabs>
        </Paper>

        {tab === 0 && <Login login={this.props.login} />}
        {tab === 1 && <Register register={this.props.register} />}
      </div> : <Redirect to="/dashboard" />
    )
  }
}

export default connect(userStatePropsMap, userStateDispatchMap)(Landing)