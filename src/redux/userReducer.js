import { SET_FIELD } from './userActions';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  message: '',
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FIELD:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    default:
      return state;
  }
};

export default contactReducer;
