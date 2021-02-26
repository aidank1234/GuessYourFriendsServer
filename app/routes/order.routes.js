module.exports = app => {
    const order = require("../controllers/order.controller.js");

    let router = require("express").Router();

    // Create a new Menu Item
    router.post("/", order.add_order);

    // Get all orders for user
    router.get("/", order.get_ongoing_orders);

    // Gets all orders from the past
    router.get("/all", order.get_all_orders);

    // Mark order with id complete
    router.post("/complete", order.mark_order_complete);

    // Mark order with id as high priority
    router.post("/priority", order.mark_order_high_priority);


    app.use('/api/order', router);
};
