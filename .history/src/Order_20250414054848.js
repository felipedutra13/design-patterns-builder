class Order {
    constructor() {
        
    }

    reset() {
        this = null;
        return this;
    }

    withClient(client) {
        this.client = client;
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