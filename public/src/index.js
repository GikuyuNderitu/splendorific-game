import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles';
import 'rxjs';
import store from './state';

const theme = createMuiTheme();

const Root = () => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme} >
      <App />
    </MuiThemeProvider>
  </Provider>
)

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
