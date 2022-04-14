import { combineReducers } from 'redux-immutable';
import albumReducer from './albumReducer';
import profileReducer from './profileReducer';

const rootReducer = combineReducers({
  album: albumReducer,
  profile: profileReducer,
});

export default rootReducer;
