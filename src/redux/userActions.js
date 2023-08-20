export const SET_FIRST_NAME = 'SET_FIRST_NAME';
export const SET_LAST_NAME = 'SET_LAST_NAME';
export const SET_EMAIL = 'SET_EMAIL';

export const setFirstName = (name) => ({
  type: SET_FIRST_NAME,
  payload: name,
});

export const setLastName = (name) => ({
  type: SET_LAST_NAME,
  payload: name,
});

export const setEmail = (email) => ({
  type: SET_EMAIL,
  payload: email,
});
