module.exports = app => {
    const users = require("../controllers/adminUser.controller.js");

    let router = require("express").Router();

    // Create a new admin User
    router.post("/", users.create);

    // Log in with username
    router.post("/login", users.logIn);

    app.use('/api/adminUsers', router);
};
