// Ações:
// - Adicionar item ao carrinho - Adiciona um item ao carrinho
async function addItemToCart(userId, item) {
  const cart = await getCart(userId);
  cart.items.push(item);
  await saveCart(cart);
}

// - Deletar item do carrinho - Exclui o item do carrinho
async function deleteItemFromCart(userId, itemId) {
  const cart = await getCart(userId);
  cart.items = cart.items.filter((item) => item.id !== itemId);
  await saveCart(cart);
}

// - Remover item do carrinho - Diminui uma unidade do item
async function removeItemFromCart(userId, itemId) {
  const cart = await getCart(userId);
  const item = cart.items.find((item) => item.id === itemId);
  if (item) {
    item.quantity -= 1;
    if (item.quantity <= 0) {
      cart.items = cart.items.filter((item) => item.id !== itemId);
    }
    await saveCart(cart);
  }
}

// - Atualizar quantidade de um item no carrinho
async function updateItemQuantityInCart(userId, itemId, quantity) {
  const cart = await getCart(userId);
  const item = cart.items.find((item) => item.id === itemId);
  if (item) {
    item.quantity = quantity;
    await saveCart(cart);
  }
}

// - Limpar carrinho
async function clearCart(userId) {
  const cart = await getCart(userId);
  cart.items = [];
  await saveCart(cart);
}
// - Obter itens do carrinho - Retorna os itens do carrinho

// - Obter total do carrinho - Calcula o valor total do carrinho
async function getCartTotal(userId) {
  const cart = await getCart(userId);
  return cart.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
}
// - Obter quantidade total de itens no carrinho
// - Aplicar desconto
// - Remover desconto
// - Obter valor total do carrinho sem desconto
// - Obter valor total do carrinho com desconto
// - Obter valor total do carrinho com desconto e frete
// - Obter valor total do carrinho com desconto, frete e impostos
