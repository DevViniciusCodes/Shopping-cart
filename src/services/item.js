// Ações:
//Criar item com subtotal
async function createItem(itemId, name, price, quantity) {
  return {
    id: itemId,
    name: name,
    price: price,
    quantity: quantity,
    subtotal: price * quantity,
  };
}

export { createItem };
