import {combineEpics} from 'redux-observable';
import * as userEpics from './userEpic';
import * as dashboardEpics from './dashboardEpic';

const objectsToArray = (...objs) => objs.map(obj => Object.keys(obj).map(key => obj[key])).reduce((prev, cur) => prev.concat(cur), []);


const epics = objectsToArray(userEpics, dashboardEpics);

export default combineEpics(
  ...epics
);