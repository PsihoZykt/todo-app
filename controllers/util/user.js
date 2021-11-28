const crypto = require('crypto');
const User = require('../../models/userModel');

const hash = text => crypto
  .createHash('sha1')
  .update(text)
  .digest('base64');


exports.createUser = (userData) => {
  const user = {
    username: userData.username,
    email: userData.email,
    password: hash(userData.password),
  };
  return new User(user).save();
};

// Check if entered password is correct
exports.checkUser = userData => User.findOne({ email: userData.email })
  .then((user) => {
    if (!user) return Promise.reject('There is no user with this credentials');
    if (user.password === hash(userData.password)) {
      console.log('User password is ok');
      return Promise.resolve(user);
    }
    return Promise.reject('Password not found');
  })
  .catch((err) => {
    console.log('user.js checkUser: ' + err);
    throw err;
  });
