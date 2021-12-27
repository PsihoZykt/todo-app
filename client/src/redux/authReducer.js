import UsersAPI from '../api/UsersAPI';

const SET_USER = 'SET_USER';

const initialState = {
  isAuth: false,
  currentUser: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER: {
      if (state.isAuth === action.isAuth &&
        state.currentUser && state.currentUser.isAuth &&
        state.currentUser.id === action.user.id &&
        state.currentUser.email === action.user.email &&
        state.currentUser.username === action.user.username
      ) {
        return { ...state };
      } else {
        return {
          ...state,
          isAuth: action.isAuth,
          currentUser: action.user
        };
      }
    }
    default:
      return state;
  }
};

export const setUserSession = user => ({
  type: SET_USER,
  isAuth: true,
  user,
});

export const deleteUserSession = () => ({
  type: SET_USER,
  isAuth: false,
  user: null,
});

// Thunks
export const login = (username, email, password) => dispatch => {
  return UsersAPI.login(username, email, password)
    .then((res) => {
      console.log('loginThink', res)
      // if (res.user !== null) {
        dispatch(setUserSession(res.user));
      // } else {
      //   dispatch(deleteUserSession());
      // }
      return res
    })
    .catch((err) =>  err);
};
export const logout = () => dispatch => UsersAPI.logout()
  .then(() => dispatch(deleteUserSession()));


export const createUser = (username, email, password) => dispatch => {
  return UsersAPI.createUser(username, email, password)
    .then(res => {
    return  UsersAPI.login(username, email, password)
        .then((res) => {
          if (res.user !== null) {
            dispatch(setUserSession(res.user));
          } else {
            dispatch(deleteUserSession());
          }
          return res
        });
    })
    .catch(err => {
      return err
      console.log(err);
    });
};
export const checkAuth = () => dispatch => UsersAPI.isAuth()
  .then((res) => {
    console.log('authReducer, checkAuth', res)
    if (res.user !== null) {
      return dispatch(setUserSession(res.user));
    } else {
      return dispatch(deleteUserSession());
    }
  });
