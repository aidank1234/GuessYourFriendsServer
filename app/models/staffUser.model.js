const uniqueValidator = require('mongoose-unique-validator');

module.exports = mongoose => {
    const staffUserSchema = mongoose.Schema(
        {
            username: {type: String, unique: true, required: true},
            password: {type: String, unique: false, required: true},
        },
        {timestamps: true}
    );

    staffUserSchema.plugin(uniqueValidator, { message: '{PATH} has already been used.' });

    const StaffUser = mongoose.model(
        "staffUser",
        staffUserSchema
    );

    return StaffUser;
};
