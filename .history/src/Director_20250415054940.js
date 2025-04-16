import Order from "./OrderBuilder";

class Director {
    createSimpleOrder(builder) {
        builder.reset()
            .withClient("Felipe")
            .withPaymentMethod("Pix");
    }
};

export default Director;