const db = require("../models");
const User = db.staffUser;
const jwt = require('jsonwebtoken');
const passwordHash = require('password-hash');

// Create and save a new User
exports.create = (req, res) => {
    console.log(req.body);

    // Validate request
    if(!req.body.username || !req.body.pass) {
        res.status(400).send({message: "Content cannot be empty"});
        return;
    }

    // Create a User
    const user = new User({
        username: req.body.username.toLowerCase(),
        password: passwordHash.generate(req.body.pass)
    });

    // Save user in the database
    user
        .save(user)
        .then(data => {
            // Remove sensitive information from response
            data.password = undefined;
            // Return new user data and jwt
            res.json({user: data, token: jwt.sign({_id: user._id, username: user.username}, 'BadgerBytesServer')});
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "An error occurred while creating the user"
            });
        });
};

// Logs a user in with either a username or email and a password. Gives back token if authenticated.
exports.logIn = (req, res) => {
    // Validate request
    if(!req.body.username) {
        res.status(400).send({message: "Content cannot be empty"});
        return;
    }
    else if(!req.body.pass) {
        res.status(400).send({message: "Content cannot be empty"});
        return;
    }

    User.findOne({username: req.body.username})
        .then(data => {
            // User not found, cannot login
            if(data == null) {
                return res.status(401).send({
                    message: "User not found"
                });
            }
            // Validate password
            if (!(passwordHash.verify(req.body.pass, data.password))) {
                return res.status(401).send({
                    message: "Incorrect password"
                });
            }
            // Everything looks good, authenticate
            // Remove sensitive information from response
            data.password = undefined;
            //Return user data and jwt
            res.json({user: data, token: jwt.sign({_id: data._id, username: data.username}, 'BadgerBytesServer')})
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "An error occurred while logging in"
            });
        });
};


