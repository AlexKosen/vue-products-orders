import { createStore } from "vuex";
import axios from "axios";

export const store = createStore({
    state() {
      return {
        products: [],
        orders: [],
        isShowArrow: false
      };
    },
    mutations: {
      SET_PRODUCT_TO_STATE: (state, products) => {
        state.products = products;
      },
      SET_ORDERS_TO_STATE: (state, orders) => {
        state.orders = orders
      },
      SET_VIEW_ARROW_ORDER_ITEM: (state) => {
        state.isShowArrow = true
      }
    },
    actions: {
      GET_PRODUCTS_FROM_API({ commit }) {
        return axios
          .get("https://dzencode-e2739-default-rtdb.europe-west1.firebasedatabase.app/products.json")
          .then((products) => {
            commit("SET_PRODUCT_TO_STATE", products.data);
            return products;
          })
          .catch((error) => {
            console.log(error);
            return error;
          })
      },
      GET_ORDERS_FROM_API({ commit }) {
        return axios
          .get("https://dzencode-e2739-default-rtdb.europe-west1.firebasedatabase.app/orders.json")
          .then((orders) => {
            commit("SET_ORDERS_TO_STATE", orders.data);
            return orders;
          })
          .catch((error) => {
            console.log(error);
            return error;
          })
      },
      CHANGE_VIEW_ARROW_ORDER_ITEM({ commit }) {
        commit("SET_VIEW_ARROW_ORDER_ITEM")
      }
    },
    getters: {
      PRODUCTS(state) {
        return state.products;
      },
      ORDERS(state) {
        return state.orders;
      },
      ISSHOWARROW(state) {
        return state.isShowArrow
      }
    }
  });