const db = require("../models");
const Order = db.order;

exports.add_order = (req, res) => {
    // Create a new Order
    const order = new Order({
        username: req.body.username.toLowerCase(),
        menuItems: req.body.menuItems,
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

exports.get_ongoing_orders = (req, res) => {
    Order.find({completed: false})
        .then((data) => {
            res.json(data);
        })
        .catch(err => {
            res.status(500).json({message: err.message || "There was a problem getting orders for user"})
        })
};

exports.mark_order_complete = (req, res) => {
    Order.updateOne({_id: req.body._id}, {
        completed: true
    }).then((order) => {
        res.json(order);
    }).catch(err => {
        res.status(500).json({ message: err.message || "There was a problem marking order as completed" })
    });
};

exports.mark_order_high_priority = (req, res) => {
    Order.updateOne({_id: req.body._id}, {
        highPriority: true
    }).then((order) => {
        res.json(order);
    }).catch(err => {
        res.status(500).json({ message: err.message || "There was a problem marking order as high priority" })
    });
};
