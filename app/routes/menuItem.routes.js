module.exports = app => {
    const menuItem = require("../controllers/menuItem.controller.js");

    let router = require("express").Router();

    // Create a new Menu Item
    router.post("/", menuItem.add_menu_item);

    // Gets all menu items
    router.get("/", menuItem.get_all_menu_items);

    // Updates menu item availability by name
    router.put("/availability", menuItem.update_availability);


    app.use('/api/menuItem', router);
};
