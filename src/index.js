import * as cartService from "./services/cart.js";
import * as itemService from "./services/item.js";
import { createItem } from "./services/item.js";

const myCart = []; // Criando o carrinho de compras
const myWhishList = []; // Criando a lista de desejos
// const myWallet = []; // Criando a carteira

console.log("Seu Carrinho de Compras: ");

// Criando itens
const item1 = await createItem(1, "Mouse Attack Shark x11", 130.0, 1);
const item2 = await createItem(2, "Teclado Attack Shark M87PRO", 392.5, 2);
const item3 = await createItem(3, "Monitor LG 27", 575.0, 1);

// Exibindo os subtotais dos itens criados
console.log(item1.subtotal); // 130.0
console.log(item2.subtotal); // 785.0
console.log("\n");

// Adicionando itens ao carrinho
await cartService.addItemToCart(myCart, item1);
await cartService.addItemToCart(myCart, item2);
console.log("\n");

// Adicionando itens à lista de desejos
await cartService.addItemToCart(myWhishList, item3);
console.log("\n");

// Exibindo o subtotal do item 3
console.log(item3.subtotal); // 575.0
console.log("\n");

// Exibindo o valor total dos itens do carrinho
await cartService.getCartTotal(myCart); // 915.0;
console.log("\n");

await cartService.removeItemFromCart(myCart, item2.id); // Removendo uma unidade do item2 do carrinho
await cartService.getCartTotal(myCart); // Exibindo o valor total do carrinho após a exclusão do item2 // 130.0
console.log("\n");

// Exibindo o valor total da lista de desejos
await cartService.getCartTotal(myWhishList); // 575.0

await cartService.deleteItemFromCart(myCart, item1.id); // Deletando o item1 do carrinho

// Exibindo os itens do carrinho
await cartService.displayCartItems(myCart); // Exibindo os itens do carrinho
await cartService.displayCartItems(myWhishList); // Exibindo os itens do carrinho
