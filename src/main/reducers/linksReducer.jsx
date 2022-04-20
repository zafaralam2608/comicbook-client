import { LOAD_LINKS_FAILURE, LOAD_LINKS_PENDING, LOAD_LINKS_SUCCESS } from '../constants/actionTypes';

const initialState = {
  linksLoading: false,
  official: '',
  wikipedia: '',
  instagram: '',
  twitter: '',
  facebook: '',
};

const albumReducer = (state = initialState, action) => {
  const finalState = { ...state };

  switch (action.type) {
    case LOAD_LINKS_PENDING: {
      finalState.linksLoading = true;
      break;
    }
    case LOAD_LINKS_FAILURE: {
      finalState.linksLoading = false;
      finalState.profiles = [];
      break;
    }
    case LOAD_LINKS_SUCCESS: {
      finalState.linksLoading = false;
      if (action.payload) {
        const links = action.payload;
        finalState.official = links.official || '';
        finalState.wikipedia = links.wikipedia || '';
        finalState.instagram = links.instagram || '';
        finalState.twitter = links.twitter || '';
        finalState.facebook = links.facebook || '';
      }
      break;
    }
    default:
      break;
  }

  return finalState;
};

export default albumReducer;
