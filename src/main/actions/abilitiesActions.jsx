import axios from 'axios';
import { abilities } from '../constants/actionTypes';

export function getAbilitiesPending() {
  return {
    type: abilities.pending,
  };
}

export function getAbilitiesFailure(payload) {
  return {
    type: abilities.failure,
    payload,
  };
}

export function getAbilitiesSuccess(payload) {
  return {
    type: abilities.success,
    payload,
  };
}

export const getAbilities = (id) => (
  (dispatch) => {
    dispatch(getAbilitiesPending());
    return axios.get(`/abilities/${id}`)
      .then((response) => {
        dispatch(getAbilitiesSuccess(response.data));
      })
      .catch((err) => {
        dispatch(getAbilitiesFailure(err));
      });
  }
);
