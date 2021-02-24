module.exports = mongoose => {
    const orderSchema = mongoose.Schema(
        {
            username: { type: String, unique: false, required: true },

            // need to figure out what we want to do with all of the food items
            //menueItem: { type: String, unique: true, required: true },
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