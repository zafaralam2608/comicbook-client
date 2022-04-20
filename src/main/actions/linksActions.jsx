import axios from 'axios';
import { LOAD_LINKS_FAILURE, LOAD_LINKS_PENDING, LOAD_LINKS_SUCCESS } from '../constants/actionTypes';

export function getLinksPending() {
  return {
    type: LOAD_LINKS_PENDING,
  };
}

export function getLinksFailure(payload) {
  return {
    type: LOAD_LINKS_FAILURE,
    payload,
  };
}

export function getLinksSuccess(payload) {
  return {
    type: LOAD_LINKS_SUCCESS,
    payload,
  };
}

export const getLinks = (id) => (
  (dispatch) => {
    dispatch(getLinksPending());
    return axios.get(`/links/${id}`)
      .then((response) => {
        dispatch(getLinksSuccess(response.data));
      })
      .catch((err) => {
        dispatch(getLinksFailure(err));
      });
  }
);
