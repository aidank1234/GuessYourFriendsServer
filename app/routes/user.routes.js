module.exports = app => {
    const users = require("../controllers/user.controller.js");

    let router = require("express").Router();

    // Create a new User
    router.post("/", users.create);

    app.use('/api/users', router);
};
