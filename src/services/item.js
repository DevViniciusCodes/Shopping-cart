// Ações:
//Criar item com subtotal
async function createItemWithSubTotal(itemId, name, price, quantity) {
  return {
    id: itemId,
    name: name,
    price: price,
    quantity: quantity,
    subtotal: price * quantity,
  };
}

export { createItemWithSubTotal };
