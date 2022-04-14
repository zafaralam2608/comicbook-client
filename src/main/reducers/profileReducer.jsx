import { LOAD_PROFILE_FAILURE, LOAD_PROFILE_PENDING, LOAD_PROFILE_SUCCESS } from '../constants/actionTypes';

const initialState = {
  loading: false,
  id: '',
  name: '',
  alias: '',
  base: '',
  debutIn: '',
  debutOn: '',
  links: {
    official: '', wikipedia: '', instagram: '', twitter: '', facebook: '',
  },
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
        if (profile.links) {
          finalState.links = profile.links;
        }
      }
      break;
    }
    default:
      break;
  }

  return finalState;
};

export default profileReducer;
