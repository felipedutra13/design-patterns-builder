class Order {
    constructor() {
        this.items = [];
    }

    // reset() {
    //     this = {};
    //     return this;
    // }

    withClient(client) {
        this.client = client;
        return this;
    }

    withItem({ product, amount = 1 }) {
        this.items.push({
            product,
            amount
        });
        return this;
    }

    withPaymentMethod(paymentMethod) {
        this.paymentMethod = paymentMethod;
        return this;
    }

    build() {
        return this;
    }
};

export default Order;