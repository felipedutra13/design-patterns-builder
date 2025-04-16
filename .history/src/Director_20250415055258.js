class Director {
    createSimpleOrder(builder) {
        builder.reset()
            .withClient("Felipe")
            .withPaymentMethod("Pix")
            .build();
    }

    createOrderWithDiscount(builder) {
        builder.reset()
            .withClient("Felipe")
            .withPaymentMethod("Pix")
            .withDiscount("discount10")
            .build();
    }
};

export default Director;