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

exports.get_all_menu_items = (req, res) => {
  MenuItem.find({})
      .then(data => {
          res.json(data)
      })
      .catch(err => {
          res.status(500).json({message: err.message || "Unable to get menu items"})
      });
};

exports.update_availability = (req, res) => {
    MenuItem.updateOne({name: req.body.name}, {
        available: req.body.available
    }).then((item) => {
        res.json(item);
    }).catch(err => {
       res.status(500).json({message: err.message || "There was a problem marking menu item available"})
    });
};




