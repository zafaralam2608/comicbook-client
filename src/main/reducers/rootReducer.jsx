import { combineReducers } from 'redux-immutable';
import albumReducer from './albumReducer';
import profileReducer from './profileReducer';
import linksReducer from './linksReducer';

const rootReducer = combineReducers({
  album: albumReducer,
  profile: profileReducer,
  links: linksReducer,
});

export default rootReducer;
