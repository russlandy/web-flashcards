const express = require("express");
const path = require("path")
// const morgan = require("morgan");
const ssr = require("../middleware/ssr");

const serverConfig = (app) => {
    // app.use(morgan);
    app.use(express.static(path.join(`${__dirname}/../public`)));
    app.use(express.json());
    app.use(express.urlencoded({extended: true}))
    app.use(ssr)
}

module.exports = serverConfig;