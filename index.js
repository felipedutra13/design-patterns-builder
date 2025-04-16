import Director from "./src/Director.js";
import OrderBuilder from "./src/OrderBuilder.js";

const orderBuilder = new OrderBuilder();
const director = new Director();

const order = director.createSimpleOrder(orderBuilder);

console.log(order);