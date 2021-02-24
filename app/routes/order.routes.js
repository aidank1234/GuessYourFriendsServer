module.exports = app => {
    const order = require("../controllers/order.controller.js");

    let router = require("express").Router();

    // Create a new Menu Item
    router.post("/", order.add_order);


    app.use('/api/order', router);
};