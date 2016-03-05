import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';
import { beer } from './beer';
import { videogame } from './videogame';
import { passage } from './passage';

const rootReducer = combineReducers({
  routing: routeReducer,
  beer,
  videogame,
  passage
});

export default rootReducer;
