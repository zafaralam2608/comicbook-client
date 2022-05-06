import { combineReducers } from 'redux-immutable';
import albumReducer from './albumReducer';
import profileReducer from './profileReducer';
import linksReducer from './linksReducer';
import bioReducer from './bioReducer';
import abilitiesReducer from './abilitiesReducer';

const rootReducer = combineReducers({
  album: albumReducer,
  profile: profileReducer,
  links: linksReducer,
  bio: bioReducer,
  abilities: abilitiesReducer,
});

export default rootReducer;
