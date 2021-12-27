import instance from './instance';

const APPLICATION_JSON = 'application/json';

const UsersAPI = {
  createUser(username, email, password) {
    const userData = {
      username,
      email,
      password,
    };
    console.log(userData)
    return instance.post('/api/user/register', userData).catch(err => {
      throw err.response.data
    });
  },
  login(username, email, password) {
    const userData = {
      email,
      username,
      password,
    };
    console.log(userData)
    return instance.post('/api/user/login', userData).then(response => response.data)
      .catch((err) => {
        throw err.response.data
      });
  },

  logout() {
    return instance.delete('/api/user/logout').then(response => response.data);
  },

  isAuth() {
    return instance.get('/api/user/auth').then(response => response.data).catch(err => {
      return err.response.data
    });
  },
};

export default UsersAPI;
