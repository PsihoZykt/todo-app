const crypto = require('crypto');

const User = require('../models/userModel');

// User API
function hash(text) {
  return crypto.createHash('sha1')
    .update(text).digest('base64');
}

exports.createUser = (userData) => {
  const user = {
    username: userData.username,
    email: userData.email,
    password: hash(userData.password),
  };
  console.log(user);

  return new User(user).save();
};

exports.getUser = id => User.findOne(id);


exports.checkUser = userData => User
  .findOne({ email: userData.email })
  .then((doc) => {
    console.log(`doc is ${doc}`);
    console.log(userData);
    if (doc.password === hash(userData.password)) {
      console.log('User password is ok');
      return Promise.resolve(doc);
    }
    return Promise.reject('Error wrong');
  });
