class Order {
    constructor() {
        
    }

    withClient(client) {
        this.client = client;
        return this;
    }

    withPaymentMethod(paymentMethod) {
        this.paymentMethod = paymentMethod;
        return this;
    }
};

export default Order;