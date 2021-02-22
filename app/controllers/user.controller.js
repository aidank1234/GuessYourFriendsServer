const db = require("../models");
const User = db.user;

// Create and save a new User
exports.create = (req, res) => {
    // Create a User
    const user = new User({
        deviceId: req.body.deviceId.toLowerCase()
    });

    // Save user in the database
    user
        .save(user)
        .then(data => {
            // Return new user data
            res.json({user: data});
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "An error occurred while creating the user"
            });
        });
};
