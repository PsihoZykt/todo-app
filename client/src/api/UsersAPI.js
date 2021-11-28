import instance from './instance';

const APPLICATION_JSON = 'application/json';

const UsersAPI = {
  createUser(username, email, password) {
    const data = {
      username,
      email,
      password,
    };
    return instance.post('/api/register', data);
  },
  login(username, email, password) {
    const userData = {
      username,
      email,
      password,
    };
    return instance.post('/api/login', userData).then(response => response.data.user)
      .catch((err) => {
        throw err.response.data
      });
  },
  logout() {
    return instance.delete('/api/logout').then(response => response.data);
  },

  isAuth() {
    return instance.get('/api/auth').then(response => response.data);
  },
};

export default UsersAPI;
