const express = require('express');
const path = require('path');
const morgan = require('morgan');

const serverConfig = (app) => {
  app.use(morgan('dev'));
  app.use(express.static(path.join(`${__dirname}/../public`)));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
};

module.exports = serverConfig;
