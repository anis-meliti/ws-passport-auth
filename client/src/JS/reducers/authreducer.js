import {
  REGISTER_USER,
  REGISTER_FAIL,
  REGISTER_SUCCESS
} from '../constants/actions-types';

const initialState = {
  isLoading: false,
  errors: [],
  user: null
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER_USER:
      return {
        ...state,
        isLoading: true
      };
    case REGISTER_FAIL:
      return {
        ...state,
        isLoading: false,
        errors: payload
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: payload
      };
    default:
      return state;
  }
};

export default authReducer;
