import { LOAD_PHOTO_FAILURE, LOAD_PHOTO_PENDING, LOAD_PHOTO_SUCCESS } from '../constants/actionTypes';

const initialState = {
  image: '',
  imageLoading: false,
};

const albumReducer = (state = initialState, action) => {
  const finalState = { ...state };

  switch (action.type) {
    case LOAD_PHOTO_PENDING: {
      finalState.imageLoading = true;
      break;
    }
    case LOAD_PHOTO_FAILURE: {
      finalState.imageLoading = false;
      finalState.image = [];
      break;
    }
    case LOAD_PHOTO_SUCCESS: {
      finalState.imageLoading = false;
      finalState.image = action.payload;
      break;
    }
    default:
      break;
  }

  return finalState;
};

export default albumReducer;
