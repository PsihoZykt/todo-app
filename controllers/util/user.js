const crypto = require('crypto');
const User = require('../../models/userModel');

const hash = text => crypto
  .createHash('sha1')
  .update(text)
  .digest('base64');

const createUser = (userData) => {
  const user = {
    username: userData.username,
    email: userData.email,
    password: hash(userData.password),
  };
  console.log(user);

  return new User(user).save();
};
module.exports = createUser;

const checkUser = userData => User.findOne({ email: userData.email }).then((doc) => {
  if (doc.password === hash(userData.password)) {
    console.log('User password is ok');
    return Promise.resolve(doc);
  }
  return Promise.reject('Password not found');
});

module.exports = checkUser;
