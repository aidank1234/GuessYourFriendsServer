module.exports = mongoose => {
    const orderSchema = mongoose.Schema(
        {
            username: { type: String, unique: false, required: true },
            menuItems: { type: Array, unique: false, required: true},
            cost: { type: String, unique: false, required: true },
            pickUpTime: { type: String, unique: false, required: true },
            car: { type: String, unique: false, required: true },
            completed: { type: Boolean, unique: false, required: true, default: false },
            highPriority: {type: Boolean, unique: false, required: true, default: false}
        },
        { timestamps: true }
    );

    const Order = mongoose.model(
        "order",
        orderSchema
    );

    return Order;
};
