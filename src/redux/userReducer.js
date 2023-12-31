import { SET_FIELD } from './userActions';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  message: '',
};

const contactReducer = (state = initialState, action) => {
  if (action.type === SET_FIELD) {
    return {
      ...state,
      ...action.payload,
    };
  }
  return state;
};

export default contactReducer;
