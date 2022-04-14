import axios from 'axios';
import { LOAD_PROFILE_FAILURE, LOAD_PROFILE_PENDING, LOAD_PROFILE_SUCCESS } from '../constants/actionTypes';

export function getProfilePending() {
  return {
    type: LOAD_PROFILE_PENDING,
  };
}

export function getProfileFailure(payload) {
  return {
    type: LOAD_PROFILE_FAILURE,
    payload,
  };
}

export function getProfileSuccess(payload) {
  return {
    type: LOAD_PROFILE_SUCCESS,
    payload,
  };
}

export const getProfile = (id) => (
  (dispatch) => {
    dispatch(getProfilePending());
    return axios.get(`/profile/${id}`)
      .then((response) => {
        dispatch(getProfileSuccess(response.data));
      })
      .catch((err) => {
        dispatch(getProfileFailure(err));
      });
  }
);
