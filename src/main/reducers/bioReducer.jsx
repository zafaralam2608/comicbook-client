import { bio } from '../constants/actionTypes';

const initialState = {
  bioLoading: false,
  bioContent: '',
};

const bioReducer = (state = initialState, action) => {
  const finalState = { ...state };

  switch (action.type) {
    case bio.pending: {
      finalState.bioLoading = true;
      break;
    }
    case bio.failure: {
      finalState.bioLoading = false;
      break;
    }
    case bio.success: {
      finalState.bioLoading = false;
      if (action.payload) {
        finalState.bioContent = action.payload;
      }
      break;
    }
    default:
      break;
  }

  return finalState;
};

export default bioReducer;
