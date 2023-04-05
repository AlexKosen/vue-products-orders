import { createStore } from "vuex";
import axios from "axios";

export const store = createStore({
  state() {
    return {
      products: [],
      orders: [],
      orderItem: [],
    };
  },
  mutations: {
    SET_PRODUCT_TO_STATE: (state, products) => {
      state.products = products;
    },
    SET_ORDERS_TO_STATE: (state, orders) => {
      state.orders = orders;
    },
    SET_ORDER_VIEW_ITEM: (state, product_item) => {
      state.orderItem = product_item;
    },
    SET_DELETE_ORDER_ITEM: (state) => {
      state.orderItem = [];
    },
  },
  actions: {
    GET_PRODUCTS_FROM_API({ commit }) {
      return axios
        .get(
          "https://dzencode-e2739-default-rtdb.europe-west1.firebasedatabase.app/products.json"
        )
        .then((products) => {
          commit("SET_PRODUCT_TO_STATE", products.data);
          return products;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
    GET_ORDERS_FROM_API({ commit }) {
      return axios
        .get(
          "https://dzencode-e2739-default-rtdb.europe-west1.firebasedatabase.app/orders.json"
        )
        .then((orders) => {
          commit("SET_ORDERS_TO_STATE", orders.data);
          return orders;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
    DELETE_ORDER_FROM_API({ commit }, id) {
      alert(id)
      return axios
        .delete(
          `https://dzencode-e2739-default-rtdb.europe-west1.firebasedatabase.app/orders.id${id}.json`
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
          axios
            .delete(
              `https://dzencode-e2739-default-rtdb.europe-west1.firebasedatabase.app/products.order.id${id}.json`
            )
            .then((response) => {
              console.log(response);
            })
            .catch((error) => {
              console.log(error);
              axios
                .get(
                  "https://dzencode-e2739-default-rtdb.europe-west1.firebasedatabase.app/orders.json"
                )
                .then((orders) => {
                  commit("SET_ORDERS_TO_STATE", orders.data);
                  return orders;
                })
                .catch((error) => {
                  console.log(error);
                  return error;
                });
            });
        });
    },

    ORDER_VIEW_ITEM({ commit }, product_item) {
      commit("SET_ORDER_VIEW_ITEM", product_item);
    },
    DELETE_ORDER_ITEM({ commit }) {
      commit("SET_DELETE_ORDER_ITEM");
    },
  },
  getters: {
    PRODUCTS(state) {
      return state.products;
    },
    ORDERS(state) {
      return state.orders;
    },
    ORDERITEM(state) {
      return state.orderItem;
    },
  },
});
