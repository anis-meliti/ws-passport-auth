import axios from 'axios';
import {
  REGISTER_USER,
  REGISTER_FAIL,
  REGISTER_SUCCESS
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
