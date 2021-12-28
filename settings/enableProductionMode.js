const express = require('express');
const path = require('path');

module.exports = (app) => {
  // if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, '..', 'client', 'build')));
  app.get('*', (req, res) => {
    const index = path.join(__dirname, '..', 'client', 'build', 'index.html');
    res.sendFile(index);
  });
  // }
  console.log(`App started in [${process.env.MODE}] mode`);
};
