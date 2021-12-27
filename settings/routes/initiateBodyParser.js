const bodyParser = require('body-parser');
const express = require('express');
var multer = require('multer');
var forms = multer();
module.exports = (app) => {
  app.use(bodyParser.json());
  app.use(forms.array());
  app.use(bodyParser.urlencoded({ extended: true }));
};
