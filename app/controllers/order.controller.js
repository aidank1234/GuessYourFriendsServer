const db = require("../models");
const Order = db.order;

exports.add_order = (req, res) => {
    // Create a Menu Item
    const order = new Order({
        username: req.body.username.toLowerCase(),
        menueItem: req.body.menueItem(),
        cost: req.body.cost,
        pickUpTime: req.body.pickUpTime,
        car: req.body.car
    });

    order.save(order)
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.status(500).json({ message: err.message || "There was a problem creating the order" })
        });
};

exports.update_item_with_name = (req, res) => {
    Order.findOne({ name: req.body.name }, (item) => {

    });
};

