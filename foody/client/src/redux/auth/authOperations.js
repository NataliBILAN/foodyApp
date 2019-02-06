import axios from 'axios';
import {
  signUpRequest,
  signUpSuccess,
  signUpError,
  signInRequest,
  signInSuccess,
  signInError,
  signOutRequest,
  signOutSuccess,
  refreshUserStart,
  refreshUserSuccess,
} from './authAction';

import { getToken } from './authSelectors';

// axios.defaults.baseURL = 'http://localhost:4040';


export const signUp = credentials => dispatch => {
  dispatch(signUpRequest());

  axios
    .post('http://localhost:4040/auth/signup', credentials)
    .then(({ data }) => dispatch(signUpSuccess(data)))
    // .catch(error => console.log(error))
    .catch(error => dispatch(signUpError(error)));
};

export const signIn = credentials => dispatch => {
  dispatch(signInRequest());

  axios
    .post('http://localhost:4040/auth/signin', credentials)
    .then(({ data }) => dispatch(signInSuccess(data)))
    .catch(error => dispatch(signInError(error)));
};

export const signOut = () => (dispatch, getState) => {
  dispatch(signOutRequest());

  const token = getToken(getState());

  const config = {
    headers: {
      Authorization: token,
    },
  };

  axios
    .post('http://localhost:4040/auth/signout', {}, config)
    .then(() => dispatch(signOutSuccess()));
};

export const refreshCurrentUser = () => (dispatch, getState) => {
  const token = getToken(getState());
  if (!token) return;

  dispatch(refreshUserStart());
  axios
    .get('http://localhost:4040/auth/current', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(({ data }) => dispatch(refreshUserSuccess(data.user)));
};

