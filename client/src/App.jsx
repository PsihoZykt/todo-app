import React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import Header from './components/header';
import Content from './components/content/Content';
import store from './redux/store';
import Login from './components/content/login/Login';
import RegisterPage from './components/content/register/RegisterPage';

const App = () => (
  // <React.StrictMode>
  <Provider store={store}>
    <div className="container-fluid">
      <Header/>
      <Route exact path="/login" render={() => <Login/>}/>
      <Route exact path="/register" render={() => <RegisterPage/>}/>
      <Route path="/tasks" render={() => <Content/>}/>
      <Route exact path="/" render={() => <Content/>}/>

    </div>
  </Provider>
  // </React.StrictMode>
);

export default App;
