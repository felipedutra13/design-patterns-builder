import Order from "./OrderBuilder";

class Director {
    createSimpleOrder() {
        const order = new Order();
        order.withClient()
    }
};

export default Director;