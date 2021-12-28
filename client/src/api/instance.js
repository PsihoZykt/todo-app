import * as axios from 'axios';
const baseURL = "https://psihozykt-todo-app.herokuapp.com"
// const baseURL = "http://localhost:3005"
const instance = axios.create({
  // withCredentials: true,
  //   headers: {
  //     'API-KEY': '0fcd9800-5d1b-4570-843a-285dcfb7ded9',
  //   },

  // baseURL: LOCALHOST_URL,
  baseURL: baseURL,
});

export default instance;
