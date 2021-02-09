export default {
  namespaced: true,
  state() {
    return {
      items: [],
      quantity: 0,
      total: 0,
    }
  },
  mutations: {
    addProductToCart(productData) {
      const productInCartIndex = this.cart.items.findIndex(
        (item) => item.productId === productData.id
      );

      if (productInCartIndex >= 0) {
        this.cart.items[productInCartIndex].qty++;
      } else {
        const newItem = {
          productId: productData.id,
          title: productData.title,
          image: productData.image,
          price: productData.price,
          qty: 1,
        };
        this.cart.items.push(newItem);
      }
      this.cart.qty++;
      this.cart.total += productData.price;
    },
    removeProductFromCart(prodId) {
      const productInCartIndex = this.cart.items.findIndex(
        (cartItem) => cartItem.productId === prodId
      );
      const prodData = this.cart.items[productInCartIndex];
      this.cart.items.splice(productInCartIndex, 1);
      this.cart.qty -= prodData.qty;
      this.cart.total -= prodData.price * prodData.qty;
    }
  },
  actions: {
    addToCart(context, payload) {
      context.commit('addProductToCart', payload)
    },
    removeFromCart(context, productId) {
      context.commit('removeProductFromCart', productId)
    }
  }
}