import { LOAD_PROFILE_FAILURE, LOAD_PROFILE_PENDING, LOAD_PROFILE_SUCCESS } from '../constants/actionTypes';

const initialState = {
  profileLoading: false,
  id: '',
  name: '',
  alias: '',
  base: '',
  debutIn: '',
  debutOn: '',
};

const profileReducer = (state = initialState, action) => {
  const finalState = { ...state };

  switch (action.type) {
    case LOAD_PROFILE_PENDING: {
      finalState.loading = true;
      break;
    }
    case LOAD_PROFILE_FAILURE: {
      finalState.loading = false;
      break;
    }
    case LOAD_PROFILE_SUCCESS: {
      finalState.loading = false;
      if (action.payload) {
        const profile = action.payload;
        finalState.id = profile.id;
        finalState.name = profile.name;
        finalState.alias = profile.alias || '---';
        finalState.base = profile.base || '-';
        finalState.debutIn = profile.debutIn || '-';
        finalState.debutOn = profile.debutOn || '-';
      }
      break;
    }
    default:
      break;
  }

  return finalState;
};

export default profileReducer;
