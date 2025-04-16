class Order {
    constructor() {
        this.items = [];
    }

    reset() {
        this.client = null;
        this.items = [];
        this.paymentMethod = null;
        this.discount = null;
        return this;
    }

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

    withDiscount(discount) {
        this.discount = discount;
        return this;
    }

    build() {
        return this;
    }
};

export default Order;