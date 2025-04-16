import Order from "./src/Order.js";

let order = new Order()
    .withClient("Felipe")
    .withPaymentMethod("Pix")
    .build();

// order.withClient("Felipe");
console.log("Finished");