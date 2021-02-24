module.exports = mongoose => {
    const orderSchema = mongoose.Schema(
        {
            username: { type: String, unique: false, required: true },
            menueItem: {
                type: Array, unique: true, required: true, default: [] },
            cost: { type: String, unique: true, required: true },
            pickUpTime: { type: Boolean, unique: false, required: true },
            car: { type: String, unique: false, required: true }
        },
        { timestamps: true }
    );

    const Order = mongoose.model(
        "order",
        orderSchema
    );

    return Order;
};