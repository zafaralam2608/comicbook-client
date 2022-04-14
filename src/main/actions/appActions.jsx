import axios from 'axios';
import { LOAD_PROFILES_FAILURE, LOAD_PROFILES_PENDING, LOAD_PROFILES_SUCCESS } from '../constants/actionTypes';

export function getProfilesPending() {
  return {
    type: LOAD_PROFILES_PENDING,
  };
}

export function getProfilesFailure(payload) {
  return {
    type: LOAD_PROFILES_FAILURE,
    payload,
  };
}

export function getProfilesSuccess(payload) {
  return {
    type: LOAD_PROFILES_SUCCESS,
    payload,
  };
}

export const getProfiles = () => (
  (dispatch) => {
    dispatch(getProfilesPending());
    return axios.get('/profile')
      .then((response) => {
        dispatch(getProfilesSuccess(response.data));
      })
      .catch((err) => {
        dispatch(getProfilesFailure(err));
      });
  }
);
