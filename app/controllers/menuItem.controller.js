const db = require("../models");
const MenuItem = db.menuItem;

exports.add_menu_item = (req, res) => {
    // Create a Menu Item
    const menuItem = new MenuItem({
        name: req.body.name.toLowerCase(),
        available: req.body.available,
        price: req.body.price,
        imageURL: req.body.imageURL
    });

    menuItem.save(menuItem)
        .then(data => {
           res.json(data)
        })
        .catch(err => {
            res.status(500).json({message: err.message || "There was a problem creating the menu item"})
        });
};

exports.update_item_with_name = (req, res) => {
    MenuItem.findOne({name: req.body.name}, (item) => {

    });
};



