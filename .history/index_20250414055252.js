import Order from "./src/Order.js";

let order = new Order()
    .withClient("Felipe")
    .withItem({ product: "Aveia", amount: 2 })
    .withItem({ product: "Mel" })
    .withPaymentMethod("Pix")
    .build();

console.log(order);
console.log("Finished");