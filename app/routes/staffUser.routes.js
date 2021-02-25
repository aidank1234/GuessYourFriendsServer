module.exports = app => {
    const users = require("../controllers/staffUser.controller.js");

    let router = require("express").Router();

    // Create a new staff User
    router.post("/", users.create);

    // Log in with username
    router.post("/login", users.logIn);

    app.use('/api/staffUsers', router);
};
