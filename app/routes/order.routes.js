module.exports = app => {
    const order = require("../controllers/order.controller.js");

    let router = require("express").Router();

    // Create a new Menu Item
    router.post("/", order.add_order);

    // Get all orders for user
    router.get("/", order.get_ongoing_orders);

    // Mark order with id complete
    router.post("/complete", order.mark_order_complete);


    app.use('/api/order', router);
};
