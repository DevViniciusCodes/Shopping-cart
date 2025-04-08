// Ações:
// - Adicionar item ao carrinho - Adiciona um item ao carrinho
async function addItemToCart(userCart, item) {
  userCart.push(item);
  console.log(`Item ${item.id} adicionado ao carrinho.`);
  return userCart;
}
// - Remover item do carrinho - Diminui uma unidade do item
async function removeItemFromCart(userCart, itemId) {
  const indexFund = userCart.findIndex((item) => item.id === itemId);
  if (indexFund !== -1) {
    const item = userCart[indexFund];
    if (item.quantity > 1) {
      item.quantity -= 1;
      item.subtotal = item.price * item.quantity;
      console.log(`Item ${itemId} atualizado no carrinho.`);
    } else {
      userCart.splice(indexFund, 1);
      console.log(`Item ${itemId} removido do carrinho.`);
    }
  } else {
    console.log(`Item ${itemId} não encontrado no carrinho.`);
  }
}
// - Deletar item do carrinho - Exclui o item do carrinho
async function deleteItemFromCart(userCart, itemId) {
  const itemIndex = userCart.findIndex((item) => item.id === itemId);
  if (itemIndex !== -1) {
    userCart.splice(itemIndex, 1);
    console.log(`Item ${itemId} deletado do carrinho.`);
  } else {
    console.log(`Item ${itemId} não encontrado no carrinho.`);
  }
  return userCart;
}

// - Atualizar quantidade de um item no carrinho
async function updateItemQuantityInCart(userCart, itemId, quantity) {}

// - Limpar carrinho
async function clearCart(userCart) {}

// - Exibir itens do carrinho - Retorna os itens do carrinho
async function displayCartItems(userCart) {
  console.log("\nItens do carrinho:");
  userCart.forEach((item) => {
    console.log(
      `${item.id}. ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal = ${item.subtotal}`
    );
  });
}

// - Obter total do carrinho - Calcula o valor total do carrinho
async function getCartTotal(userCart) {
  const total = userCart.reduce((acc, item) => acc + item.subtotal, 0);
  console.log("Total do carrinho:", total);
  return total;
}
// - Obter itens do carrinho com desconto - Retorna os itens do carrinho com desconto
// - Obter quantidade total de itens no carrinho
// - Aplicar desconto
// - Remover desconto
// - Obter valor total do carrinho sem desconto
// - Obter valor total do carrinho com desconto
// - Obter valor total do carrinho com desconto e frete
// - Obter valor total do carrinho com desconto, frete e impostos

export {
  addItemToCart,
  deleteItemFromCart,
  removeItemFromCart,
  updateItemQuantityInCart,
  clearCart,
  getCartTotal,
  displayCartItems,
};
