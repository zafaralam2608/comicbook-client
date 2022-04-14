import { combineReducers } from 'redux-immutable';
import albumReducer from './albumReducer';
import profileReducer from './profileReducer';
import photoReducer from './photoReducer';

const rootReducer = combineReducers({
  album: albumReducer,
  profile: profileReducer,
  photo: photoReducer,
});

export default rootReducer;
