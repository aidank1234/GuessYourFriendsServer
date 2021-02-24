module.exports = mongoose => {
    const menuItemSchema = mongoose.Schema(
        {
            price: {type: Number, unique: false, required: true},
            name: {type: String, unique: true, required: true},
            imageURL: {type: String, unique: true, required: true},
            available: {type: Boolean, unique: false, required: true}
        },
        {timestamps: true}
    );

    const MenuItem = mongoose.model(
        "menuItem",
        menuItemSchema
    );

    return MenuItem;
};
