import UsersAPI from '../api/UsersAPI';

const SET_USER = 'SET_USER';

const initialState = {
    isAuth: false,
    currentUser: {},
};

export default (state = initialState, action) => {
    // eslint-disable-next-line sonarjs/no-small-switch
    switch (action.type) {
        case SET_USER: {
            return {...state, isAuth: action.isAuth, currentUser: action.user};
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
export const login = (username, email, password) => dispatch => UsersAPI.login(username, email, password).then((res) => {
    console.log("LOGIN IS" + res.user)
    if (res.user !== null) return dispatch(setUserSession(res.user));
    console.log("TESTING")
    return dispatch(deleteUserSession());
});

export const logout = () => dispatch => UsersAPI.logout().then(() => dispatch(deleteUserSession()));
export const createUser = (username, email, password) => dispatch => UsersAPI.createUser(username, email, password);
export const isAuth = (username, email, password) => dispatch => UsersAPI.isAuth(username, email, password);
