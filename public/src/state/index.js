import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import epics from './epics';
import reducer from './reducers';

const composeMiddleware = window.__REDUX__DEVTOOLS__EXTENSION__COMPOSE__ || compose;
const middleware = composeMiddleware(
  createEpicMiddleware(epics)
)

export default createStore(
  reducer,
  applyMiddleware(middleware)
)