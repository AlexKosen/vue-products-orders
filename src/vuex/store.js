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
    RELOUD: () => {
      location.reload();
    }
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
      const filteredOrders = this.state.orders.filter(
        (order) => order.id !== id
      );
      const filteredProducts = this.state.products.filter(
        (product) => product.order !== id
      );
      axios
        .put("https://dzencode-e2739-default-rtdb.europe-west1.firebasedatabase.app/.json", {
          orders: filteredOrders,
          products: filteredProducts,
        })
        .then((response) => {
          console.log(response.data);
          commit("RELOUD");
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
