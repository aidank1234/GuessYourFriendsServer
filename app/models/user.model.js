module.exports = mongoose => {
    const userSchema = mongoose.Schema(
        {
            deviceId: {type: String, unique: true, required: true}
        },
        {timestamps: true}
    );

    const User = mongoose.model(
        "user",
        userSchema
    );

    return User;
};
