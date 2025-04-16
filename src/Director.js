class Director {
    createSimpleOrder(builder) {
        return builder.reset()
            .withClient("Felipe")
            .withPaymentMethod("Pix")
            .build();
    }

    createOrderWithDiscount(builder) {
        return builder.reset()
            .withClient("Felipe")
            .withPaymentMethod("Pix")
            .withDiscount("discount10")
            .build();
    }
};

export default Director;