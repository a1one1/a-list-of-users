<template>
  <div class="v-cart">
    <div class="v-cart__navigate">
      <router-link :to="{ name: 'catalog' }"><span>Catalog</span></router-link>
      <router-link :to="{ name: 'cart', params: { cart_data: CART } }"
        ><span>Cart</span></router-link
      >
    </div>
    <p v-if="!cart_data.length">There are no products in cart...</p>
    <v-cart-item
      v-for="(item, index) in cart_data"
      :key="item.article"
      :cart_item_data="item"
      @deleteFromCart="deleteFromCart(index)"
      @increment="increment(index)"
      @decrement="decrement(index)"
    />
    <div class="v-cart__total">
      <p class="total__name">Total:</p>
      <p>{{ cartTotalCost }} Р</p>
    </div>
  </div>
</template>

<script>
import vCartItem from "@/components/cart/cart-item/v-cart-item";
import { mapActions } from "vuex";

export default {
  name: "v-cart",
  components: {
    vCartItem,
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  computed: {
    cartTotalCost() {
      let proof = [];

      for (let item of this.cart_data) {
        proof.push(item.price * item.quantity);
      }

      let price = 0;

      for (let item of proof) {
        price = price + item;
      }

      return price;
    },
  },
  methods: {
    ...mapActions([
      "DELETE_FROM_CART",
      "INCREMENT_CART_ITEM",
      "DECREMENT_CART_ITEM",
    ]),
    increment(index) {
      this.INCREMENT_CART_ITEM(index);
    },
    decrement(index) {
      this.DECREMENT_CART_ITEM(index);
    },
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index);
    },
  },
};
</script>

<style lang="scss">
.v-cart {
  margin-bottom: 100px;
  a {
    text-decoration: none;
    color: black;
  }
  &__navigate {
    padding: 20px 0;
    width: 300px;
    margin: 0 auto;
    font-size: 32px;
    cursor: default;
    display: flex;
    justify-content: space-between;
  }
  &__total {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    padding: 8px 12px;
    display: flex;
    justify-content: center;
    background: blue;
    color: #ffffff;
    font-size: 20px;
  }
  .total__name {
    margin-right: 4px * 2;
  }
}
</style>
