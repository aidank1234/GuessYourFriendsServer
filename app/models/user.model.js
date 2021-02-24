const uniqueValidator = require('mongoose-unique-validator');

module.exports = mongoose => {
    const userSchema = mongoose.Schema(
        {
            username: {type: String, unique: true, required: true},
            password: {type: String, unique: false, required: true},
            phoneNumber: {type: String, unique: true, required: true},
            address: {type: String, unique: true, required: true}
        },
        {timestamps: true}
    );

    userSchema.plugin(uniqueValidator, { message: '{PATH} has already been used.' });

    const User = mongoose.model(
        "user",
        userSchema
    );

    return User;
};
