import Order from "./OrderBuilder";

class Director {
    createSimpleOrder(builder) {
        builder.reset()
            .withClient("Felipe")
            .withPaymentMethod("Pix");
    }

    createOrderWithDiscount(builder) {
        builder.reset()
            .withClient("Felipe")
            .withPaymentMethod("Pix")
            .withDiscount("discount10");
    }
};

export default Director;