import axios from 'axios';
import {
  REGISTER_USER,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  LOGIN_USER,
  LOGIN_FAIL,
  LOGIN_SUCCESS
} from '../constants/actions-types';

export const register = user => async dispatch => {
  dispatch({
    type: REGISTER_USER
  });
  try {
    const registerResult = await axios.post('/register', user);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: registerResult.data
    });
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
      payload: error.response.data.errors
    });
  }
};

export const login = userCredential => async dispatch => {
  dispatch({
    type: LOGIN_USER
  });
  try {
    const loginResult = await axios.post('/login', userCredential);
    localStorage.setItem('token', loginResult.data.token);
    dispatch({
      type: LOGIN_SUCCESS
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response.data.errors
    });
  }
};
