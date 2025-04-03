import { createItemWithSubTotal } from "./services/item.js";

const cart = [];

console.log("Shopping cart initialized.");

const item1 = await createItemWithSubTotal(
  1,
  "Mouse Attack Shark x11",
  130.0,
  1
);
const item2 = await createItemWithSubTotal(
  2,
  "Tecaldo Attack Shark M87PRO",
  392.5,
  2
);
console.log(item1.subtotal); // 130.0
console.log(item2.subtotal); // 785.0
