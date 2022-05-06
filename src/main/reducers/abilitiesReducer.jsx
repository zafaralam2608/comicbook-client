import { abilities } from '../constants/actionTypes';

const initialState = {
  abilitiesLoading: false,
  abilitiesContent: '',
};

const abilitiesReducer = (state = initialState, action) => {
  const finalState = { ...state };

  switch (action.type) {
    case abilities.pending: {
      finalState.abilitiesLoading = true;
      break;
    }
    case abilities.failure: {
      finalState.abilitiesLoading = false;
      break;
    }
    case abilities.success: {
      finalState.abilitiesLoading = false;
      if (action.payload) {
        finalState.abilitiesContent = action.payload;
      }
      break;
    }
    default:
      break;
  }

  return finalState;
};

export default abilitiesReducer;
