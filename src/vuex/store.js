import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    products: [],
    cart: [],
  },
  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products;
    },
    SET_CART: (state, product) => {
      if (state.cart.length) {
        let isProductsExists = false;
        state.cart.map((item) => {
          if (item.article === product.article) {
            isProductsExists = true;
            item.quantity++;
          }
        });
        if (!isProductsExists) {
          state.cart.push(product);
        }
      } else {
        state.cart.push(product);
      }
    },
    INCREMENT: (state, index) => {
      state.cart[index].quantity++;
    },
    REMOVE_FROM_CART: (state, index) => {
      state.cart.splice(index, 1);
    },
    DECREMENT: (state, index) => {
      if (state.cart[index].quantity > 1) {
        state.cart[index].quantity--;
      }
    },
  },
  actions: {
    GET_PRODUCTS_WITH_SERVER({ commit }) {
      return axios("http://localhost:3000/products", {
        method: "GET",
      })
        .then((payload) => {
          commit("SET_PRODUCTS_TO_STATE", payload.data);
          return payload;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },

    ADD_TO_CART({ commit }, product) {
      commit("SET_CART", product);
    },

    INCREMENT_CART_ITEM({ commit }, index) {
      commit("INCREMENT", index);
    },

    DELETE_FROM_CART({ commit }, index) {
      commit("REMOVE_FROM_CART", index);
    },

    DECREMENT_CART_ITEM({ commit }, index) {
      commit("DECREMENT", index);
    },
  },
  getters: {
    PRODUCTS(state) {
      return state.products;
    },
    CART(state) {
      return state.cart;
    },
  },
});

export default store;
