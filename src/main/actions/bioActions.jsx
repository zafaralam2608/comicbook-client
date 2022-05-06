import axios from 'axios';
import { bio } from '../constants/actionTypes';

export function getBioPending() {
  return {
    type: bio.pending,
  };
}

export function getBioFailure(payload) {
  return {
    type: bio.failure,
    payload,
  };
}

export function getBioSuccess(payload) {
  return {
    type: bio.success,
    payload,
  };
}

export const getBio = (id) => (
  (dispatch) => {
    dispatch(getBioPending());
    return axios.get(`/bio/${id}`)
      .then((response) => {
        dispatch(getBioSuccess(response.data));
      })
      .catch((err) => {
        dispatch(getBioFailure(err));
      });
  }
);
