import { SET_FIRST_NAME, SET_LAST_NAME, SET_EMAIL } from './userActions';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FIRST_NAME:
      return { ...state, firstName: action.payload };
    case SET_LAST_NAME:
      return { ...state, lastName: action.payload };
    case SET_EMAIL:
      return { ...state, email: action.payload };
    default:
      return state;
  }
};

export default userReducer;
