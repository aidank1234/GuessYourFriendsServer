module.exports = mongoose => {
    const userSchema = mongoose.Schema(
        {
            username: {type: String, unique: true, required: true},
            password: {type: String, unique: false, required: true},
            phoneNumber: {type: String, unique: true, required: true}
        },
        {timestamps: true}
    );

    const User = mongoose.model(
        "user",
        userSchema
    );

    return User;
};
