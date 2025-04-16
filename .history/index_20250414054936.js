import Order from "./src/Order.js";

let order = new Order()
    .withClient("Felipe")
    .withPaymentMethod("Pix")
    .build();

console.log("Finished");