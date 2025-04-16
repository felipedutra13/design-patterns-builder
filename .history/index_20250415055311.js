import Director from "./src/Director.js";
import Order from "./src/OrderBuilder.js";

const orderBuilder = new orderBuilder();
const director = new Director();

const order = director.createSimpleOrder(orderBuilder);

console.log(order);