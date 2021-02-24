module.exports = app => {
    const menuItem = require("../controllers/menuItem.controller.js");

    let router = require("express").Router();

    // Create a new Menu Item
    router.post("/", menuItem.add_menu_item);


    app.use('/api/menuItem', router);
};
