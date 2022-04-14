import axios from 'axios';
import { LOAD_PHOTO_FAILURE, LOAD_PHOTO_PENDING, LOAD_PHOTO_SUCCESS } from '../constants/actionTypes';

export function getPhotoPending() {
  return {
    type: LOAD_PHOTO_PENDING,
  };
}

export function getPhotoFailure(payload) {
  return {
    type: LOAD_PHOTO_FAILURE,
    payload,
  };
}

export function getPhotoSuccess(payload) {
  return {
    type: LOAD_PHOTO_SUCCESS,
    payload,
  };
}

export const getPhoto = (id) => (
  (dispatch) => {
    dispatch(getPhotoPending());
    return axios.get(`/photo/${id}`)
      .then((response) => {
        dispatch(getPhotoSuccess(response.data));
      })
      .catch((err) => {
        dispatch(getPhotoFailure(err));
      });
  }
);
