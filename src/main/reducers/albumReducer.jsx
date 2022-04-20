import { LOAD_PROFILES_FAILURE, LOAD_PROFILES_PENDING, LOAD_PROFILES_SUCCESS } from '../constants/actionTypes';

const initialState = {
  profiles: [],
  profilesLoading: false,
};

const albumReducer = (state = initialState, action) => {
  const finalState = { ...state };

  switch (action.type) {
    case LOAD_PROFILES_PENDING: {
      finalState.profilesLoading = true;
      break;
    }
    case LOAD_PROFILES_FAILURE: {
      finalState.profilesLoading = false;
      finalState.profiles = [];
      break;
    }
    case LOAD_PROFILES_SUCCESS: {
      finalState.profilesLoading = false;
      action.payload.forEach((profile) => {
        const { id, name, alias } = profile;
        finalState.profiles.push({ id, name, alias });
      });
      break;
    }
    default:
      break;
  }

  return finalState;
};

export default albumReducer;
