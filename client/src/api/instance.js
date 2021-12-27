import * as axios from 'axios';

const LOCALHOST_URL = 'http://localhost:3005';
const HEROKU_URL = 'https://psihozykt-todo-app-back.herokuapp.com/';
const instance = axios.create({
  // withCredentials: true,
  //   headers: {
  //     'API-KEY': '0fcd9800-5d1b-4570-843a-285dcfb7ded9',
  //   },

  baseURL: LOCALHOST_URL,
});

export default instance;
