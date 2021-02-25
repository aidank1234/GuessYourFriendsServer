const uniqueValidator = require('mongoose-unique-validator');

module.exports = mongoose => {
    const adminUserSchema = mongoose.Schema(
        {
            username: {type: String, unique: true, required: true},
            password: {type: String, unique: false, required: true},
        },
        {timestamps: true}
    );

    adminUserSchema.plugin(uniqueValidator, { message: '{PATH} has already been used.' });

    const AdminUser = mongoose.model(
        "adminUser",
        adminUserSchema
    );

    return AdminUser;
};
